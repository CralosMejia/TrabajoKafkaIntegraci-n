// src/jobs/retransmisionJob.ts
import * as cron from 'cron';
import MensajeEnviado from '../models/mensajeEnviado';
import enviarMensajeAKafka from '../services/kafkaService';

const job = new cron.CronJob('*/1 * * * *', async () => {
  try {
    const formattedHour = new Date().toLocaleTimeString('en-US', { hour12: false });
    console.log(`Intentando retrasmitir mensajes a las ${formattedHour}`)
    const mensajesPendientes = await MensajeEnviado.findAll({raw:true});

    if(mensajesPendientes.length !== 0){
        for (const mensaje of mensajesPendientes) {
            await enviarMensajeAKafka(mensaje.topic, mensaje.mensaje);
            await MensajeEnviado.destroy({where:{
                id:mensaje.id
            }});
          }
      
          console.log('Retransmisión exitosa');
    }


  } catch (error) {
    console.error('Error al retransmitir mensajes:', error);
  }
});

export default job;
