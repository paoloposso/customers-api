import { injectable } from "inversify";
import { ICustomerRepository } from "../i-customer-repository";
import { Customer } from '../../model/customer';
import CustomerSchema, { ICustomerDocument } from './db/customer-schema';

@injectable()
export class CustomerRepository implements ICustomerRepository {

    public get(): Customer[] {

        let customerList = new Array<Customer>();

        CustomerSchema.find().then((list: Array<Customer>) => {
            // list.forEach((customer: ICustomerDocument) => {
            //     customerList.push(new Customer(customer.name, customer.email, customer.document));
            // });
            customerList = list;
        });

        return customerList;
    }
}