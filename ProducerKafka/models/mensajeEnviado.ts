// src/models/mensajeEnviado.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelizeConfig';

class MensajeEnviado extends Model {
  public id!: number;
  public topic!: string;
  public mensaje!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

MensajeEnviado.init(
  {
    topic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    mensaje: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'mensajes_enviados',
  }
);

export default MensajeEnviado;
