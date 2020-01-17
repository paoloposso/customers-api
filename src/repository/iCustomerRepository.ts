import { Customer } from '../model/customer';

export interface ICustomerRepository {
    get(): Array<Customer>;
}