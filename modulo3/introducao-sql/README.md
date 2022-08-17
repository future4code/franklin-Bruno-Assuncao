CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

USE `franklin-bruno-assuncao`;

1 a) o varchar(255) é a quantidade de caracteres ideal para texto curto.
Primary key ou PK é a chave primaria para identificação.
o not null é que o dado não pode ser nulo ou em branco.
o data é pra irformar a data no formato ano/mes/dia.

1 b) O show database trás o nome das base de dados, e o show tables trás todas as tabelas.

1 c) trouxe toda estrutura da tabela, com as colunas dos dados, qual o tipo dos dados, se é dado pode ser nulo ou não e a chave primaria.

<!-- 2 a)  -->

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Piress",
1200000,
"1963-08-23",
"female"
);

-- 2 b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' ,Ocorreu o erro de a chave primaria estar duplicada, isso ocorre porque esse dado tem que ser unico.

INSERT INTO Actor (id, name, salary,birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

2 c) Error Code: 1136. Column count doesn't match value count at row 1, os valores passados são maiores que a quantidade de coluna, isso ocorre porque precisa informar todos os campos de todos os dados que quer inserir
INSERT INTO Actor (id, name, salary,birth_date, gender) VALUES("003", "Fernanda Montenegro",300000,"1929-10-19", "female");

2 d) Error Code: 1364. Field 'name' doesn't have a default value, erro pois o nome não foi preenchido, ele é um dado que não pode ser nulo e não foi passado
INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES("004","Antonio Fagundes",400000,"1949-04-18", "male");

2 e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1, isso ocorre pois a data não foi passada dentro de aspas
-- INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES("005", "Juliana Paes",719333.33,"1979-03-26", "female");

2 f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Rodrigo Santoro",
1600000,
"1975-08-22",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"Bruná Marquezine",
500000,
"1995-08-04",
"female"
);

<!-- 3 a) -->

SELECT \* FROM Actor WHERE gender = "female";

<!-- 3 b) -->

SELECT salary FROM Actor WHERE name = "Tony Ramos";

3 c) não trouxe nenhum resultado pois não existe nenhuma informação com esse dado
SELECT \* FROM Actor WHERE gender = "invalid";

<!-- 3 d) -->

SELECT id, name, salary FROM Actor WHERE salary <= 500000;

3 e) Error Code: 1054. Unknown column 'nome' in 'field list', a coluna nome não existe
SELECT id, name FROM Actor WHERE id = "002";

<!-- 4 -->

SELECT \* FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

4 a) A QUERY acima ela seleciona todas as informações da tabela com as condições de nome que começam ou com a letra A ou com a letra J, e também precisam ter o salário maior que 300000

<!-- 4 b)  -->

SELECT \* FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

<!-- 4 c)  -->

SELECT \* FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

<!-- 4 d)  -->

SELECT \* FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

<!-- 5 -->

CREATE TABLE Films (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL UNIQUE,
sinopse TEXT NOT NULL,
release_date DATE NOT NULL,
rating INT NOT NULL
);
5 a) A query consite em 5 colunas, as duas primeiras são id e nome que são dados unicos do tipo varchar, sinopse é um texto que precisa de mais caracteres, data do lançamento e por ultimo avaliação que é um numero inteiro.

<!-- 5 b) -->
INSERT INTO Films (id, name, sinopse, release_date, rating)
VALUES("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7 );

<!-- 5 c) -->
INSERT INTO Films (id, name, sinopse, release_date, rating)
VALUES("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);

<!-- 5 d) -->
INSERT INTO Films (id, name, sinopse, release_date, rating)
VALUES("003","Dona Flor e Seus Dois Maridos","Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.","2017-11-02-", 8);

<!-- 5 e) -->
INSERT INTO Films (id, name, sinopse, release_date, rating)
VALUES("004", "Cidade de Deus", "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.","2002-08-30", 10);

<!-- 6 a) -->
SELECT id, name, rating FROM Films WHERE id = "001";

<!-- 6 b)  -->
SELECT \* FROM Films WHERE name = "Cidade de Deus";

<!-- 6 c) -->
SELECT id, name, sinopse FROM Films WHERE rating > 7;

<!-- 7 a) -->
SELECT * FROM Films WHERE name LIKE "%vida%";