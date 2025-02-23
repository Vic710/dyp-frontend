import { useState } from "react";
import { Link } from "react-router-dom";
import { RiEyeOffLine, RiEyeLine } from "react-icons/ri";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-md shadow-md w-full md:w-1/3">
        {/* <h2 className="text-3xl font-bold text-center mb-2">SkinCheck</h2> */}
        <h1 className="text-2xl font-semibold text-center mb-6">SIGN UP</h1>
        <form>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-2 border rounded-md mb-4"
          />

          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            placeholder="Enter Your Phone"
            className="w-full p-2 border rounded-md mb-4"
          />

          <label className="block text-gray-700">Age</label>
          <input
            type="text"
            placeholder="Enter Your Age"
            className="w-full p-2 border rounded-md mb-4"
          />

          <label className="block text-gray-700">City</label>
          <input
            type="text"
            placeholder="Enter Your City"
            className="w-full p-2 border rounded-md mb-4"
          />

          <label className="block text-gray-700">Gender</label>
          <select className="w-full p-2 border rounded-md mb-4">
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <div className="flex justify-between">
            <label className="text-gray-700">Password</label>
            <Link to="#" className="text-blue-500 text-sm">Forgot Password?</Link>
          </div>
          <div className="flex items-center border p-2 rounded-md mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full outline-none"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white p-2 rounded-md">SIGN UP</button>
        </form>

        <h6 className="text-center text-gray-500 mt-4">or continue with</h6>
        <div className="flex justify-center gap-4 mt-2">
          <img src="/images/google.png" alt="Google" className="w-8" />
          <img src="/images/github.png" alt="GitHub" className="w-8" />
          <img src="/images/facebook.png" alt="Facebook" className="w-8" />
        </div>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500">Sign In</Link>
        </p>
      </div>

      <div className="header-container">
        <img src="images/header.png" alt="Header" className="header-image" />
        </div>
    </div>
  );
};

export default SignUp;
