// src/controllers/mensajeController.ts
import { Request, Response } from 'express';
import { guardarEnMySQL } from '../services/mensajeService';
import enviarMensajeAKafka from '../services/kafkaService';

async function enviarMensaje(req: Request, res: Response, topic: string): Promise<void> {
  try {
    const { mensaje } = req.body;
    await enviarMensajeAKafka(topic, mensaje);
    res.status(200).json({ status: `Mensaje enviado a ${topic} con éxito` });
  } catch (error) {
    await guardarEnMySQL(topic,req.body.mensaje);
    console.error(`Error al enviar el mensaje a ${topic}:`, error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

export { enviarMensaje };
