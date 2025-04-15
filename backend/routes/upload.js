const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + file.originalname;
    cb(null, unique);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("photo"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "파일이 없습니다." });
  }

  const fileUrl = `http://localhost:4000/uploads/${req.file.filename}`;
  res.json({ message: "업로드 완료!", fileUrl });
});

module.exports = router;
