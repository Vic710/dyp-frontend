import { Link } from "react-router-dom";
import icon from "../assets/icon.png"; // Adjust the path based on your file location

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between shadow-md">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <img src={icon} alt="Logo" className="w-10 h-10 mr-3" /> 
        <Link to="/" className="text-white text-xl font-bold">SkinCheck</Link>
      </div>
    </nav>
  );
}
