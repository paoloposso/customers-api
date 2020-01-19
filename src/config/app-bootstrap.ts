import * as bodyParser from "body-parser";
import express from "express";
import mongoose, { mongo } from "mongoose";
import logger from "morgan";
import morganBody from "morgan-body";
import { Routes } from "../routes/routes";

export class AppBootstrap {

    public express = express();

    constructor(private appRoutes: Routes) {
        this.express = express();
        this.middleware();
        this.setRoutes();
        this.setDb();
    }

    private middleware(): void {

        this.express.use(logger("combined"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));

        if ((process.env.NODE_VERBOSE || 'false') === 'true') {
            morganBody(this.express);
        }
    }

    private setDb() {
        const uri = process.env.NODE_ENV == 'test' ? process.env.MONGODB_URI_TEST : process.env.MONGODB_URI;

        console.log(process.env.NODE_ENV);
        mongoose.connect(uri, {useNewUrlParser: true});
    }

    private setRoutes(): void {

        const router = express.Router();

        router.get("/", (req, res, next) => {
            res.json({
                message: "server is up",
            });
        });

        this.appRoutes.setRoutes(router);

        this.express.use("/api", router);
    }
}
