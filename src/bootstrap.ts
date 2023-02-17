import { config as dotenvConfig } from 'dotenv';
import startApp from './app';
import connectDb from './connect-db';

dotenvConfig();

export const bootstrap = async () => {
    const app = startApp();

    try {
        connectDb();

        console.log('Conexión con la BBDD realizada');
        console.log(
            'Listen to: ' +
                (await app.listen({ port: Number(process.env.PORT) || 3001 }))
        );
    } catch (err) {
        console.error(err);
    }
};
