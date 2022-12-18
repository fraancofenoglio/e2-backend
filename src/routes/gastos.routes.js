import {Router} from 'express';
import { getGastos, createGasto, updateGasto, deleteGasto, getGasto } from '../controllers/gastos.controller.js';

const router = Router();

router.get("/gastos", getGastos);

router.get("/gastos/:id", getGasto);

router.post("/gastos",  createGasto);

router.patch("/gastos/:id", updateGasto);

router.delete("/gastos/:id", deleteGasto);


export default router