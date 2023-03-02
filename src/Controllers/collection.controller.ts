
import { Collections } from '../Models/collection';
import { Response } from 'express';

export const getCollectionsController = async (req: any, res: Response) => {
  try {
    const collections = await Collections.findAll({
      attributes: req.attributes,
    });
    res.json(collections);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getCollectionByIdController = async (req: any, res: Response) => {
  try {
    const collection = await Collections.findByPk(req.params.id);
    if (!collection) {
      res.status(404).json({ error: 'Colección no encontrada' });
    } else {
      res.json(collection);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createCollectionController = async (req: any, res: Response) => {
  const { name, user_id, type } = req.body;
  try {
    const collection = await Collections.create({ name, user_id, type });
    res.status(201).json(collection);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCollectionController = async (req: any, res: Response) => {
  const { name, user_id, type } = req.body;
  try {
    const [result] = await Collections.update({ name, user_id, type }, { where: { id: req.params.id } });
    if (result === 0) {
      res.status(404).json({ error: 'Colección no encontrada' });
    } else {
      res.status(200).json({ message: 'Colección actualizada correctamente' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCollectionController = async (req: any, res: Response) => {
  try {
    const result = await Collections.destroy({ where: { id: req.params.id } });
    if (result === 0) {
      res.status(404).json({ error: 'Colección no encontrada' });
    } else {
      res.status(204).json();
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
