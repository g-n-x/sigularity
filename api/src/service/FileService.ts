import Image from '../models/Image'
import fs from 'fs'
import nodepath from 'path'

class FileService {
    static async saveImage(path: string) {
        await Image.create({
            fileName: nodepath.basename(path),
            content: fs.readFileSync(path)
        })
    }
}

export default FileService
