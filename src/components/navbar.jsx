// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-pink-100 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold text-pink-600">Rensang Wedding</span>
        <div className="space-x-4">
          <Link to="/" className="text-pink-600 hover:text-pink-800">Home</Link>
          <Link to="/login" className="text-pink-600 hover:text-pink-800">로그인</Link>
          <Link to="/wedding-packages" className="text-pink-600 hover:text-pink-800">웨딩패키지</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
