import dotenv from 'dotenv';
dotenv.config();

import { app } from "./app";
const PORT = process.env.PORT;

//create server
app.listen(PORT, () => {
  console.log(`Server is connected with port ${PORT}`);
});
