import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-black">CineCraft</Link>
      <div>
        <Link to="/login" className="text-black hover:text-indigo-800 mr-6">Login</Link>
        <Link to="/signup" className="bg-black text-white py-2 px-4 rounded hover:bg-indigo-700">Sign Up</Link>
      </div>
    </nav>
  );
}
