import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../../models/User';

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const usernameExists = await User.findOne({
      username,
    });

    if (usernameExists) {
      throw new Error('Username exists');
    }

    const hashPassword = await hash(password, 8);

    const product = await User.create({
      username,
      password: hashPassword,
    });

    res.json(product);
  } catch {
    res.status(500).json({
      error: 'Interval server error!',
    });
  }
};

export default createUser;
