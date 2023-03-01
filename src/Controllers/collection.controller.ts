import { Collection } from '../Models/collection';
import { Response } from 'express';

exports.getCollections = async (req: any, res: Response) => {
  try {
    const collections = await Collection.findAll();
    res.json(collections);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getCollectionById = async (req: any, res: Response) => {
  try {
    const collection = await Collection.findByPk(req.params.id);
    if (!collection) {
      res.status(404).json({ error: 'Colección no encontrada' });
    } else {
      res.json(collection);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCollection = async (req: any, res: Response) => {
  const { name, user_id, type } = req.body;
  try {
    const collection = await Collection.create({ name, user_id, type });
    res.status(201).json(collection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCollection = async (req: any, res: Response) => {
  const { name, user_id, type } = req.body;
  try {
    const [result] = await Collection.update({ name, user_id, type }, { where: { id: req.params.id } });
    if (result === 0) {
      res.status(404).json({ error: 'Colección no encontrada' });
    } else {
      res.status(200).json({ message: 'Colección actualizada correctamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCollection = async (req: any, res: Response) => {
  try {
    const result = await Collection.destroy({ where: { id: req.params.id } });
    if (result === 0) {
      res.status(404).json({ error: 'Colección no encontrada' });
    } else {
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
