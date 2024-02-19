import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/temp')
    },
    filename: function (req, file, cb) {
      // console.log("in multer-middleware-file: ",file);
      cb(null, file.originalname)
    }
})

export const upload = multer({ storage: storage });