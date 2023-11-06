import Router from 'express-promise-router'

import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from '../controllers/tareas.controller.js'
import { isAtuh } from '../middlewares/auth.middleware.js'
import { validateSchema } from '../middlewares/validate.middleware.js'
import { createTareasSchema, updateTareasSchema } from '../schemas/tareas.schema.js'

const router = Router()

router.get('/tareas', isAtuh, listarTareas)

router.get('/tareas/:id', isAtuh, listarTarea)

router.post('/tareas', isAtuh, validateSchema(createTareasSchema), crearTarea)

router.put('/tareas/:id', isAtuh, validateSchema(updateTareasSchema), actualizarTarea)

router.delete('/tareas/:id', isAtuh, eliminarTarea)

export default router
