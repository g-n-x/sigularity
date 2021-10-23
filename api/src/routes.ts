import { Router, Request, Response } from 'express'
import FileService from './service/FileService'
import upload from './service/multer'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    console.log('request from: ' + req.ip)
    res.json({
        status: 'success'
    })
})

router.post('/image', upload.single('content'), function(req: any, res: any) {
    FileService.saveImage(req.file.path)
    .then(a => console.log('success'))
})

export default router
