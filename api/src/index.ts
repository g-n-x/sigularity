import express, { Express, Request, Response } from 'express'
import db from './database'
import routes from './routes'

try {
    db.sync().then(
        () => console.log('connected to the database')
    )
} catch (err) {
    console.log('error connecting to the database:', err)
}

const app: Express = express()

app.use(routes)

app.listen(6475, () => {
    console.log('listening on port 6475')
})
