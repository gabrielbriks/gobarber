const express = require("express");

class App {
  /* Metodo que é chamado automaticamente ao instancia essa class*/
  constructor() {
    this.server = express();
  }
}
