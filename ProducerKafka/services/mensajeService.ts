// src/services/mensajeService.ts
import MensajeEnviado from '../models/mensajeEnviado';

async function guardarEnMySQL(topic:string,mensaje: string): Promise<void> {
  try {
    await MensajeEnviado.create({ topic,mensaje });
  } catch (error) {
    console.error('Error al guardar en MySQL:', error);
  }
}

export { guardarEnMySQL };

