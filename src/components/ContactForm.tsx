import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  department: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    department: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs.sendForm('service_iq99p9i', 'template_15b15xa', formRef.current, 'txO1xwbo1UwY24d-T')
        .then(() => {
          setSubmitted(true);
          setTimeout(() => {
            setFormData({ name: '', email: '', department: '', message: '' });
            setSubmitted(false);
          }, 3000);
        })
        .catch((error) => {
          alert('Failed to send message. Try again!');
        });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormValid = formData.name && formData.email && formData.department && formData.message;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="w-7 h-7 text-teal-600" />
        <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
      </div>
      {submitted ? (
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-300 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
              <Send className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-teal-900 mb-2">Thank You!</h3>
          <p className="text-teal-800">Your message has been received. We'll get back to you soon.</p>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <User className="w-4 h-4" /> Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Mail className="w-4 h-4" /> Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-semibold text-gray-700 mb-2">
              Department
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
              required
            >
              <option value="">Select your department</option>
              <option value="cse">Computer Science and Engineering</option>
              <option value="ece">Electronics and Communication Engineering</option>
              <option value="eee">Electrical and Electronics Engineering</option>
              <option value="mech">Mechanical Engineering</option>
              <option value="civil">Civil Engineering</option>
              <option value="it">Information Technology</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4" /> Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message, feedback, or suggestions..."
              rows={5}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      )}
      {/* Add Google Form link at the bottom */}
      <div className="mt-8 text-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJ7OQm5_FwP6aInNIhIAaT-CBdRDG2Nyx-jkuNr8oDvakMWQ/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 underline font-semibold"
        >
          Fill out Google Form
        </a>
      </div>
    </div>
  );
}
