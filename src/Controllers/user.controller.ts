import { Users } from '../Models/users'
import { Response } from 'express'

export const getUsersController = async (req: any, res: Response) => {
  try {
    const users = await Users.findAll({
      attributes: req.attributes,
    })
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export const postUsersController = async (req: any, res: Response) => {
  try {
    const user = await Users.create(req.body)
    if (user.getDataValue('user') === req.body.user) {
      console.log('User created successfully')
    } else if (user.getDataValue('user') !== req.body.user) {
      console.log('User not created')
    } else if (user.getDataValue('user') === null) {
      console.log('User not created')
    }

    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}
