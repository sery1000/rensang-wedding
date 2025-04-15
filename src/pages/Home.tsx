// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-pink-50">
      <img
        src="/logo.png"
        alt="렌상 웨딩 로고"
        className="w-32 h-32 rounded-full shadow mb-6"
      />

      <h1 className="text-4xl font-bold text-pink-700 mb-2">💍 렌상 웨딩</h1>
      <p className="text-lg text-gray-600 mb-6">“우리만의 여행을 시작해요.”</p>

      <div className="bg-white rounded-lg shadow-md p-6 text-left max-w-2xl mb-10">
        <h2 className="text-xl font-bold mb-2">👤 김정민 회장 인사말</h2>
        <p className="text-gray-700 leading-relaxed">
          안녕하세요, <strong>김정민 회장</strong>입니다.<br />
          렌상웨딩 플랫폼을 통해 새로운 인연을 맺고<br />
          인생의 가장 아름다운 순간을 함께 나눌 수 있어 기쁩니다.<br />
          따뜻한 연결과 기억이 가득한 플랫폼이 되도록 최선을 다하겠습니다.
        </p>
      </div>

      <div className="space-x-4">
        <a href="/join" className="bg-pink-500 text-white px-5 py-2 rounded hover:bg-pink-600">회원가입</a>
        <a href="/notice" className="bg-gray-300 text-gray-800 px-5 py-2 rounded hover:bg-gray-400">공지사항</a>
        <a href="/login" className="text-pink-600 underline">로그인</a>
        <a href="/board" className="text-pink-600 underline">게시판</a>
      </div>
    </div>
  );
};

export default Home;
