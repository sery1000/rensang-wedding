import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MemoryNote from "./pages/MemoryNote";
import PhotoUploader from "./pages/PhotoUploader";
import WeddingPackages from "./pages/WeddingPackages";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup"; // ✅ 회원가입 import 추가
import Login from "./pages/Login";   // ✅ 로그인 import (이미 있으면 OK)
// App.tsx 예시
import RumeysaInvitation from './pages/rumeysa';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50 font-[\'Noto Sans KR\']">
        <Navbar />
        <main className="max-w-4xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memory-note" element={<MemoryNote />} />
            <Route path="/photo-uploader" element={<PhotoUploader />} />
            <Route path="/wedding-packages" element={<WeddingPackages />} />
            <Route path="/login" element={<Login />} />        {/* ✅ 로그인 라우트 */}
            <Route path="/signup" element={<Signup />} />      {/* ✅ 회원가입 라우트 */}
            <Route path="/rumeysa" element={<RumeysaInvitation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
