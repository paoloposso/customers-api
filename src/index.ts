import "reflect-metadata";
import { App } from "./app";
import { Routes } from "./controllers/routes";
import DIContainer from "./di/di-container";

const port = process.env.PORT || 3000;

const app = new App(DIContainer.resolve<Routes>(Routes)).express;

app.set("port", port);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at port ${port}`);
});
