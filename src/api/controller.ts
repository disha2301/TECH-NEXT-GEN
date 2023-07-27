import { Request, Response } from 'express';
import { handleGetUsers, handleRegisterUser, handleVerifiedUser } from './service';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, reg, name } = req.body;
    await handleRegisterUser(email, reg, name);
    res.status(200).send({ success: true, message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
export const verifiedUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await handleVerifiedUser(email);
    res.status(200).send({ success: true, message: 'User has been marked present' });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await handleGetUsers();
    res.status(200).send({ success: true, message: 'Fetched all users', data });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
