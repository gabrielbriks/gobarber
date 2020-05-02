const express = require('express');
const routes = require('./routes');

class App {
  /* Metodo que é chamado automaticamente ao instancia essa class*/
  constructor() {
    this.server = express();

    //Adicionando esses métodos aqui pois se não eles nunca vão ser chamados
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json())
  }

  routes(){
    this.server.use(routes);
  }
}

module.exports = new App().server;