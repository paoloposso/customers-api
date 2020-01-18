import { injectable } from "inversify";
import { Customer } from "../../model/customer";
import { ICustomerRepository } from "../i-customer-repository";

@injectable()
export class CustomerRepositoryMock implements ICustomerRepository {
    insert(customer: Customer): Promise<Customer> {
        throw new Error("Method not implemented.");
    }
    update(customer: Customer): Promise<Customer> {
        throw new Error("Method not implemented.");
    }
    delete(id: any): Promise<Customer> {
        throw new Error("Method not implemented.");
    }
    
    public get(): Promise<Array<Customer>> {
        const customerList = new Array<Customer>();

        customerList.push(new Customer('',"Paolo", "pv@pv.com", "12345678910"));
        customerList.push(new Customer('',"Jose", "jose@pv.com", "12345678910"));

        return Promise.resolve(customerList);
    }

    public getById(id: any): Promise<Customer> {
        return Promise.resolve(new Customer('',"Paolo", "pv@pv.com", "12345678910"));
    }
}
