import { Nfts } from "../Models/nft";
import { Response } from "express";
import { Users } from '../Models/users'
export const getAllNftsController = async (req: any, res: Response) => {
  try {
    const nft = await Nfts.findAll({
      attributes: req.attributes,
      // include: [
      //   { model: Users, as: 'create', attributes: ['id', 'email'] },
      //   { model: Users, as: 'owner', attributes: ['id',  'email'] }
      // ],
    });
    res.status(200).json(nft);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getNftsByIdController = async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const nft = await Nfts.findByPk(id);
    if (nft) {
      res.status(200).json(nft);
    } else {
      res.status(404).json({ message: "Nftss not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createNftsController = async (req: any, res: Response) => {
  const { title, description, image } = req.body;
  try {
    const newNftss = await Nfts.create({ title, description, image });
    res.status(201).json(newNftss);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateNftsController = async (req: any, res: Response) => {
  const { id } = req.params;
  const { title, description, image } = req.body;
  try {
    const [rowsUpdated, [updatedNftsss]] = await Nfts.update(
      { title, description, image },
      { returning: true, where: { id } }
    );
    if (rowsUpdated === 1) {
      res.status(200).json(updatedNftsss);
    } else {
      res.status(404).json({ message: "Nftsss not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const  deleteNftsController = async (req: any, res: Response) => {
  const id = req.params.id;
  try {
    const nftId = await Nfts.findByPk(id);
    if (Nfts) {
      await nftId?.destroy();
      res.json({ mesage: "Nfts eliminado correctamente" });
    } else {
      res.status(404).json({ mesage: `Nfts con id=${id} no encontrado` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mesage: `Error al eliminar el Nfts con id=${id}` });
  }
};
