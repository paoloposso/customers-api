import { Container } from "inversify";
import { CustomerRoutes } from "../routes/customerRoutes";
import { Routes } from "../routes/routes";
import { ICustomerRepository } from "../repository/i-customer-repository";
import { CustomerRepositoryMock } from "../repository/mock/customerRepositoryMock";
import { CustomerRepository } from "../repository/concrete/customer-repository";

export class DiContainer {

    public diContainer: Container;

    constructor() {
        this.configure();
    }

    configure() {
        this.diContainer = new Container();

        this.diContainer.bind<Routes>(Routes).toSelf().inSingletonScope();
        this.diContainer.bind<CustomerRoutes>(CustomerRoutes).toSelf().inSingletonScope();

        this.diContainer.bind<ICustomerRepository>('ICustomerRepository').to(CustomerRepository).inSingletonScope().whenTargetIsDefault();

        this.configureMocks();
    }

    configureMocks() {
        this.diContainer.bind<ICustomerRepository>('ICustomerRepository').to(CustomerRepositoryMock).inSingletonScope().whenTargetNamed('ICustomerRepositoryMock');
    }
}