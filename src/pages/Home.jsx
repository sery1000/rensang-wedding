// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-4xl font-bold">💒 Rensang Wedding</h1>
      <h2 className="text-2xl text-pink-700">💍 rensang-wedding</h2>
      <p className="italic">“우리 둘만의 여정을 시작해요.”</p>

      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-semibold">📖 우리의 이야기 한 페이지</h3>
        <p>지금 이 순간, 어떤 기분이 드나요?</p>

        <div className="space-x-2">
          <Link to="/memory-note">
            <button className="px-4 py-2 bg-pink-300 text-white rounded">📝 감정 기록하러 가기</button>
          </Link>
          <Link to="/photo-uploader">
            <button className="px-4 py-2 bg-pink-200 text-white rounded">📷 사진 올리러 가기</button>
          </Link>
        </div>
      </div>

      <div className="mt-4 space-x-2">
        <Link to="/login">
          <button className="bg-pink-500 text-white px-4 py-2 rounded">
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-pink-400 text-white px-4 py-2 rounded">
            회원가입
          </button>
        </Link>
      </div>

      <div className="mt-4">
        <Link to="/login">
          <button className="bg-pink-500 text-white px-4 py-2 rounded">
            로그인
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
