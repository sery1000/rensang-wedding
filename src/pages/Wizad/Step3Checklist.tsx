// src/pages/Wizard/Step3Checklist.tsx
import React from 'react';

interface Step3ChecklistProps {
  onNext: () => void;
}

const Step3Checklist: React.FC<Step3ChecklistProps> = ({ onNext }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">3단계: AI 웨딩 체크리스트</h2>
      <ul className="list-disc pl-5 text-left mb-4">
        <li>예산, 일정, 장소 기반 자동 체크리스트 생성</li>
        <li>완료 항목 체크 기능</li>
        <li>추천 일정 자동 정렬</li>
      </ul>
      <button onClick={onNext} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
        다음 단계로
      </button>
    </div>
  );
};

export default Step3Checklist;
