import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const express = require('express');
const { getFirestore } = require('firebase/firestore');

const router = express.Router();

// Certifique-se de que 'app' seja a instância do Firebase inicializada em 'app.js'
const db = getFirestore(app);

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const usersSnapshot = await db.collection('users').get();
    const users = usersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).send('Erro ao buscar usuários.');
  }
});

module.exports = router;
