import multer from 'multer'
import fs from 'fs'

const CONTENT_FOLDER = './uploadedContent/'

if(!fs.existsSync(CONTENT_FOLDER))
    fs.mkdirSync(CONTENT_FOLDER)

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, CONTENT_FOLDER)
    },
    filename: function(req, file, cb) {
        let newName: string = file.originalname
        let baseName = file.originalname.slice(0, -4)
        let ext = file.originalname.slice(-3)
        // check if already exists a file with this name
        // and appends a number to the end
        console.log(CONTENT_FOLDER + file.originalname)
        if(fs.existsSync(CONTENT_FOLDER + file.originalname)) {
            console.log('exists')
            let len = fs.readdirSync(CONTENT_FOLDER)
                .filter(name => name.slice(0, (baseName.length)) === baseName).length
            console.log(len)
            newName = `${baseName}(${len + 1}).${ext}`
        }
        cb(null, newName)
    }
})

const upload = multer({storage})

export default upload
