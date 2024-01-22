// src/services/kafkaService.ts
import { Producer, ProducerRecord } from 'kafkajs';
import kafka from '../config/kafkaConfig';

const producer = kafka.producer();

async function enviarMensajeAKafka(topic: string, message: string): Promise<void> {
  await producer.connect();
  const record: ProducerRecord = {
    topic,
    messages: [
      { value: message },
    ],
  };

  await producer.send(record);
  console.log(`Mensaje enviado a ${topic} con éxito`);
}

export default enviarMensajeAKafka;
