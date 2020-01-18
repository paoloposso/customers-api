import { Router } from "express";
import { inject, injectable, named } from "inversify";
import { ICustomerRepository } from "../repository/i-customer-repository";

@injectable()
export class CustomerRoutes {

    constructor(@inject('ICustomerRepository')
        private customerRepository: ICustomerRepository) {}

    public get(router: Router) {
        router.get("/customers", (req, res, next) => {
            res.send(this.customerRepository.get());
        });
    }
}
