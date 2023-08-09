import * as z from 'zod';

export const userValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  username: z.string().min(3).max(20),
  name: z.string().min(3).max(20),
  bio: z.string().min(3).max(1000),
});
