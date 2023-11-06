import {pool} from "../db.js";

export const listarTareas = async (req, res,next) =>{
    console.log(req.usuarioId);
    try {
        const resultado = await pool.query('SELECT * FROM tareas where usuario_id = $1', [req.usuarioId]);
        return res.json(resultado.rows);
    } catch (error) {
        next(error);
    }
}

export const listarTarea = async (req, res) => {
    const resultado = await pool.query('SELECT * FROM tareas WHERE id = $1', [req.params.id]);
    if(resultado.rowCount===0){
        return res.status(404).json({
            message: 'La tarea no existe'
        })
    };
    return res.json(resultado.rows[0]);
}


export const crearTarea = async(req,res)=>{
    const {titulo,descripcion} = req.body;
    try {
        console.log(titulo, descripcion, req.usuarioId);
        const {rows} = await pool.query('INSERT INTO tareas ( titulo, descripcion, usuario_id ) VALUES ($1, $2, $3)', [
            titulo,
            descripcion,
            req.usuarioId]
        );
        console.log(rows);
        return res.send('Creando tarea');
    } catch (error) {
        if (error.code === '23505') {
            return res.send('Ya existe una tarea con ese titulo');
        }
        console.log(error);
    } return res.send("algo salio mal");
}

export const actualizarTarea = async (req, res) =>{
    const {titulo, descripcion} = req.body;
    const id = req.params.id;
    const result = await pool.query('UPDATE tareas SET titulo = $1, descripcion = $2 WHERE id = $3 RETURNING *', [titulo, descripcion, id]);

    if (result.rowCount ===0){
        return res.status(404).json({
            message: 'No existe tarea con ese id'
        })
    }
    return res.json(result.rows[0]);
}

export const eliminarTarea = async (req, res) =>{
    const resultado = await pool.query('DELETE FROM tareas WHERE id = $1', [req.params.id]);

    if (resultado.rowCount === 0){
        return res.status(404).json({
            message : 'No existe una tarea con ese id'
        })
    }
    return res.sendStatus(204);
}