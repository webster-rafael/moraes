const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');

const url = 'mongodb+srv://webb:stacy2024@moraes.mgm1rdp.mongodb.net/';
const dbName = 'moraes';

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); // Habilita o CORS

app.get('/', async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('moraes-item');
    const data = await collection.find({}).toArray();

    res.json(data);

    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao baixar o arquivo JSON.');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
