import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req:any, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
    }
  })
  
 export const uploads = multer({ storage: storage }).single("avatar")