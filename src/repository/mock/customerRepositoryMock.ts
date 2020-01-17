import { injectable } from "inversify";
import { Customer } from "../../model/customer";
import { ICustomerRepository } from "../iCustomerRepository";

@injectable()
export class CustomerRepositoryMock implements ICustomerRepository {
    public get(): Customer[] {
        const customerList = new Array<Customer>();

        customerList.push(new Customer("Paolo", "pv@pv.com", "12345678910"));
        customerList.push(new Customer("Jose", "jose@pv.com", "12345678910"));

        return customerList;
    }
}
