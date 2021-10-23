import multer from 'multer'
import fs from 'fs'

if(!fs.existsSync('./tempContent'))
    fs.mkdirSync('./tempContent')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './tempContent')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

export default upload
