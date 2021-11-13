import { Request, Response } from 'express'
import FileService from '../service/FileService'

class FileController {
    static async store(req: any, res: Response) {
        await FileService.saveImage(req.file.path)
        res.json({
            status: 'success'
        })
    }
}

export default FileController
