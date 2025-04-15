// src/pages/Wizard/Step1Venue.tsx
import React from 'react';

interface Step1VenueProps {
  onNext: () => void;
}

const Step1Venue: React.FC<Step1VenueProps> = ({ onNext }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">1단계: 예식장 선택</h2>
      <ul className="list-disc pl-5 text-left mb-4">
        <li>지역별 인기 예식장 보기</li>
        <li>가용 날짜 확인 및 예약</li>
        <li>사진, 가격, 위치 정보 제공</li>
      </ul>
      <button
        onClick={onNext}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        다음 단계로
      </button>
    </div>
  );
};

export default Step1Venue;
