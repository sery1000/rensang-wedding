import React from 'react';

export default function RumeysaInvitation() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 p-4 font-serif">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-pink-600 mt-10 mb-4">
          👑 루메이사 공주의 결혼식
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          저희 두 사람이 사랑의 결실을 맺는 자리에<br />
          소중한 분들을 모시고자 합니다.
        </p>
        <div className="text-xl font-semibold text-gray-900">
          김선형 & 루메이사
        </div>
        <div className="mt-4 text-md text-gray-600">
          2025년 5월 24일 (토) 오후 4시<br />
          라비돌 리조트 야외 결혼식장
        </div>

        <img
          src="/wedding-photo.jpg"
          alt="Wedding"
          className="rounded-xl mt-8 mx-auto w-64 shadow-xl border-4 border-pink-200"
        />

        <div className="mt-10">
          <h2 className="text-lg font-bold text-pink-500 mb-2">신랑 · 신부 측 알림</h2>
          <p className="text-gray-700">신랑측: 김정민 · 이경미 드림</p>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          ※ 장소 안내 및 계좌번호는 요청 시 알려드립니다.
        </div>
      </div>
    </div>
  );
}
