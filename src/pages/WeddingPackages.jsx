// src/pages/WeddingPackages.jsx

const packages = [
  {
    title: "💍 기억 패키지",
    description: "우리 둘만의 사진과 감정 일기를 모아 타임캡슐처럼 저장해요.",
  },
  {
    title: "💌 러브레터 패키지",
    description: "서로에게 쓰는 마음의 편지를 간직해요.",
  },
  {
    title: "📸 사진첩 패키지",
    description: "추억의 사진을 필터와 함께 정리해요.",
  },
  {
    title: "🕊️ 하객 응원 패키지",
    description: "친구들이 남기는 축하 메시지와 사랑의 기록을 모아요.",
  },
  {
    title: "🏠 우리 가족 공간",
    description: "부모님도 함께 볼 수 있는 공간, 가족의 사랑을 담아요.",
  },
  {
    title: "🎉 결혼식 D-DAY 패키지",
    description: "결혼식까지의 여정을 카운트다운하며 공유해요.",
  },
];

export default function WeddingPackages() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">
        🎁 웨딩 패키지
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-4 border border-rose-100"
          >
            <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
            <p className="text-gray-600">{pkg.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
