import { Sequelize } from 'sequelize'

const db: Sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "singularity.db",
  logging: true
})

export default db;
