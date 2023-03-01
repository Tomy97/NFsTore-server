import { Nft } from '../Models/nft';
import { Response } from 'express'

// Obtener todos los NFTs
const getAllNfts = async (req: any, res: Response) => {
  try {
    const nfts = await Nft.findAll();
    res.status(200).json(nfts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Obtener un NFT por su ID
const getNftById = async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const nft = await Nft.findByPk(id);
    if (nft) {
      res.status(200).json(nft);
    } else {
      res.status(404).json({ message: 'NFT not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Crear un nuevo NFT
const createNft = async (req: any, res: Response) => {
  const { title, description, image } = req.body;
  try {
    const newNft = await Nft.create({ title, description, image });
    res.status(201).json(newNft);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Actualizar un NFT existente
const updateNft = async (req: any, res: Response) => {
  const { id } = req.params;
  const { title, description, image } = req.body;
  try {
    const [rowsUpdated, [updatedNft]] = await Nft.update(
      { title, description, image },
      { returning: true, where: { id } }
    );
    if (rowsUpdated === 1) {
      res.status(200).json(updatedNft);
    } else {
      res.status(404).json({ message: 'NFT not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// Eliminar un Nft existente
exports.deleteNft = async (req: any, res: Response) => {
    const id = req.params.id;
    try {
      const nft = await Nft.findByPk(id);
      if (nft) {
        await nft.destroy();
        res.json({ message: 'Nft eliminado correctamente' });
      } else {
        res.status(404).json({ message: `Nft con id=${id} no encontrado` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error al eliminar el Nft con id=${id}` });
    }
  };