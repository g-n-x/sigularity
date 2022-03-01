import { Request, Response } from 'express'
import ContentService from '../service/ContentService'

class ContentController {
    static async retrieveAll(req: Request, res: Response) {
        const r = await ContentService.retrieveAll()

        res.status(200).json(r)
    }
}

export default ContentController
