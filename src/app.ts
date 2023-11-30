import Fastify, { FastifyInstance } from 'fastify';
import { appRoutes } from './http/routes';
import { ZodError } from 'zod';
import { auth } from './http/middlewares/auth';
import { WhatsAppService } from './services/whatsApp';

export const whatsApp = new WhatsAppService();

export const app = Fastify();

app.addHook('preHandler', auth);
app.register(appRoutes);

app.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() });
  }
  if (process.env.NODE_ENV !== 'production') {
    console.error(error);
  }
  return reply.status(500).send({ message: 'Internal server error' });
});
