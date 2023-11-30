import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';
import { env } from '../../../env';

export const auth = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction,
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader || authHeader !== env.API_TOKEN) {
    reply.code(401).send({ error: 'Unauthorized' });
    return;
  }

  done();
};
