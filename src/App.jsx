import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SkinHome from "./components/SkinHome";
import DoctorSearch from "./components/DoctorSearch";
import Medical from "./components/Medical";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      {/* Full Page Layout Fix */}
      <div className="h-screen flex flex-col">
        {/* Global Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skin-home" element={<SkinHome />} />
            <Route path="/doctor-search" element={<DoctorSearch />} />
            <Route path="/medical-upload" element={<Medical />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/result" element={<Result />} />
            <Route path="/" element={<SkinHome />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
