import { Model, DataTypes } from 'sequelize'
import db from '../database'

export default class Image extends Model{}

Image.init({
  fileName: DataTypes.STRING,
  content: DataTypes.BLOB
}, {
  sequelize: db,
  modelName: 'Image',
})
