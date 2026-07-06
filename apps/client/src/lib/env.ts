import * as z from 'zod'

export const env = z
  .object({
    VITE_API_BASE_URL: z
      .string()
      .transform((value) => value.replace(/\/$/, '')),
  }).optional()
  .parse(import.meta.env)
