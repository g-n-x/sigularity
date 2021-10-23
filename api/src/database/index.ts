import { Sequelize } from 'sequelize'

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'singularity.db'
})

export default db
