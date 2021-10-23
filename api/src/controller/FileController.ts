import { Request, Response } from 'express'

class FileController {
    static async store(req: Request, res: Response) {
        const { fileName } = req.body
        console.log(req.files)
        console.log(req.body)
    }
}

export default FileController
