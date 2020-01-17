import { Router } from "express";
import { CustomerController } from "./customerController";
import { injectable, inject } from 'inversify';

@injectable()
export class Routes {

    constructor(private customerController: CustomerController) {}

    setRoutes(router: Router) {
        this.customerController.get(router);
    }
}
