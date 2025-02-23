import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const analysis = location.state?.analysis;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Analysis Result</h1>

        {analysis ? (
          <div className="text-left">
            <p><strong>Disease:</strong> {analysis.disease}</p>
            <p><strong>Info:</strong> {analysis.info}</p>
            <p><strong>Probability:</strong> {analysis.probability}</p>
            <p><strong>Recommendation:</strong> {analysis.recommendation}</p>
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
