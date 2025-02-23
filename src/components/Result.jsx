import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const analysis = location.state?.analysis;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-4">Analysis Result</h1>

        {analysis ? (
          <div className="text-left text-lg leading-relaxed">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{analysis.disease}</h2>
            <p className="mb-4">{analysis.info}</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">🔹 Causes and Risk Factors</h3>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Family history:</strong> Moles can be hereditary.</li>
              <li><strong>Skin type:</strong> Fair skin that burns easily.</li>
              <li><strong>Sun exposure:</strong> Frequent UV exposure.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">🔹 Severity and Urgency</h3>
            <p className="mb-4">
              Most cases are benign, but <strong>changes in size, shape, or color</strong> should be checked by a dermatologist.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">🔹 Recommendations</h3>
            <p className="mb-2"><strong>Immediate Steps:</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Monitor for changes and take photographs.</li>
              <li>Schedule a dermatology consultation for confirmation.</li>
              {analysis.recommendation.includes("biopsy") && <li><strong>Biopsy may be required.</strong></li>}
            </ul>

            <p className="mb-2"><strong>Preventive Measures:</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Use sunscreen SPF 30+ to protect against UV rays.</li>
              <li>Regularly check your skin for new or changing moles.</li>
              <li>Avoid tanning beds and excessive sun exposure.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">🔹 Additional Information</h3>
            <p className="mb-4">
              If the mole is <strong>changing rapidly</strong> or causing discomfort, seek medical attention immediately.
              Early detection improves treatment success rates.
            </p>

            <p className="text-gray-600"><strong>Probability:</strong> {analysis.probability}</p>
          </div>
        ) : (
          <p className="text-lg text-red-600 text-center">No analysis available.</p>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-blue-600 text-white p-2 rounded-md"
        >
          Upload Another Image
        </button>
      </div>
    </div>
  );
};

export default Result;
