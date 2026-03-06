import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import consultationImg from "../../assets/consultation_img.png";
import { User, Phone, Mail, MapPin,  Wrench, Calendar, Clock, MessageSquare, Headset, File } from 'lucide-react';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

export function ConsultationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    location: '',
    propertyType: '',
    serviceRequired: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.fullName || !formData.mobile || !formData.email || !formData.location || !formData.date || !formData.time) {
    toast.error('Please fill in all required fields');
    return;
  }

  try {
    await emailjs.send(
      'service_dqu250w',       // ← replace
      'template_yve8sag',      // ← replace
      {
        from_name: formData.fullName,
        mobile: formData.mobile,
        email: formData.email,
        location: formData.location,
        service: formData.serviceRequired || 'Not specified',
        date: formData.date,
        time: formData.time,
        message: formData.message || 'No message',
      },
      'GVVUjJ1llIYUGrqQH'        // ← replace
    );

    toast.success('Consultation booked successfully! Our team will contact you soon.');
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      location: '',
      propertyType: '',
      serviceRequired: '',
      date: '',
      time: '',
      message: '',
    });

  } catch (error) {
    console.error('EmailJS error:', error);
    toast.error('Failed to send. Please try again.');
  }
};

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#333] mb-6">
                Schedule a Free <br /><span className="text-[#6cc93e]">Solar Consultation</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Book a convenient time to speak with our solar experts and get personalized guidance for your energy needs.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img 
                src={consultationImg} 
                alt="Solar consultation" 
                className="w-100 h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-linear-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">How it Works</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-16">
            {/* Step 1 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#6cc93e] to-[#35631f] flex items-center justify-center shrink-0">
                <Calendar className="w-7 h-7 text-[#ffffff]" />
              </div>
              <div>
                <p className="text-xl font-medium text-black">Choose a</p>
                <p className="text-xl font-medium text-black">date & time</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-4xl text-gray-400">→</div>

            {/* Step 2 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#6cc93e] to-[#35631f] flex items-center justify-center shrink-0">
                <File className="w-7 h-7 text-[#ffffff]" />
              </div>
              <div>
                <p className="text-xl font-medium text-black">Share your</p>
                <p className="text-xl font-medium text-black">requirements</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-4xl text-gray-400">→</div>

            {/* Step 3 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#6cc93e] to-[#35631f] flex items-center justify-center shrink-0">
                <Headset className="w-7 h-7 text-[#ffffff]" />
              </div>
              <div>
                <p className="text-xl font-medium text-black">Our expert</p>
                <p className="text-xl font-medium text-black">contacts you</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold text-black mb-8">Pick a Date & Time</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Mobile */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-gray-300 bg-opacity-50 rounded-l-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full h-12 pl-16 pr-4 bg-[#f3f8f3] border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6cc93e]"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-gray-300 bg-opacity-50 rounded-l-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full h-12 pl-16 pr-4 bg-[#f3f8f3] border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6cc93e]"
                    required
                  />
                </div>
              </div>

              {/* Email and Location */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-gray-300 bg-opacity-50 rounded-l-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-600" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full h-12 pl-16 pr-4 bg-[#f3f8f3] border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6cc93e]"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-gray-300 bg-opacity-50 rounded-l-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    className="w-full h-12 pl-16 pr-4 bg-[#f3f8f3] border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6cc93e]"
                    required
                  />
                </div>
              </div>

              
              {/* Service Required */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gray-300 bg-opacity-50 rounded-l-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-gray-600" />
                </div>
                <select
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className="w-full h-12 pl-16 pr-4 bg-[#f3f8f3] border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6cc93e] appearance-none cursor-pointer"
                >
                  <option value="">Service Required</option>
                  <option value="On-Grid Solar System">On-Grid Solar System</option>
                  <option value="Off-Grid Solar System">Off-Grid Solar System</option>
                  <option value="Hybrid Solar System">Hybrid Solar System</option>
                  <option value="Solar Water Heater">Solar Water Heater</option>
                  <option value="Industrial Solar Plant">Industrial Solar Plant</option>
                  <option value="EPC Work">EPC Work</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-gray-300 bg-opacity-50 rounded-l-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-gray-600" />
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full h-12 pl-16 pr-4 bg-[#f3f8f3] border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6cc93e]"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-gray-300 bg-opacity-50 rounded-l-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gray-600" />
                  </div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full h-12 pl-16 pr-4 bg-[#f3f8f3] border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6cc93e]"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-12 h-24 bg-gray-300 bg-opacity-50 rounded-l-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-gray-600" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message (Optional)"
                  // rows={3}
                  className="w-full pl-16 pr-4 py-3 h-24 bg-[#f3f8f3] border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6cc93e] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-14 bg-[#fecd3f] hover:bg-[#fdd835] text-black font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Confirm Appointment
              </button>

              <p className="text-center text-gray-600 text-sm">
                Our Team will call you at the selected time slot.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
