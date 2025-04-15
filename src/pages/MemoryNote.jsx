import { useState } from "react";

export default function MemoryNote() {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return alert("내용을 입력해주세요!");
    console.log("감정 기록:", text);
    alert("✅ 기록 완료!");
    setText("");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold text-rose-600 mb-4">📖 우리의 감정 기록</h2>
      <textarea
        rows="4"
        className="w-full p-2 border rounded mb-4"
        placeholder="지금 어떤 기분이 드나요?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600"
        onClick={handleSubmit}
      >
        기록하기
      </button>
    </div>
  );
}
