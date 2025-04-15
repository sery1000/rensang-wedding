// src/pagesrd/Wiza/Step2Package.tsx
import React from 'react';

interface Step2PackageProps {
  onNext: () => void;
}

const Step2Package: React.FC<Step2PackageProps> = ({ onNext }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">2단계: 웨딩 패키지 구성</h2>
      <ul className="list-disc pl-5 text-left mb-4">
        <li>드레스, 메이크업, 사진 포함 여부 선택</li>
        <li>패키지별 가격 비교</li>
        <li>옵션 선택 시 예상 금액 자동 계산</li>
      </ul>
      <button onClick={onNext} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
        다음 단계로
      </button>
    </div>
  );
};

export default Step2Package;