import multer from "multer";

const storage = multer.diskStorage({
  filename: function (_, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
  destination: function (_, __, cb) {
    cb(null, "./uploads/audio");
  },
});

export const uploadAudio = multer({ storage });
