import { z } from 'zod';
export const registrationSchema = z.object({
  email: z.string().email(),
  reg: z.string().min(12),
  name: z.string(),
});
export const attendanceSchema = z.object({
  email: z.string().email(),
});
