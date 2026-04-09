const express = require('express');

const app = express();
const PORT = 3000;

/*
  Lista com os integrantes do grupo.
  Os nomes completos são utilizados para identificação na avaliação.
*/
const data = {
  integrantes: [
    { nome: 'Luan Martins Sastre' },
    { nome: 'Igor da Rosa Mafalda' },
    { nome: 'Hiuri Cardozo' }
  ]
};

/*
  Endpoint que retorna os integrantes em formato JSON.
*/
app.get('/integrantes', (req, res) => {
  res.json(data);
});

/*
  Inicialização do servidor.
*/
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});