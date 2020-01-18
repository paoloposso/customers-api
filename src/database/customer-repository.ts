import { injectable } from "inversify";
import { Customer } from "../model/customer";
import { ICustomerRepository } from "../repository/i-customer-repository";
import CustomerSchema, { ICustomerDocument } from "./schemas/customer-schema";

@injectable()
export class CustomerRepository implements ICustomerRepository {
    insert(customer: Customer): Promise<Customer> {
        let customerSchema = new CustomerSchema(customer);
        return customerSchema.save();
    }
    update(customer: Customer): Promise<Customer> {
        return CustomerSchema.findByIdAndUpdate({_id: customer.id}, customer).exec();
    }
    delete(id: any): Promise<Customer> {
        return CustomerSchema.findOneAndDelete({_id: id}).exec();
    }
    get(): Promise<Array<Customer>> {
        return CustomerSchema.find().exec();
    }
    getById(id: any): Promise<Customer> {
        return CustomerSchema.findById(id).exec();
    }
}
