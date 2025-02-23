import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <a href="#" className="text-xl font-bold">SkinCheck</a>
          <button
            className="text-xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul
            className={`md:flex space-x-6 absolute md:static bg-white w-full md:w-auto md:flex-row transition-transform duration-200 ease-in-out ${menuOpen ? "block" : "hidden"}`}
          >
            <li><a href="home" className="block p-2">Home</a></li>
            <li><a href="doctor-search" className="block p-2">Search Doctors</a></li>
            <li><a href="#services" className="block p-2">Services</a></li>
            <li><a href="#contact" className="block p-2">Contact</a></li>
            <li><a href="/signup" className="block p-2">Sign Up</a></li>
            <li><a href="/templates/sign-up.html" className="block p-2">Sign In</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center py-10 bg-blue-100">
        <h1 className="text-3xl font-bold">
          Welcome to <span className="text-blue-600">SkinCheck</span>
        </h1>
        <p className="mt-4 text-gray-700">AI-powered Skin Cancer Detection System</p>
      </header>

      {/* How It Works Section */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Upload Image */}
          <div className="text-center p-4 border rounded-lg shadow">
            <h3 className="font-semibold">Upload Image</h3>
            <p>Upload an image of the affected skin area for AI analysis.</p>
            <button
              onClick={() => navigate("/medical-upload")}
              className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700"
            >
              Upload Now
            </button>
          </div>

          {/* AI Diagnosis */}
          <div className="text-center p-4 border rounded-lg shadow">
            <h3 className="font-semibold">AI Diagnosis</h3>
            <p>Our AI model processes the image to detect potential skin cancer.</p>
            <button
              onClick={() => navigate("/skin-home")}
              className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700"
            >
              Start Diagnosis
            </button>
          </div>

          {/* Consult a Doctor */}
          <div className="text-center p-4 border rounded-lg shadow">
            <h3 className="font-semibold">Consult a Doctor</h3>
            <p>Find nearby specialists and book an appointment instantly.</p>
            <button
              onClick={() => navigate("/doctor-search")}
              className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700"
            >
              Find Doctors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
