// src/app.ts
import express from 'express';
import job from './jobs/retransmisionJob';
import { enviarMensaje } from './controller/mensajeController';

const app = express();
const port = 3000;

// Conectar el productor
job.start();

app.use(express.json());

app.post('/enviar-mensaje-topic1', async (req, res) => {
  await enviarMensaje(req, res, 'test');
});

app.post('/enviar-mensaje-topic2', async (req, res) => {
  await enviarMensaje(req, res, 'test1');
});

// Manejar interrupciones para cerrar el productor correctamente
process.on('SIGINT', async () => {
  await job.stop();
  process.exit();
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
