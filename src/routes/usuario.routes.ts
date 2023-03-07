import express, { Express, Request, Response } from 'express';
const router = express.Router();
import * as usuarioController from '../controllers/usuario.controller';

// Devuelva todos los usuarios

router.get('/', usuarioController.findAll);

// Cree un nuevo usuario
router.post('/', usuarioController.create);

// Retrieve a single usuario with id
router.get('/:id', usuarioController.findById);

// Update a usuario with id
router.put('/:id', usuarioController.update);

// Delete a usuario with id
router.delete('/:id', usuarioController.remove);

export = router