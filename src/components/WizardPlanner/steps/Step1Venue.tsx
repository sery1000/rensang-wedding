// src/components/WizardPlanner/steps/Step1Venue.tsx
import React from 'react';

interface Step1VenueProps {
  onNext: () => void;
}

const Step1Venue: React.FC<Step1VenueProps> = ({ onNext }) => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">1단계: 예식장 선택</h2>
      <p className="mb-4 text-gray-600">어떤 유형의 예식장을 원하시나요?</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="bg-pink-100 hover:bg-pink-200 p-4 rounded">호텔 예식</button>
        <button className="bg-pink-100 hover:bg-pink-200 p-4 rounded">하우스 웨딩</button>
        <button className="bg-pink-100 hover:bg-pink-200 p-4 rounded">야외 웨딩</button>
        <button className="bg-pink-100 hover:bg-pink-200 p-4 rounded">전통 혼례</button>
      </div>

      <button
        onClick={onNext}
        className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
      >
        다음 단계로
      </button>
    </div>
  );
};

export default Step1Venue;
