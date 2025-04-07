require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// 📌 사용자 라우트 추가
const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);

// ✅ 테스트용 API 엔드포인트
app.get("/api/test1", (req, res) => {
    res.json({ message: "API 정상 작동 중!" });
});

// ✅ 기본 사용자 목록 반환 API
app.get("/api/users", (req, res) => {
    res.json([{ id: 1, name: "홍길동" }, { id: 2, name: "김철수" }]);
});

// ✅ 기본 페이지
app.get("/", (req, res) => {
    res.send("🚀 웨딩 플랫폼 백엔드 서버 실행 중!");
});

app.listen(PORT, () => {
    console.log(`✅ 서버가 http://localhost:${PORT} 에서 실행 중`);
});