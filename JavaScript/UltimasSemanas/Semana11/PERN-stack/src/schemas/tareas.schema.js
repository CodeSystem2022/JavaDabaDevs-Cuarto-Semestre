import {z} from 'zod'; //importamos el módulo zod para la validación de esquemas

export const createTareasSchema = z.object({
    titulo: z.string({
        required_error: "El titulo es requerido", //SE MUESTRA SI NO ESCRIBE NADA
        invalid_type_error: "El titulo debe ser un string" //NECESITA UN STRING
    }).min(1,{
        message: "El titulo debe tener al menos 1 caracter"
    }).max(255,{
        message: "El titulo debe tener como máximo 255 carácteres"
    }),
    descripcion: z.string({
        required_error: "La descripción es requerida",
        invalid_type_error: "La descripción debe ser un string"
    }).min(0,{
        message: "La descripción debe tener al menos 1 caracter"
    }).max(255,{
        message: "La descripción debe tener como máximo 255 carácteres"
    }).optional(), //LA DESCRIPCIÓN ES OPCIONAL
});

//createTareasSchema.parse({ titulo: 'titulo', descripcion: 'descripcion' });

export const updateTareasSchema = z.object({
    titulo: z.string({
        required_error: "El titulo es requerido",
        invalid_type_error: "El titulo debe ser un string"
    }).min(1,{
        message: "El titulo debe tener al menos 1 caracter"
    }).max(255,{
        message: "El titulo debe tener como máximo 255 carácteres"
    }).optional(), //es opcional si quiere cambiar el título
    descripcion: z.string({
        required_error: "La descripción es requerido",
        invalid_type_error: "La descripción debe ser un string"
    }).min(0,{
        message: "La descripción debe tener al menos 1 caracter"
    }).max(255,{
        message: "La descripción debe tener como máximo 255 carácteres"
    }).optional(), 
});
//ARCHIVO VERIFICADO A VIDEO 5 - CORRECTO