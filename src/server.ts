import express from "express";
import cors from "cors";
import productRouter from "./routers";
import { loggerMiddleware, errHandler, notFound } from "./middleware";
import { accessEnv } from "./helpers";

const app = express();

app.use(cors());
app.use(express.json());

const port = accessEnv("PORT") || 3000;

app.use(loggerMiddleware);

app.get("/test", (_, res) => {
  res.status(200).send({ status: "✌️" });
});

app.use("/products", productRouter);

app.use(errHandler);
app.use(notFound);
app.listen(port, () => {
  console.log(`\n\t ✌️ \n\n server listening on port ${port} ...`);
});

export default app;
