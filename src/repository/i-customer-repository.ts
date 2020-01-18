import { Customer } from "../model/customer";

export interface ICustomerRepository {
    get(): Promise<Array<Customer>>;
    getById(id: any): Promise<Customer>;
    insert(customer: Customer): Promise<Customer>;
    update(customer: Customer): Promise<Customer>;
    delete(id: any): Promise<Customer>;
}
