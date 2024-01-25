This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Con Prisma y Next es posible crear aplicaciones Full-stack sin necesidad de una Api, interactuando directamente con una base de datos 

## comandos de prisma
- npx init
- npx prisma migratedev     Cada vez que creamos un modelo se debe migrar la base de datos para que esta se sincronice con el schema, hay que colocar una descrición de la migración
- npx prisma migrate reset  resetea la base de datos, borra los datos pero no borra el schema
-npx prisma studio  abre una GUI de la base de datos



## crear datos masivos
1. instala el paquete de ts-node con el comando    npm i ts-node
2. configura el archivo package.json, debajo del objeto scrips crea un nuevo objeto, colocale el nombre de prisma, y dentro de los corchetes coloca el nombre del comando con que vas a llamar esa instrucción y seguido colocas los pasos a seguir por el comando. a continuación esta como debe quedar

 "prisma": {
    "seed": "ts-node prisma/seed.ts"
  },

3. crea una carpeta data dentro de la carpeta prisma
4. en esa nueva carpeta crea un archivo con el nombre en plural del schema a ingresarle datos con la extension ts.  ejemplo productos.ts
5. crea una constante de tipo array y dentro de ella coloca objetos con la información especificada en el schema, e ingresa los datos
6. crea dentro de la carpeta prisma un archivo seed.ts.
    - Importa el archivo que contiene los datos a cargar
    - Importa el PrismaClient de @prisma/client
    - crea una constante que reciba una instancia de PrismaClient. 
        const prisma = new PrismaClient() 
    - crea una funcion async y dentro del cuerpo de la funcion coloca un try catch, dentro del try coloca await prisma.<<nombre del modelo>>.createMany({ data: <<nombre de la data>>});
    - ejecuta la funcion <<nombre funcion>>();
    - cada vez que se ejecute el comando "npx prisma db seed" va a llamarse esta funcion y va a crear los datos de forma masiva
    - para las diferentes funcionalidades del CRUD puedes ver en la documentacion de prisma.

## PrismaClient siempre se debe importar cada vez que vayas a consultar la base de datos

## Node es un lenguaje hibrido en donde una parte se ejecuta en el servidor y la otra en el cliente. 

## Consultar la base de datos con 

