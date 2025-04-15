const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/upload");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // 이미지 URL 접근 허용

// 📦 사진 업로드 라우트
app.use("/api/upload", uploadRoutes);

// ✅ 로그인 라우트
app.post("/api/login", (req, res) => {
  const { id, pw } = req.body;

  // 예시: 고정된 계정 정보
  const correctId = "rensang";
  const correctPw = "wedding123";

  if (id === correctId && pw === correctPw) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "아이디 또는 비밀번호가 틀렸어요" });
  }
});

// 🚀 서버 시작
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
