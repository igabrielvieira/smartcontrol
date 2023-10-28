const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

const port = 3001;

// app.use((request, response) =>
// { Criação de middleware (o express interpreta como se fosse uma rota, por isso o use)
//   // Middleware 1
//   request.appId = 'MeuAppID';
//   response.send('Interceptado pelo Middleware'); // Travando a requisição
// });

app.use(express.json()); // Body Parser

app.use(cors); // Middleware de CORS
app.use(routes); // Middleware 2
app.use(errorHandler); // Middleware de erros não tratados para não expor o código

app.listen(port, () => console.log(`🔥 Servidor iniciado em http://localhost:${port}`));

// Middleware (se passar) -> Middleware 2 -> Middleware 3 -> Rotas
