import { Router, Request, Response } from 'express'
import FileController from './controller/FileController'
import upload from './service/multer'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    console.log('request from: ' + req.ip)
    res.json({
        status: 'success'
    })
})

router.post('/image',
    upload.single('content'),
    FileController.store
)

export default router
