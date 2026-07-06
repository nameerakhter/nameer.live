import * as z from 'zod'

export const env = z
  .object({
    VITE_API_BASE_URL: z
      .string()
      .optional()
      .default('http://localhost:3000')
      .transform((value) => value.replace(/\/$/, '')),
  })
  .parse(import.meta.env)
