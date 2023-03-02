import { Router } from "express";
import {
  getAllNftsController,
  getNftsByIdController,
  createNftsController,
  updateNftsController,
  deleteNftsController,
} from "../Controllers/nft.controller";
const router = Router();

const MODEL = 'nft'

router.get(`/${MODEL}`, getAllNftsController);

router.get(`/${MODEL}/:id`, getNftsByIdController);

router.post(`/${MODEL}`, createNftsController);

router.put(`/${MODEL}/:id`, updateNftsController);

router.delete(`/${MODEL}/:id`, deleteNftsController);

export default router;
