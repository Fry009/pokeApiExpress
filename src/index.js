// src/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pokemonRoutes from './routes/pokemon.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/pokemon', pokemonRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
