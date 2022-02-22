import express, { Express } from 'express'
import db from './database'
import routes from './routes'
import cors from 'cors'

try {
    db.sync().then(
        () => console.log('connected to the database')
    )
} catch (err) {
    console.log('error connecting to the database:', err)
}

const app: Express = express()

app.use(cors())
app.use('/api', routes)
app.use('/static', express.static('uploadedContent'))

const PORT = process.env.PORT || 8988
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})
