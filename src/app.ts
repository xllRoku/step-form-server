import fastify from 'fastify';
import { errorMiddleware } from './user/infrastrucutre/middlewares/error.middleware';
import userRoutes from './user/infrastrucutre/routes/user.routes';

const startServer = () => {
    const server = fastify();

    server.register(userRoutes, { prefix: '/users' });
    server.setErrorHandler(errorMiddleware);

    return server;
};

export default startServer;
