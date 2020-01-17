import * as bodyParser from "body-parser";
import express from "express";
import logger from "morgan";
import * as path from "path";
import { CustomerController } from './controllers/customerController';
import { inject } from 'inversify';
import { Routes } from "./controllers/routes";

// Criando as configurações para o ExpressJS
export class App {
// Instancia dele
    public express: express.Application;

    constructor(private appRoutes: Routes) {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configuração para o nosso middler
    private middleware(): void {
        // this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        
        const router = express.Router();

        router.get("/", (req, res, next) => {
            res.json({
                message: "server is up",
            });
        });

        // const a = new CustomerController();
        // a.get(router);

        this.appRoutes.setRoutes(router);

        this.express.use("/api", router);
    }
}

// export default new App().express;
