import { Router } from "express";
import { makePing } from "../controllers/index.controller.js";

const router = Router();

router.get("/ping", makePing);

export default router;
