import { Router } from "express";
import {
  createNfts,
  deleteNfts,
  getAllNfts,
  getNftsById,
  updateNfts,
} from "../Controllers/nft.controller";
const router = Router();

const MODEL = 'nft'

router.get(`/${MODEL}`, getAllNfts);

router.get(`/${MODEL}/:id`, getNftsById);

router.post(`/${MODEL}`, createNfts);

router.put(`/${MODEL}/:id`, updateNfts);

router.delete(`/${MODEL}/:id`, deleteNfts);

export default router;
