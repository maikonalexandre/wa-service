import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { whatsApp } from '../../../app';
import { removeDigitByIndex } from '../../../utils';

export async function sendMessage(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const requestBodySchema = z.object({
    phoneNumber: z.string().length(11),
    content: z.string().max(10000),
    imageUrl: z.string().optional(),
  });

  const { phoneNumber, content, imageUrl } = requestBodySchema.parse(
    request.body,
  );

  const imgMessage = {
    image: {
      url: imageUrl,
    },
    caption: content,
    footer: '',
  };

  const textMessage = {
    text: content,
  };

  try {
    whatsApp.client.sendMessage(
      `55${removeDigitByIndex(phoneNumber, 2)}@s.whatsapp.net`,
      imageUrl ? imgMessage : textMessage,
    );
  } catch (e) {
    console.log(e);
  }

  reply.code(200);
}
