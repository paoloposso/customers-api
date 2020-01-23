import { Router } from "express";
import { inject, injectable, named } from "inversify";
import * as _ from "lodash";
import { Customer } from "../model/customer";
import { ICustomerRepository } from "../repository/i-customer-repository";
import mongoose from "mongoose";

@injectable()
export class CustomerRoutes {

    public route = "customers";

    constructor(@inject("ICustomerRepository")
        private customerRepository: ICustomerRepository) {}

    public setRoutes(router: Router) {
        router.get(`/${this.route}`, async (req, res, next) => {
            try {
                const customers = await this.customerRepository.get();
                res.send(customers);
            } catch (err) {
                res.status(503).send();
            }
        });

        router.get(`/${this.route}/:id`, async (req, res, next) => {
            try {
                const customer = await this.customerRepository.getById(req.params.id);
                res.send(customer);
            } catch (err) {
                res.status(500).send();
            }
        });

        router.put(`/${this.route}`, async (req, res, next) => {
            try {

                const body = _.pick(req.body, ["name", "email", "document", "id"]);

                if (!body.id) {
                    throw new Error("Id is required");
                }
                const customer = await this.customerRepository.update(new Customer(body.name, body.email, body.document, body.id));
                res.send(customer);
            } catch (error) {
                res.status(500).send(error.message);
            }
        });

        router.post(`/${this.route}`, async (req, res, next) => {
            try {

                const body = _.pick(req.body, ["_id", "name", "email", "document"]);

                const customer = await this.customerRepository.insert(
                    new Customer(body.name, body.email, body.document, mongoose.Types.ObjectId(body._id)));
                res.send(customer);
            } catch (error) {
                res.status(500).send(error.message);
            }
        });

        router.delete(`/${this.route}/:id`, async (req, res, next) => {
            try {

                if (!req.params.id) {
                    throw new Error("id is required");
                }

                const customer = await this.customerRepository.delete(req.params.id);
                res.send(customer);
            } catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
}
