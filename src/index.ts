import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server started!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at port ${port}`);
});
