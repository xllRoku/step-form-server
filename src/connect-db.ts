import { connect, set } from 'mongoose';

const connectDb = async () => {
    set('strictQuery', true);
    connect(process.env.MONGODB_URI as string);
};

export default connectDb;
