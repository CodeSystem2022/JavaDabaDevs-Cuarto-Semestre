import {z} from 'zod';

export const signupSchema = z.object({
    name: z.string({
        required_error: "El nombre es requerido",
        invalid_type_error: "El nombre debe ser un string"
    }).min(1,{
        message: "El nombre debe tener al menos 1 caracter"
    }).max(255,{
        message: "El nombre debe tener como máximo 255 caráteres"
    }),
    email: z.string({
        required_error: "El email es requerido",
        invalid_type_error: "El email debe ser un string"
    }).email({ //MÓDULO PARA VALIDAR EMAIL DE ZOD
        message: "El email debe ser un email válido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
        invalid_type_error: "La contraseña debe ser un string"
    }).min(6,{
        message: "La contraseña debe tener al menos 6 caracteres"
    }).max(255,{
        message: "La contraseña debe tener como máximo 255 caracteres"
    }),
});

export const signinSchema = z.object({
    email: z.string({
        required_error: "El email es requerido",
        invalid_type_error: "El email debe ser un string"
    }).email({
        message: "El email debe ser un email válido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
        invalid_type_error: "La contraseña debe ser un string"
    }).min(6,{
        message: "La contraseña debe tener al menos 6 caracteres"
    }).max(255,{
        message: "La contraseña debe tener como máximo 255 caracteres"
    }),
});

//archivo verificado al video 5 - correcto