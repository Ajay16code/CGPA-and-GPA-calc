import { Award } from 'lucide-react';

export default function Classification() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-7 h-7 text-amber-600" />
        <h2 className="text-2xl font-bold text-gray-800">Classification of the Degree Awarded</h2>
      </div>

      <div className="space-y-4">
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-600 rounded-lg p-5">
          <h3 className="font-bold text-amber-900 text-lg mb-2">First Class with Distinction</h3>
          <p className="text-amber-800">
            CGPA ≥ 8.50 with no history of arrears throughout the program
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-lg p-5">
          <h3 className="font-bold text-blue-900 text-lg mb-2">First Class</h3>
          <p className="text-blue-800">
            CGPA ≥ 6.50
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-600 rounded-lg p-5">
          <h3 className="font-bold text-gray-900 text-lg mb-2">Second Class</h3>
          <p className="text-gray-800">
            CGPA {'<'} 6.50
          </p>
        </div>

        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-800 font-medium text-center">
            <span className="font-bold">Disclaimer:</span> This is only for reference. The results displayed in the official marksheet are final.
          </p>
        </div>
      </div>
    </div>
  );
}
