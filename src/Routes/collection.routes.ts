const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');
import { 
    getCollections, 
    getCollectionById, 
    createCollection, 
    updateCollection, 
    deleteCollection
} from '../Controllers/collection.controller'
const MODEL = 'collection'
// Obtener todas las colecciones
router.get(`${MODEL}`, getCollections);

// Obtener una colección por su id
router.get(`${MODEL}/:id`, getCollectionById);

// Crear una nueva colección
router.post(`${MODEL}`, createCollection);

// Actualizar una colección existente
router.put(`${MODEL}/:id`, updateCollection);

// Eliminar una colección existente
router.delete(`${MODEL}/:id`, deleteCollection);

module.exports = router;