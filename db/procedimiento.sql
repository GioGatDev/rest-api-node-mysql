CREATE DEFINER=`root`@`localhost` PROCEDURE `empreadosaddoredit`(
	IN _id INT,
    IN _name VARCHAR(45),
    IN _salario INT
)
BEGIN
	IF _id = 0 THEN
    INSERT INTO empleados (name, salario)
		VALUES (_name, _salario);
        
		SET _id = LAST_INSERT_ID();
	ELSE
		UPDATE empleados
        SET 
		name = _name,
        salario = _salario
        WHERE id = _id;
	END IF;
    SELECT _id AS id;
END