import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => console.log("유저 목록:", data));
  }, []);

  return (
    <div>
      <h1>🎉 프론트엔드 정상 실행 중!</h1>
    </div>
  );
}

export default App;
