import { Router, Request, Response } from 'express'
import ContentController from './controller/ContentController'
import FileController from './controller/FileController'
import upload from './service/multer'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    console.log('request from: ' + req.ip)
    res.json({
        status: 'success'
    })
})

router.get('/content', ContentController.retrieveAll)
router.get('/content/:filePath', FileController.readFile)

router.post('/file',
    upload.single('file'),
    FileController.store
)

export default router
