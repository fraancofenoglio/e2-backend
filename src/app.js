import express from "express";
import employeesRoutes from "./routes/gastos.routes.js";

const app = express();

app.use(express.json())

app.use(employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message1: "https://e2-backend-production.up.railway.app/gastos para ver todos los gastos",
        message2: "https://e2-backend-production.up.railway.app/gastos/(*id de gasto*) para ver un gasto en especifico"
    })
})

export default app;