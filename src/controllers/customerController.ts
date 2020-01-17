import { Router } from "express";
import { Customer } from "../model/customer";
import { injectable, inject } from "inversify";
import { ICustomerRepository } from '../repository/iCustomerRepository';

@injectable()
export class CustomerController {
    
    constructor(@inject('ICustomerRepository') private customerRepository: ICustomerRepository) {}

    get(router: Router) {
        router.get("/customers", (req, res, next) => {
            res.send(this.customerRepository.get());
        });
    }
}
