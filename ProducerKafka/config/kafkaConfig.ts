// src/config/kafkaConfig.ts
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'mi-app',
  brokers: ['localhost:9092'],
});

export default kafka;
