module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],//Adicionado o prettier
  plugins:['prettier'],//Adicionado para o prettier
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    //Definindo tudo que o prettier achar seja declarado como error
    "prettier/prettier":"error",
    //Fazendo com que não seja obrigado a utilização do this
    "class-methods-use-this": "off",
    //Permite que eu recebe um parametro e faça alterações nele
    "no-param-ressingn": "off",
    //Desabilitando a obrigatoriedade de todas as vars em cammelCase
    "camelcase": "off",
    //Desabilitando aviso de erro para variáveis inutilizadas
    "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],
  },
};
