// src/pages/Wizard/Step4Planner.tsx
import React from 'react';

interface Step4PlannerProps {
  onNext: () => void;
}

const Step4Planner: React.FC<Step4PlannerProps> = ({ onNext }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">4단계: 플래너 마법사</h2>
      <ul className="list-disc pl-5 text-left mb-4">
        <li>선호 스타일, 계절, 인원수에 따라 맞춤 플래너 추천</li>
        <li>AI 기반 플래너 스케줄 생성</li>
        <li>미팅 일정 자동 캘린더 등록</li>
      </ul>
      <button onClick={onNext} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
        다음 단계로
      </button>
    </div>
  );
};

export default Step4Planner;

// src/pages/Wizard/Step5Review.tsx
import React from 'react';

const Step5Review: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">5단계: 후기 게시판</h2>
      <p className="mb-4">다른 커플들의 후기와 조언을 읽어보세요!</p>
      <ul className="list-disc pl-5 text-left text-gray-700">
        <li>실제 경험 후기 공유</li>
        <li>플래너, 장소, 패키지에 대한 별점 평가</li>
        <li>사진과 함께 올리는 생생 후기</li>
      </ul>
      <p className="mt-6 text-sm text-gray-500">* 회원가입 후 작성 가능</p>
    </div>
  );
};

export default Step5Review;
