import Content from '../models/Content'
import crypto from 'crypto'
import nodepath from 'path'

class FileService {
    static async retrieveFile(filePath: string) {
        const r = await Content.findOne({where: {fileURL: filePath}})
        console.log(r?.get())
        return r
    }

    static async saveImage(path: string) {
        await Content.create({
            filePath: nodepath.basename(path),
            fileUrl: crypto.randomBytes(20).toString('hex')
        })
    }
}

export default FileService
