const Checklist = () => {
  const steps = ['웨딩홀 예약', '드레스 피팅', '사진 촬영', '청첩장 제작'];

  return (
    <ul className="list-decimal ml-6">
      {steps.map((step, i) => (
        <li key={i}>{step}</li>
      ))}
    </ul>
  );
};

export default Checklist;
