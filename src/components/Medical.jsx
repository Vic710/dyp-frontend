import { useState } from "react";

const MedicalUpload = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Upload Medical Report Image
        </h1>

        <form method="POST" action="/medical/upload" encType="multipart/form-data">
          <label className="block text-gray-700 font-medium mb-2">
            Choose an image file:
          </label>
          <input
            type="file"
            name="report"
            accept="image/*"
            required
            onChange={handleImageChange}
            className="w-full border p-2 rounded-md"
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 w-full max-h-64 object-contain"
            />
          )}

          <button type="submit" className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default MedicalUpload;
