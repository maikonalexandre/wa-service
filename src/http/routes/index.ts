import { FastifyInstance } from 'fastify';
import { health } from '../controllers/health';
import { sendMessage } from '../controllers/sendMessage';

export async function appRoutes(app: FastifyInstance) {
  app.post('/sender', sendMessage);
  app.get('/health', health);
}
