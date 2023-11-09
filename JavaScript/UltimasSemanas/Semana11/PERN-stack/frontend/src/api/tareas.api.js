import axios from "./axios";


export const crearTareaRequest = (tarea) => axios.post("/tareas", tarea)

export const listarTareasRequest = () => axios.get("/tareas")

export const eliminarTareaRequest = (id) => axios.delete(`/tareas/${id}`)
