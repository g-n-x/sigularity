import { Model, DataTypes } from 'sequelize'
import db from '../database'

export default class Content extends Model {}

Content.init({
  filePath: DataTypes.STRING,
  fileUrl: DataTypes.STRING
}, {
  sequelize: db,
  modelName: 'Content',
})
