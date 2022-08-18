<!-- 1 a) -->

Esse comando ira excluir a coluna saraliro da tabela.

<!-- 1 b) -->

Altera a coluna de generos para sex.

<!-- 1 c)  -->

Altera a coluna genero para aceitar 255 caracteres

<!-- 1 d) -->

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

<!-- 2 a) -->

UPDATE Actor
SET name = "Fernanda Montenegro ", birth_date = "1929-10-19"
WHERE id = "003";

<!-- 2 b) -->

UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Paes",

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES",

<!-- 2 c) -->

UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "1980-02-18",
salary = 700000,
gender = "male"
WHERE id = "005";

<!-- 2 d) -->

Ele roda e não da erro, porém não atualiza nenhuma coluna, "nada foi afetado".

<!-- 3 a) -->

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

<!-- 3 b) -->

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

<!-- 4 a) -->

SELECT MAX(salary) FROM Actor;

<!-- 4 b) -->

SELECT MIN(salary) FROM Actor WHERE gender = "female";

<!-- 4 c) -->

SELECT COUNT(\*) FROM Actor WHERE gender = "female";

<!-- 4 d) -->

SELECT SUM(salary) FROM Actor;

<!-- 5 a) -->

A query mencionada retorno a contagem dos atores em grupos por generos

<!-- 5 b) -->

SELECT id, name FROM Actor ORDER BY name DESC;

<!-- 5 c) -->

SELECT \* FROM Actor ORDER BY salary;

<!-- 5 d) -->

SELECT \* FROM Actor ORDER BY salary DESC LIMIT 3;

<!-- 5 e) -->

SELECT AVG(salary), gender FROM Actor ORDER BY gender;

<!-- 6 a) -->

ALTER TABLE Films
ADD playing_limit_date DATE;

<!-- 6 b) -->

ALTER TABLE Films
CHANGE rating rating FLOAT;

<!-- 6 c) -->

UPDATE Films
SET
playing_limit_date = "2022-10-14"
WHERE id = "003";

UPDATE Films
SET
playing_limit_date = "2018-05-24"
WHERE id = "002";

<!-- 6 d) -->

0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0
A query rodou, porem nenhuma linha foi afetada
