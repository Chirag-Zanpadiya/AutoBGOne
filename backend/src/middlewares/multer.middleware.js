import multer from "multer";

// creating multer middlware for parsing formdata

const storage = multer.diskStorage({
  filename: function (re, file, callback) {
    callback(null, `AutoBGOne_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({
  storage,
});
export default upload
