module.exports = {
  // configurando nossas credenciais
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    // Garante que eu tenha uma coluna de "create_at" e "update_at" dentro de cada tabela.
    timestamps: true,
    /*
      definindo para o meu sequelize que ele venha ter o padrão dos nomes das
      nossas tabelas como underscored, que não é o padrão camelCase:
      Basicamente falamos para ele que iremos utilizar ess formato >> users_groups
    */
    underscored: true,
    /* Realiza a mesma coisa mas apenas par o nome das colunas e para seus
      relacionamentos */
    underscoredAll: true,
  },
};
