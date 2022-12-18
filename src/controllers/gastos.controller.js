import { pool } from '../db.js'

export const getGastos = async (req, res) => {

    try {
        const [rows] = await pool.query("SELECT * FROM gastos");
        res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: "Algo salió mal"
        })
    }

}

export const getGasto = async (req, res) => {

    try {
        const [rows] = await pool.query("SELECT * FROM gastos WHERE id = ?", [ req.params.id])
    
        if(rows.length <= 0) return res.status(404).json(
            {message: "Gasto no encontrado"}
        )
    
        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
            message: "Algo salió mal"
        })
    }

}

export const createGasto = async (req, res) => {

    try {
        const { descripcion, gasto } = req.body;
    
        const [ rows ] = await pool.query("INSERT INTO gastos (descripcion, gasto) VALUES (?, ?)", [descripcion, gasto]);
    
        res.send({ 
            id: rows.insertId,
            descripcion,
            gasto
         });
        
    } catch (error) {
        return res.status(500).json({
            message: "Algo salió mal"
        })
    }

}

export const deleteGasto = async (req, res) => {

    try {
        const [result] = await pool.query("DELETE FROM gastos WHERE id = ?", [req.params.id])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            message: "Gasto no encontrado"
        })
    
        res.sendStatus(204)
        
    } catch (error) {
        return res.status(500).json({
            message: "Algo salió mal"
        })
    }

}

export const updateGasto = async (req, res) => {

    const {id} = req.params;
    const {descripcion, gasto} = req.body;

    try {
    
        const [result] = await pool.query("UPDATE gastos SET descripcion = IFNULL(?, descripcion), gasto = IFNULL(?, gasto) WHERE id = ?", [descripcion, gasto, id]);
    
        if(result.affectedRows === 0) return res.status(404).json({
            message: "Gasto no encontrado"
        });
    
        const [rows] = await pool.query("SELECT * FROM gastos WHERE id = ?", [id])
    
        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
            message: "Algo salió mal"
        })
    }

}

