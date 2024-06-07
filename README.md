
# Desafío - Mi Banco.

Insercion y consulta de datos por consola a una base de datos PostgreSQL. 

![](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)

## Estructuta de Carpetas
```
└── 📁Desafio Guiado-Node
    └── .env
    └── .gitignore
    └── DB_CONFIG.js
    └── 📁functions
        └── consultar.js
        └── nuevatransaccion.js
        └── saldo.js
    └── package-lock.json
    └── package.json
    └── README.md
    └── server.js
```

## Dependencias
```
  "dependencies": {
    "pg": "^8.12.0"
  }

```

## instalacion
```
 https://github.com/VictorTapiaEgana/alwaysmusic.git
 npm install
 npm start
```

## Script DASE DE DATOS:
```
CREATE DATABASE banco
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
```

## Script de la TABLA:
```
CREATE TABLE IF NOT EXISTS public.cuentas
(
    id integer,
    saldo numeric,
    CONSTRAINT cuentas_saldo_check CHECK (saldo >= 0::numeric)
)
```

## Definir un arcvhivo .ENV con las siguientes constantes:
```
DB_USER='postgres'
DB_PASS= contraseña
DB_NAME='banco'
DB_PORT=5432
DB_HOST='localhost'
SERVER_PORT=3010
```

## Uso

```
  npm start {ACCION, PARAMETROS[.....]}
```
  EJEMPLO:
```
     npm start transferir 'Pago del agua' 06-07-2024 1000 1 2
```

  Esto, ingresas una transferencia desde la Cuenta 1 , a la cuenta 2, por un monto de 1000 con fecha  06-07-2024 y descripcion de "Pago del agua".
  
  Otras acciones:

  ```
  npm start consultar
  ```
Muestra por consola las ultimas 10 transferencias Realizadas.
 ```
  npm start saldo (1 ó 2)
 ```
Recibe como parametro un numero entero que indica el numero de la cuenta ( 1 ó 2 ), y devuelve su saldo.
 