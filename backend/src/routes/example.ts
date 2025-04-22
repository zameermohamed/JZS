import { Request, Response, Router } from "express";
import {
  getExampleByIdController,
  postExample,
} from "../controllers/example.js";

const exampleRouter: Router = Router();

exampleRouter.get("/:id", getExampleByIdController);
exampleRouter.post("/", postExample);

export default exampleRouter;
