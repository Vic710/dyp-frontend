import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SkinHome = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    region: "",
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image first.");
      return;
    }

    try {
      const formDataImage = new FormData();
      formDataImage.append("file", file);

      const response = await fetch("https://edc-pict.site/api/get-analysis", {
        method: "POST",
        body: formDataImage,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        navigate("/result", { state: { analysis: result.analysis } });
      } else {
        alert("Error processing the image.");
      }
    } catch (error) {
      alert("Network error. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-4">
          Skin Cancer Detection System
        </h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Sex</label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Lesion Region
            </label>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select region</option>
              <option value="face">Face</option>
              <option value="neck">Neck</option>
              <option value="chest">Chest</option>
              <option value="back">Back</option>
              <option value="arms">Arms</option>
              <option value="legs">Legs</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={handleFileChange}
              className="w-full border p-2 rounded-md"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-full max-h-64 object-contain"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md"
          >
            Analyze
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkinHome;
