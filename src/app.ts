import * as bodyParser from "body-parser";
import express from "express";
import logger from "morgan";
import morganBody from "morgan-body";
import { Routes } from "./routes/routes";
import mongoose from "mongoose";
import dotenv from "dotenv";

export class App {

    public express: express.Application;

    constructor(private appRoutes: Routes) {
        this.express = express();
        this.middleware();
        this.routes();
        this.setEnvironmentVariables();
        this.setDb();
    }

    private middleware(): void {

        this.express.use(logger("combined"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));

        if ((process.env.NODE_VERBOSE || 'true').toUpperCase() !== 'true') {
            morganBody(this.express);
        }
    }

    private setEnvironmentVariables(): void {
        dotenv.config();
    }

    private setDb(): void {
        let uri = process.env.MONGODB_URI;

        console.log(process.env.MONGODB_URI);
        mongoose.connect(uri);
    }

    private routes(): void {

        const router = express.Router();

        router.get("/", (req, res, next) => {
            res.json({
                message: "server is up",
            });
        });

        router.get("/prod", (req, res, next) => {
            res.json({
                message: process.env.NODE_ENV === 'production',
            });
        });

        this.appRoutes.setRoutes(router);

        this.express.use("/api", router);
    }
}
