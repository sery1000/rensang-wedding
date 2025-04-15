import { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, pw }),
    });
    const data = await res.json();
    if (data.success) {
      setStatus("✅ 로그인 성공!");
    } else {
      setStatus("❌ 로그인 실패: " + data.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-bold text-rose-600 mb-4">🔐 로그인</h2>
      <input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600"
      >
        로그인
      </button>
      {status && <p className="mt-3 text-sm">{status}</p>}
    </div>
  );
}
