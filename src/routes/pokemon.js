// src/routes/pokemon.js
import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/:name', async (req, res) => {
  const { name } = req.params;

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ error: 'Pokémon no encontrado' });
  }
});

export default router;
