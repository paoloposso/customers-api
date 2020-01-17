import { Router } from "express";
import { inject, injectable } from "inversify";
import { CustomerController } from "./customerController";

@injectable()
export class Routes {

    constructor(private customerController: CustomerController) {}

    public setRoutes(router: Router) {
        this.customerController.get(router);
    }
}
