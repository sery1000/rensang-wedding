import React, { useState } from 'react';

const WizardPlanner = () => {
  const [budget, setBudget] = useState('');
  const [style, setStyle] = useState('');

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">나만의 웨딩 설계</h2>
      <input placeholder="예산 (만원)" value={budget} onChange={(e) => setBudget(e.target.value)} />
      <select value={style} onChange={(e) => setStyle(e.target.value)}>
        <option value="">스타일 선택</option>
        <option value="classic">클래식</option>
        <option value="modern">모던</option>
      </select>
    </div>
  );
};

export default WizardPlanner;
