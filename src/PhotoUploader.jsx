import React, { useState } from "react";

const PhotoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert(`'${selectedFile.name}' 업로드됨`);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">추억 사진 업로드</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500"
      >
        업로드
      </button>
    </div>
  );
};

export default PhotoUploader;
