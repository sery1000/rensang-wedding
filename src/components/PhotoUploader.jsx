import { useState } from "react";

export default function PhotoUploader() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage({ file, preview: url });
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("사진을 선택해줘!");
    const formData = new FormData();
    formData.append("photo", image.file);

    try {
      const res = await fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert("✅ 업로드 완료!");
      console.log("서버 응답:", data);
    } catch (err) {
      console.error("업로드 실패:", err);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold text-rose-600 mb-4">📸 추억 사진 업로드</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="mb-4"
      />
      {image && (
        <div className="mb-4">
          <img
            src={image.preview}
            alt="미리보기"
            className="max-w-full h-auto rounded-xl border"
          />
        </div>
      )}
      <button
        className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
        onClick={handleUpload}
      >
        업로드하기
      </button>
    </div>
  );
}
