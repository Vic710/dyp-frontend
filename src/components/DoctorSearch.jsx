import { useState } from "react";
import axios from "axios";

export default function DoctorSearch() {
  const [city, setCity] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [callingDoctor, setCallingDoctor] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [doctorPhoneToCall, setDoctorPhoneToCall] = useState(null);

  const searchDoctors = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://edc-pict.site/api/search-places?query=doctors in ${city}`
      );
      setDoctors(response.data.places || []);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
    setLoading(false);
  };

  const openFileDialog = (doctorPhone) => {
    setShowDialog(true);
    setDoctorPhoneToCall(doctorPhone);
  };

  const closeFileDialog = () => {
    setShowDialog(false);
    setSelectedImage(null);
    setDoctorPhoneToCall(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file (JPEG or PNG).");
    }
  };

  const bookAppointment = async (doctorPhone) => {
    if (!doctorPhone) {
      alert("Doctor's phone number is not available.");
      return;
    }

    setCallingDoctor(doctorPhone);
    try {
      await axios.post(`https://edc-pict.site/api/make-call?doctorPhone=${doctorPhone}`);
      alert("Appointment call initiated!");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to initiate call. Please try again.");
    }
    setCallingDoctor(null);
  };

  const handleUploadAndCall = async () => {
    closeFileDialog();
    if (doctorPhoneToCall) {
      bookAppointment(doctorPhoneToCall);
    }
  };

  return (
    <div className="mt-24 p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Search Nearby Doctors</h1>
      <input
        type="text"
        placeholder="Enter preferred area address..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={searchDoctors}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>

      {doctors.length > 0 && (
        <ul className="mt-4 space-y-2">
          {doctors.map((doctor, index) => (
            <li key={index} className="p-4 border rounded flex justify-between items-center">
              <div>
                <p className="font-bold">{doctor.name}</p>
                <p className="text-sm text-gray-600">{doctor.address}</p>
              </div>
              <button
                onClick={() => openFileDialog("919545572005")}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 disabled:bg-gray-400"
                disabled={callingDoctor === doctor.phone}
              >
                {callingDoctor === doctor.phone ? "Calling..." : "Book"}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* File Upload Popup (Optional) */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Upload Medical Record (Optional)</h2>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
            {selectedImage && (
              <div className="mt-4">
                <p className="text-sm text-gray-600">Preview:</p>
                <img src={selectedImage} alt="Preview" className="mt-2 w-full rounded" />
              </div>
            )}

            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => {
                  closeFileDialog();
                  bookAppointment(doctorPhoneToCall);
                }}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Skip Upload
              </button>
              <button
                onClick={handleUploadAndCall}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Upload & Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
