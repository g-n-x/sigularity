import express, { Express, Request, Response } from 'express'
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
app.use('/', routes)

app.listen(6475, () => {
    console.log('listening on port 6475')
})
