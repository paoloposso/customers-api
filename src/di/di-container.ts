import { Container } from 'inversify';
import { ICustomerRepository } from '../repository/iCustomerRepository';
import { CustomerRepositoryMock } from '../repository/mock/customerRepositoryMock';
import { Routes } from '../controllers/routes';
import { CustomerController } from '../controllers/customerController';

const diContainer = new Container();

diContainer.bind<Routes>(Routes).toSelf().inSingletonScope();
diContainer.bind<CustomerController>(CustomerController).toSelf().inSingletonScope();
diContainer.bind<ICustomerRepository>('ICustomerRepository').to(CustomerRepositoryMock).inSingletonScope();

export default diContainer;
