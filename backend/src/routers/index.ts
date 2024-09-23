import { Router } from "express";
import * as pingController from "../controllers/ping";

export const routes = Router();

routes.get("/ping", pingController.ping);
