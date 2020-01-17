import * as bodyParser from "body-parser";
import express from "express";
import logger from "morgan";
import morganBody from "morgan-body";
import { Routes } from "./controllers/routes";

export class App {

    public express: express.Application;

    constructor(private appRoutes: Routes) {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {

        this.express.use(logger("combined"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));

        if ((process.env.NODE_VERBOSE || 'true').toUpperCase() !== 'true') {
            morganBody(this.express);
        }
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
                message: process.env.NODE_VERBOSE === 'production',
            });
        });

        this.appRoutes.setRoutes(router);

        this.express.use("/api", router);
    }
}
