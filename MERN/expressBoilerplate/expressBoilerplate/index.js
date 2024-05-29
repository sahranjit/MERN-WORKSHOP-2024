import express, { json } from "express";
import { firstRouter } from "./src/route/firstRouter.js";
import connectToMongoDb from "./src/connectdb/connectToMongoDb.js";
import { productRouter } from "./src/route/productRouter.js";
import { bikeRouter } from "./src/route/bikeRouter.js";
import { userRouter } from "./src/route/userRouter.js";

import cors from "cors";

let expressApp = express();
expressApp.use(cors());

connectToMongoDb();
expressApp.use(json()); //it is done to make our application to accept json data
expressApp.use("/a", firstRouter);
expressApp.use("/products", productRouter);
expressApp.use("/bikes",bikeRouter);
expressApp.use("/users", userRouter);


expressApp.listen(8000, () => {
  console.log("app is listening at port 8000");
});
