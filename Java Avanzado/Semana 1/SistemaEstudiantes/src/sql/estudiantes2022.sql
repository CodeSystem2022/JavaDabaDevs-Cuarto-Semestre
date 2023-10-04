
-- Comenzamos con CRUD: create(insertar), read(leer), update(actualizar), delete(eliminar)
-- Listar los estudiantes (read)
SELECT * FROM Estudiantes.estudiantes2022;
-- Insertar estudiante
INSERT INTO estudiantes2022 (nombre, apellido, telefono, email) VALUES ("Juan", "Perez", "2422222323", "juan@email.com");
-- Update (modificar)
UPDATE estudiantes2022 SET idestudiantes2022 = 3 WHERE idestudiantes2022=4;
-- Delete (Eliminar)
DELETE FROM estudiantes2022 WHERE idestudiantes2022=5;
-- Para modificar idestudiantes2022 y comience en 1
ALTER TABLE estudiantes2022 AUTO_INCREMENT = 1;