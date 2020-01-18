import dotenv from "dotenv";
import "reflect-metadata";
import { App } from "./app";
import { DiContainer } from "./config/di-container";
import { Routes } from "./routes/routes";

const port = process.env.PORT || 3000;

dotenv.config();

const app = new App(new DiContainer().diContainer.resolve<Routes>(Routes)).express;

app.set("port", port);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at port ${port}`);
});
