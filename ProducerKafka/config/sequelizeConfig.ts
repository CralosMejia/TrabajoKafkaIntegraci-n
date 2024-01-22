// src/config/sequelizeConfig.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:0997927874@localhost:3306/TallerGarantiaEntrega');

export default sequelize;
