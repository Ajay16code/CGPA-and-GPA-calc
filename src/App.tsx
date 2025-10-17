import { GraduationCap } from 'lucide-react';
import GPACalculator from './components/GPACalculator';
import CGPACalculator from './components/CGPACalculator';
import Classification from './components/Classification';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <GraduationCap className="w-12 h-12 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Anna University Regulation CGPA and GPA-21
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Calculate your semester GPA and overall CGPA with ease
          </p>
        </header>

        <div className="space-y-8">
          <GPACalculator />

          <div className="border-t-4 border-gray-200 my-8"></div>

          <CGPACalculator />

          <div className="border-t-4 border-gray-200 my-8"></div>

          <Classification />

          <div className="border-t-4 border-gray-200 my-8"></div>

          <ContactForm />
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Anna University Engineering Students - Regulation 21</p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
