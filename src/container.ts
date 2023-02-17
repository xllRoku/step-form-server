import { Container } from 'inversify';
import { ContainerSymbols } from './symbols';
import { UserRegisterUseCase } from './user/application/use-cases/user-register.usecase';
import { IUserRepository } from './user/domain/repository/user.repository';
import { UserRegisterController } from './user/infrastrucutre/controllers/user-register.controller';
import { UserRepository } from './user/infrastrucutre/repositories/user.repository';

const container = new Container();

//#region Repositories

container
    .bind<IUserRepository>(ContainerSymbols.UserRepository)
    .to(UserRepository);

//#endregion

//#region Use cases

container
    .bind<UserRegisterUseCase>(ContainerSymbols.UserRegisterUseCase)
    .to(UserRegisterUseCase);

//#endregion

//#region Controllers

container
    .bind<UserRegisterController>(ContainerSymbols.UserRegisterController)
    .to(UserRegisterController);

//#endregion

export default container;
