import dotenv from 'dotenv';
dotenv.config();

import { app } from "./app";
import connectDB from './utils/db';
const PORT = process.env.PORT;

//create server
app.listen(PORT, () => {
  console.log(`Server is connected with port ${PORT}`);
  connectDB();
});
