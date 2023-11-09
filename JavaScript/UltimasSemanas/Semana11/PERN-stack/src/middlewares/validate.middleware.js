export const validateSchema = (schema) => async (req, res, next) => {
    try {
        await schema.parse(req.body)    
        next()
    } catch (error) {
        console.log(error)
        if(Array.isArray(error.errors)){
            return res.status(400).json(error.errors.map((error) => error.message)); //al recorrer los errores, solo mapea o muestra los mensajes
        }
       
    }
}

//HASTA VIDEO 5: VERIFICADO ESTE ARCHIVO