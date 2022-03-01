import Content from "../models/Content"

class ContentService {
    static async retrieveAll() {
        return await Content.findAll()
    }
}

export default ContentService
