import multer from "multer";

export const __dirname = "c:/xampp/htdocs/coderhouse/90670/clase8/src";
const storage = multer.diskStorage({
    destination:function(req, file, cb) {                
        cb(null, __dirname + "/public/images")
    },
    filename:function(req, file, cb) {
        cb(null, file.originalname)
    }
})

export const uploader = multer({storage});