import { useState } from "react";
import axios from "axios";

export default function DoctorSearch() {
  const [city, setCity] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [callingDoctor, setCallingDoctor] = useState(null);

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
                onClick={() => bookAppointment('919545572005')}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 disabled:bg-gray-400"
                disabled={callingDoctor === doctor.phone}
              >
                {callingDoctor === doctor.phone ? "Calling..." : "Book"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
