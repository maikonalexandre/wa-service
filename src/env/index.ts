import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
  API_TOKEN: z.string(),
  HOST: z.string().default('0.0.0.0'),
  RESEND_KEY: z.string(),
  ADM_EMAIL: z.string().email(),
  SERVICE_EMAIL: z.string().email().default('onboarding@resend.dev'),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('❌ Invalid enviromment variables', _env.error.format());
  throw new Error('Invalid enviromment variables');
}

export const env = _env.data;
