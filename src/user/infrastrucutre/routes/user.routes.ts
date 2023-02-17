import { FastifyInstance } from 'fastify';
import container from '../../../container';
import { ContainerSymbols } from '../../../symbols';
import { UserRegisterController } from '../controllers/user-register.controller';

const userRegisterController = container.get<UserRegisterController>(
    ContainerSymbols.UserRegisterController
);

const userRoutes = async (server: FastifyInstance) => {
    server.post(
        '/',
        userRegisterController.execute.bind(userRegisterController)
    );
};

export default userRoutes;
