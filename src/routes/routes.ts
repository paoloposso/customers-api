import { Router } from "express";
import { inject, injectable } from "inversify";
import { CustomerRoutes } from "./customerRoutes";

@injectable()
export class Routes {

    constructor(private customerRoutes: CustomerRoutes) {}

    public setRoutes(router: Router) {
        this.customerRoutes.get(router);
    }
}
