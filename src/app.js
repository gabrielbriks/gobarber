import express from 'express';
import routes from './routes';

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

export default new App().server;