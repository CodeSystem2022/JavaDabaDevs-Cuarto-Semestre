import logging as log
# log = loggin -> también puede hacerse así

"""Este enlace a docs.python.org/3/howto/logging.html
servirá como la referencia fundamental para todos los
otros archivos que manejen registros (logging).
Estamos invocando una configuración básica aquí."""

log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt= '%I:%M:%S %p',#modificamos la hora
                handlers=[ #manejamos una lista
                    #al enviar información por consola
                    #también se envía a este archivo .log
                    log.FileHandler('capa_datos.log'),
                    log.StreamHandler() #la consola recibe la info
                ]
                ) #se van a ejecutar todos los mensajes a continuación


if __name__ == '__main__': #solo se ejecuta dentro de este archivo
    log.debug('Mensaje a nivel Debug')
    log.info('Mensaje a nivel Info')
    log.warning('Mensaje a nivel Warning')
    log.error('Mensaje a nivel Error')
    log.critical('Mensaje a nivel Critical')
