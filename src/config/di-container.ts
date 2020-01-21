import { Container } from "inversify";
import { CustomerRepository } from "../database/customer-repository";
import { ICustomerRepository } from "../repository/i-customer-repository";
import { CustomerRepositoryMock } from "../repository/mock/customerRepositoryMock";
import { CustomerRoutes } from "../routes/customerRoutes";
import { Routes } from "../routes/routes";

export class DiContainer {

    public diContainer: Container;

    constructor() {
        this.configure();
    }

    public configure() {
        this.diContainer = new Container();

        if (process.env.MOCK === "true") {
            this.configureMockRepositories();
        } else {
            this.configureRepositories();
        }

        this.diContainer.bind<Routes>(Routes).toSelf().inSingletonScope();
        this.diContainer.bind<CustomerRoutes>(CustomerRoutes).toSelf().inSingletonScope();
    }

    public configureRepositories() {
        this.diContainer.bind<ICustomerRepository>("ICustomerRepository").to(CustomerRepository).inSingletonScope();
    }

    public configureMockRepositories() {
        this.diContainer.bind<ICustomerRepository>("ICustomerRepository").to(CustomerRepositoryMock).inSingletonScope();
    }
}
