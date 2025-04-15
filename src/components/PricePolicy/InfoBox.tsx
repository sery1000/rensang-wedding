export default function InfoBox() {
  return (
    <div className="bg-yellow-50 p-4 border rounded">
      <h3 className="font-semibold">💸 예식장 평균 비용</h3>
      <ul className="list-disc ml-4">
        <li>서울 예식장 평균: 1,200만원</li>
        <li>지방 예식장 평균: 800만원</li>
      </ul>
    </div>
  );
}
