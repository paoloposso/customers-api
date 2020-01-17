import { ICustomerRepository } from "../iCustomerRepository";
import { Customer } from '../../model/customer';
import { injectable } from "inversify";

@injectable()
export class CustomerRepositoryMock implements ICustomerRepository {
    get(): Array<Customer> {
        const customerList = new Array<Customer>();
        
        customerList.push(new Customer('Paolo', 'pv@pv.com', '12345678910'));
        customerList.push(new Customer('Jose', 'jose@pv.com', '12345678910'));

        return customerList;
    }
}
