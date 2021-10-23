import { Router, Request, Response } from 'express'
import multer from 'multer'
import FileController from './controller/FileController'

const router = Router()
const upload = multer()

router.get('/', (req: Request, res: Response) => {
    console.log('request from: ' + req.ip)
    res.json({
        status: 'success'
    })
})

router.post('/image', upload.single('img'), FileController.store)

export default router
