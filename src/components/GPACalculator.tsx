import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { departments } from '../data/departments';
import { subjectsBySemester } from '../data/subjects';
import { gradePoints } from '../data/grades';
import { calculateGPA } from '../utils/calculations';

export default function GPACalculator() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<number>(0);
  const [grades, setGrades] = useState<{ [key: string]: string }>({});
  const [calculatedGPA, setCalculatedGPA] = useState<number | null>(null);

  const handleCalculateGPA = () => {
    if (selectedSemester > 0) {
      const subjects = subjectsBySemester[selectedSemester];
      const gpa = calculateGPA(subjects, grades);
      setCalculatedGPA(gpa);
    }
  };

  const handleReset = () => {
    setGrades({});
    setCalculatedGPA(null);
  };

  const handleGradeChange = (subjectCode: string, grade: string) => {
    setGrades(prev => ({ ...prev, [subjectCode]: grade }));
    setCalculatedGPA(null);
  };

  const subjects = selectedSemester > 0 ? subjectsBySemester[selectedSemester] : [];
  const allGradesSelected = subjects.length > 0 && subjects.every(s => grades[s.code]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-7 h-7 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">GPA Calculator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Department
          </label>
          <select
            value={selectedDepartment}
            onChange={(e) => {
              setSelectedDepartment(e.target.value);
              setSelectedSemester(0);
              setGrades({});
              setCalculatedGPA(null);
            }}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">Choose your department</option>
            {departments.map(dept => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {selectedDepartment && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Semester
            </label>
            <select
              value={selectedSemester}
              onChange={(e) => {
                setSelectedSemester(Number(e.target.value));
                setGrades({});
                setCalculatedGPA(null);
              }}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value={0}>Choose your semester</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(sem => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedSemester > 0 && subjects.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Enter Grades for Semester {selectedSemester}
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {subjects.map(subject => (
                <div key={subject.code} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{subject.code}</p>
                      <p className="text-sm text-gray-600">{subject.name}</p>
                      <p className="text-xs text-gray-500 mt-1">Credits: {subject.credits}</p>
                    </div>
                    <select
                      value={grades[subject.code] || ''}
                      onChange={(e) => handleGradeChange(subject.code, e.target.value)}
                      className="w-full sm:w-32 px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Grade</option>
                      {gradePoints.map(gp => (
                        <option key={gp.grade} value={gp.grade}>
                          {gp.grade} ({gp.point})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedSemester > 0 && subjects.length > 0 && (
          <div className="flex gap-3">
            <button
              onClick={handleCalculateGPA}
              disabled={!allGradesSelected}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Calculate GPA
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-colors"
            >
              Reset
            </button>
          </div>
        )}

        {calculatedGPA !== null && (
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6 text-center">
            <p className="text-sm font-semibold text-blue-700 mb-2">Your GPA for Semester {selectedSemester}</p>
            <p className="text-4xl font-bold text-blue-900">{calculatedGPA.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
