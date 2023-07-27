import { NextFunction, Request, Response } from 'express';
import { attendanceSchema, registrationSchema } from './schema';

export const validateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await registrationSchema.parseAsync(req.body);
    next();
  } catch (error) {
    const error_data = JSON.parse(error);
    res.status(400).json({ success: 'false', message: 'invalid body JSON', error: error_data });
  }
};

export const verifyUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await attendanceSchema.parseAsync(req.body);
    next();
  } catch (error) {
    const error_data = JSON.parse(error);
    res.status(400).json({ success: 'false', message: 'invalid body JSON', error: error_data });
  }
};
