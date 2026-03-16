import multer from "multer";
import path from "path";

const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    if (file.fieldname === "audio") {
      cb(null, "uploads/audio");
    } 
    
    else if (file.fieldname === "cover") {
      cb(null, "uploads/images");
    }

    else {
      cb(new Error("Invalid file field"), false);
    }

  },

  filename: function (req, file, cb) {

    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, uniqueName + path.extname(file.originalname));

  },

});

const upload = multer({
  storage,
});

export { upload };