import { injectable } from "inversify";
import { Customer } from "../model/customer";
import { ICustomerRepository } from "../repository/i-customer-repository";
import CustomerSchema from "./schemas/customer-schema";

@injectable()
export class CustomerRepository implements ICustomerRepository {
    public insert(customer: Customer): Promise<Customer> {
        const customerSchema = new CustomerSchema(customer);
        return customerSchema.save();
    }
    public update(customer: Customer): Promise<Customer> {
        return CustomerSchema.findByIdAndUpdate({_id: customer.id}, customer).exec();
    }
    public delete(id: any): Promise<Customer> {
        return CustomerSchema.findOneAndDelete({_id: id}).exec();
    }
    public get(): Promise<Customer[]> {
        return CustomerSchema.find().exec();
    }
    public getById(id: any): Promise<Customer> {
        return CustomerSchema.findById(id).exec();
    }
}
