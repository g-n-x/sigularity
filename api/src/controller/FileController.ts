import { Request, Response } from 'express'
import FileService from '../service/FileService'
import { resolve } from 'path'
import { readFile } from 'fs'

class FileController {
    static async readFile(req: Request, res: Response) {
        const { filePath } =  req.params
        const r: any = await FileService.retrieveFile(filePath)
        if(r) {
            console.log('file found')
            readFile(resolve(__dirname, '..', '..', 'uploadedContent', r.filePath),
                function (err, data) {
                    if(err) {
                        res.writeHead(404)
                        res.end(JSON.stringify(err))
                        return
                    }
                    res.set({'Content-Type': 'image/png'});
                    res.writeHead(200)
                    res.end(data)
                }
            )
        } else {
            console.log('file not found')
        }
    }
    static async store(req: any, res: Response) {
        await FileService.saveImage(req.file.path)
        res.json({
            status: 'success'
        })
    }
}

export default FileController
