// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JoinFlow from './pages/JoinFlow';
// 기타 라우트

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinFlow />} />
        {/* 기타 라우트 */}
      </Routes>
    </BrowserRouter>
  );
}
