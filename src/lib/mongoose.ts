import mongoose from 'mongoose';

let isConnect = false; // check if mongoose is connected

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) return console.log('MONGODB_URL not found.');
  if (isConnect) console.log('Already connected to MongoDB.');

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnect = true;

    console.log('Connected to Database.');
  } catch (error) {
    console.log(error);
  }
};
