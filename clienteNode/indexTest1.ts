import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

const consumer: Consumer = kafka.consumer({ groupId: 'my-group1' });

const consumeMessages = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test1', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log({
        value: message.value?.toString(),
      });
    },
  });
};


consumeMessages(); 
