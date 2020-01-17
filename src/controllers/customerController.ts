import { Router } from "express";
import { inject, injectable } from "inversify";
import { Customer } from "../model/customer";
import { ICustomerRepository } from "../repository/iCustomerRepository";

@injectable()
export class CustomerController {

    constructor(@inject("ICustomerRepository") private customerRepository: ICustomerRepository) {}

    public get(router: Router) {
        router.get("/customers", (req, res, next) => {
            res.send(this.customerRepository.get());
        });
    }
}
