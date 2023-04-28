import { Router } from "express";
import asyncHandler from "express-async-handler";
import { getProductsHandler } from "../handlers";
import * as middleware from "../middleware";
const productRouter = Router();

productRouter.get("/", asyncHandler(getProductsHandler));

// ... other routes if i want to scale the app

export default productRouter;
