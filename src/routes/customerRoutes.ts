import { Router } from "express";
import { inject, injectable, named } from "inversify";
import { ICustomerRepository } from "../repository/i-customer-repository";
import { Customer } from "../model/customer";
import * as _ from 'lodash';

@injectable()
export class CustomerRoutes {

    route = 'customers';

    constructor(@inject("ICustomerRepository")
        private customerRepository: ICustomerRepository) {}

    public setRoutes(router: Router) {
        router.get(`/${this.route}`, async (req, res, next) => {
            try {
                let customers = await this.customerRepository.get();
                res.send(customers);
            } catch (err) {
                res.status(503).send();
            }
        });

        router.get(`/${this.route}/:id`, async (req, res, next) => {
            try {
                let customer = await this.customerRepository.getById(req.params.id);
                res.send(customer);
            } catch (err) {
                res.status(500).send();
            }
        });

        router.put(`/${this.route}`, async (req, res, next) => {
            try {

                var body = _.pick(req.body, ['name', 'email', 'document', 'id']);

                if (!body.id) {
                    throw new Error('Id is required');
                }
                let customer = await this.customerRepository.update(new Customer(body.name, body.email, body.document, body.id));
                res.send(customer);
            } catch (error) {
                res.status(500).send(error.message);
            }
        });

        router.post(`/${this.route}`, async (req, res, next) => {
            try {

                var body = _.pick(req.body, ['name', 'email', 'document']);

                let customer = await this.customerRepository.insert(new Customer(body.name, body.email, body.document));
                res.send(customer);
            } catch (error) {
                res.status(500).send(error.message);
            }
        });

        router.delete(`/${this.route}`, async (req, res, next) => {
            try {

                if (!req.params.id) {
                    throw new Error('id is required');
                }

                let customer = await this.customerRepository.delete(req.params.id);
                res.send(customer);
            } catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
}
