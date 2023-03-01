import { Router } from "express";
import {
  getNfts,
  getNftById,
  createNft,
  updateNft,
  deleteNft,
} from "../Controllers/nft.controller";
const router = Router();
const MODEL = 'nft'
// Obtener todos los Nfts
router.get(`/${MODEL}`, getNfts);

// Obtener un Nft por su id
router.get(`/${MODEL}/:id`, getNftById);

// Crear un nuevo Nft
router.post(`/${MODEL}`, createNft);

// Actualizar un Nft existente
router.put(`/${MODEL}/:id`, updateNft);

// Eliminar un Nft existente
router.delete(`/${MODEL}/:id`, deleteNft);
export default router;
