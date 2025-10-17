import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { calculateCGPA } from '../utils/calculations';

export default function CGPACalculator() {
  const [numSemesters, setNumSemesters] = useState<number>(0);
  const [semesterGPAs, setSemesterGPAs] = useState<{ [key: number]: string }>({});
  const [calculatedCGPA, setCalculatedCGPA] = useState<number | null>(null);

  const handleCalculateCGPA = () => {
    const gpas = Object.values(semesterGPAs)
      .map(gpa => parseFloat(gpa))
      .filter(gpa => !isNaN(gpa) && gpa >= 0 && gpa <= 10);

    if (gpas.length === numSemesters) {
      const cgpa = calculateCGPA(gpas);
      setCalculatedCGPA(cgpa);
    }
  };

  const handleReset = () => {
    setSemesterGPAs({});
    setCalculatedCGPA(null);
  };

  const handleGPAChange = (semester: number, value: string) => {
    setSemesterGPAs(prev => ({ ...prev, [semester]: value }));
    setCalculatedCGPA(null);
  };

  const allGPAsEntered = numSemesters > 0 &&
    Array.from({ length: numSemesters }, (_, i) => i + 1)
      .every(sem => {
        const gpa = parseFloat(semesterGPAs[sem]);
        return !isNaN(gpa) && gpa >= 0 && gpa <= 10;
      });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-7 h-7 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">CGPA Calculator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Semesters Completed
          </label>
          <select
            value={numSemesters}
            onChange={(e) => {
              setNumSemesters(Number(e.target.value));
              setSemesterGPAs({});
              setCalculatedCGPA(null);
            }}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
          >
            <option value={0}>Select number of semesters</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Semester' : 'Semesters'}
              </option>
            ))}
          </select>
        </div>

        {numSemesters > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Enter GPA for Each Semester
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: numSemesters }, (_, i) => i + 1).map(sem => (
                <div key={sem} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Semester {sem}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    value={semesterGPAs[sem] || ''}
                    onChange={(e) => handleGPAChange(sem, e.target.value)}
                    placeholder="0.00"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {numSemesters > 0 && (
          <div className="flex gap-3">
            <button
              onClick={handleCalculateCGPA}
              disabled={!allGPAsEntered}
              className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Calculate CGPA
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-colors"
            >
              Reset
            </button>
          </div>
        )}

        {calculatedCGPA !== null && (
          <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-6 text-center">
            <p className="text-sm font-semibold text-green-700 mb-2">Your Overall CGPA</p>
            <p className="text-4xl font-bold text-green-900">{calculatedCGPA.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
