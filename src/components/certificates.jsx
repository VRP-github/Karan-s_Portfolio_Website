import React, { useState } from 'react';
import certificateImage from '../assets/Cetificate_1.jpg';
import certificateImage2 from '../assets/Certificate_2.png'; 

function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Certificates Header Card */}
      <div className="relative w-full py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-12">
            <div className="bg-[#161B22] rounded-2xl p-6 sm:p-8 shadow-lg mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-bold text-white tracking-wide uppercase">
                CERTIFICATES
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Grid Section */}
      <div className="relative w-full py-6 sm:py-2 md:py-2 px-4">
        <div className="max-w-full mx-auto">
          {/* Certificates Grid - Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
            
            {/* First Certificate - Microsoft & LinkedIn Data Analysis */}
            <div className="bg-[#161B22] rounded-2xl p-6 border-2 border-transparent hover:border-[#8B5CF6] transition-all duration-300 group flex flex-col">
              <div 
                className="bg-gradient-to-br from-[#1A1D24] to-[#20252E] rounded-xl p-4 mb-4 h-48 flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => openModal({
                  image: certificateImage,
                  title: "Career Essentials in Data Analysis - Microsoft & LinkedIn",
                  alt: "Career Essentials in Data Analysis Certificate"
                })}
              >
                <img 
                  src={certificateImage}
                  alt="Career Essentials in Data Analysis Certificate"
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-white font-bebas tracking-wide text-xl mb-2">CAREER ESSENTIALS IN DATA ANALYSIS</h3>
                <p className="text-gray-400 text-sm mb-2 font-nunito">Microsoft & LinkedIn Learning Path</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed font-nunito">
                  Completed comprehensive learning path covering Data Analysis, PowerBI, Research, Business Intelligence, SQL, Python, and Excel skills.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">Data Analysis</span>
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">PowerBI</span>
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">Research</span>
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">Business</span>
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">SQL</span>
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">Excel</span>
                </div>
              </div>
              <a href="https://www.linkedin.com/learning/certificates/1296c9ae6067e75c2562ea5eb47f452470a6bacb9fb11a563ecad6e9ddbe7cc4" className="mt-auto text-center bg-[#8B5CF6] text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                View Credential
              </a>
            </div>

            {/* Second Certificate - Cisco Introduction to Data Science - NOW PURPLE */}
            <div className="bg-[#161B22] rounded-2xl p-6 border-2 border-transparent hover:border-[#8B5CF6] transition-all duration-300 group flex flex-col">
              <div 
                className="bg-gradient-to-br from-[#1A1D24] to-[#20252E] rounded-xl p-4 mb-4 h-48 flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => openModal({
                  image: certificateImage2,
                  title: "Introduction to Data Science - Cisco Networking Academy",
                  alt: "Introduction to Data Science Certificate"
                })}
              >
                <img 
                  src={certificateImage2}
                  alt="Introduction to Data Science Certificate"
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-white font-bebas tracking-wide text-xl mb-2">INTRODUCTION TO DATA SCIENCE</h3>
                <p className="text-gray-400 text-sm mb-2 font-nunito">Cisco Networking Academy</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed font-nunito">
                  Comprehensive introduction to data science fundamentals, covering data analysis techniques, Python programming, machine learning, and data validation methodologies.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">Data Analysis</span>
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">Machine Learning</span>
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">Data Collection</span>
                  <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded">Data Validation</span>
                </div>
              </div>
              <a href="https://www.credly.com/badges/cebb828a-ce4f-4426-861e-78bdbf40ea54/linked_in_profile" className="mt-auto text-center bg-[#8B5CF6] text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                View Credential
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full-Size Certificate Image */}
      {isModalOpen && selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-[#8B5CF6] transition-colors duration-300 z-10"
            >
              ✕
            </button>
            
            {/* Full-Size Certificate Image */}
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Modal Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <p className="text-white text-center font-bebas text-lg">
                {selectedCertificate.title}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
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

export default Certificates;
