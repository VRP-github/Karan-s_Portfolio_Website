import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'service_0x2i96l';
  const TEMPLATE_ID = 'template_gcxssss';
  const PUBLIC_KEY = 'wXu4R4NLA7qMOmJN7';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'virajpatel2399@gmail.com'
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Contact Section */}
      <div className="relative w-full py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-full mx-auto">
          {/* Contact Header Card */}
          <div className="text-center mb-12">
            <div className="bg-[#161B22] rounded-2xl p-6 sm:p-8 shadow-lg mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-bold text-white tracking-wide uppercase">
                CONTACT
              </h1>
            </div>
          </div>

          {/* Main Contact Card */}
          <div className="bg-purple-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Left Side - Get In Touch */}
              <div className="flex-1 text-black">
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas font-bold text-white tracking-wide">
                    Get In Touch
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed font-nunito text-white">
                    If you're looking to drive innovation and achieve your goals, don't hesitate to connect. Let's start our collaboration journey today!
                  </p>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="flex-1">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-nunito font-bold mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="w-full p-3 rounded-lg border-none bg-white text-black font-nunito focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-nunito font-bold mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full p-3 rounded-lg border-none bg-white text-black font-nunito focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-nunito font-bold mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="6" 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      className="w-full p-3 rounded-lg border-none bg-white text-black font-nunito resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="text-green-300 font-nunito text-center">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="text-red-300 font-nunito text-center">
                      Failed to send message. Please try again.
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-[#161B22] text-white px-6 py-3 rounded-lg font-nunito font-extrabold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Same as your original */}
      <div className="relative w-full py-2 sm:py-4 md:py-4 px-4">
        <div className="max-w-full mx-auto">
          <div className="bg-[#161B22] rounded-2xl sm:rounded-3xl p-2 sm:p-4 md:p-6 lg:p-8 mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 lg:gap-4">
              
              {/* Left Side - Open to Work */}
              <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="w-full lg:w-20 lg:h-20 xl:w-28 xl:h-28 relative">
                  <div className="flex items-center justify-center lg:absolute lg:inset-0">
                    <div className="text-white text-sm sm:text-base lg:text-lg xl:text-xl font-bold italic">
                      #opentowork!
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Text */}
              <div className="flex-1 text-left lg:text-right">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bebas font-bold text-gray-400 leading-tight mb-1 sm:mb-1">
                  Designing the <span className="text-purple-500">actionable</span>
                </h3>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bebas font-bold text-gray-400 leading-tight mb-1 sm:mb-1">
                  <span className="text-purple-500">strategies</span>
                </h3>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bebas font-bold text-gray-400 leading-tight mb-1 sm:mb-1">
                  that streamline <span className="text-purple-500">operations</span>
                </h3>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bebas font-bold text-gray-400 leading-tight mb-2 sm:mb-2">
                  <span className="text-purple-500">and boost</span> performance.
                </h3>
                <p className="text-gray-500 text-xs sm:text-xs font-nunito">
                  © 2025 Karan Parekh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
