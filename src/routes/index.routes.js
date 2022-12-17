import {Router} from "express";
import { ping } from "../controllers/index.controller.js";
import { pool } from "../db.js";


const router = Router();

router.get("/ping", ping)

export default router