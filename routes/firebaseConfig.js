const express = require('express');
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { v4, as, uuidv4 } = require('uuid');

const app = express();
const port = 3000;


const firebaseConfig = {
  apiKey: "AIzaSyDcUEW2R77z69JVig953jzlJ7LBgABueh4",
  authDomain: "restaurante-generico-62ef3.firebaseapp.com",
  projectId: "restaurante-generico-62ef3",
  storageBucket: "restaurante-generico-62ef3.firebasestorage.app",
  messagingSenderId: "1006261801240",
  appId: "1:1006261801240:web:73998a8c77dce48a194e6d",
  measurementId: "G-W7FCET93KS"
};

const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);

// Rota para criar um novo documento
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = uuidv4(); // Gere um ID único
    const docRef = db.collection('users').doc(userId);
    await docRef.set({ name, email, userId }); // Adicione o ID ao documento
    res.status(201).send('Usuário criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).send('Erro ao criar usuário.');
  }
});

// Rota para ler um documento
app.get('/users/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const docRef = db.collection('users').doc(userId);
    const doc = await docRef.get();
    if (doc.exists()) {
      res.json(doc.data());
    } else {
      res.status(404).send('Usuário não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).send('Erro ao buscar usuário.');
  }
});

// Rota para atualizar um documento
app.put('/users/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { name, email } = req.body;
    const docRef = db.collection('users').doc(userId);
    await docRef.update({ name, email });
    res.send('Usuário atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).send('Erro ao atualizar usuário.');
  }
});

// Rota para excluir um documento
app.delete('/users/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const docRef = db.collection('users').doc(userId);
    await docRef.delete();
    res.send('Usuário excluído com sucesso!');
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).send('Erro ao excluir usuário.');
  }
});

// Verificar se um documento existe na coleção "Pratos"
db.collection("Pratos").doc("1").get().then(function(doc){
  if (doc.exists){
    console.log("Existe")
  }else{
    console.log("Não Existe")
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
