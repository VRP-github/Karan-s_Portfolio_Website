import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBookOpen, FaChartLine } from "react-icons/fa";
import DBS from '../assets/dbs logo.png';

function Education() {
  const formalEducation = [
    {
      id: 1,
      institution: "Dublin Business School",
      degree: "Master of Science in Business Analytics",
      duration: "2025 - 2026",
      location: "Dublin, Ireland",
      type: "Full-time",
      logo: DBS,
      gpa: "",
      description: "Advanced program focusing on business analytics, machine learning, and data-driven decision making. Developing expertise in analytical tools and techniques to solve complex business problems through data insights.",
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "Data Visualization",
        "Data Mining",
        "Business Intelligence",
        "Programming for Analytics",
        "Business Strategy",
        "SQL",
        "Project Management",
        "Financial Analytics"
      ],
      category: "graduate"
    },
    {
      id: 2,
      institution: "K J Somaiya College of Arts and Commerce",
      degree: "Bachelor in Financial Market",
      duration: "2016 - 2019",
      location: "Mumbai, India",
      type: "Full-time",
      logo: "https://bharateducation.org/logos/626-logo1628315919.png",
      gpa: "",
      description: "Comprehensive program in financial markets, investment analysis, and corporate finance. Gained deep understanding of equity markets, debt instruments, and financial risk management with practical applications in the Indian financial sector.",
      coursework: [
        "Equity Market",
        "Debt Market",
        "Foreign Exchange Market",
        "Business Economics",
        "Mutual Fund Management",
        "Business Statistics",
        "Corporate Finance",
        "Financial Accounting",
        "Risk Management",
        "Corporate Governance"
      ],
      category: "undergraduate"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black pt-4">
      {/* Education Header */}
      <div className="relative w-full py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-full mx-auto">
          {/* Simple Header Card - No Animation Effects */}
          <div className="text-center mb-12">
            <div className="bg-[#161B22] rounded-2xl p-6 sm:p-8 shadow-lg mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-bold text-white tracking-wide uppercase">
                EDUCATION
              </h1>
              <p className="text-gray-400 font-nunito text-lg mt-4">
                Building Knowledge, Shaping the Future
              </p>
            </div>
          </div>

          {/* Formal Education Section - No Tabs */}
          <div className="space-y-8">
            {formalEducation.map((edu, index) => (
              <div key={edu.id} className="bg-[#161B22] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
                <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                  
                  {/* Left Side - Institution Info */}
                  <div className="flex-shrink-0 xl:w-1/3">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 text-center relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-2 right-2 w-4 h-4 bg-white bg-opacity-20 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-3 h-3 bg-white bg-opacity-30 rounded-full"></div>
                        
                        {/* Institution Logo */}
                        {edu.logo && (
                          <div className="flex justify-center mb-4">
                            <img 
                              src={edu.logo} 
                              alt={`${edu.institution} logo`}
                              className="w-16 h-16 rounded-xl object-contain bg-white p-2 shadow-lg"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                        <h3 className="text-xl sm:text-2xl font-bebas tracking-wider text-white mb-3">
                          {edu.institution}
                        </h3>
                        <p className="text-white font-nunito font-bold text-sm mb-2">
                          {edu.degree}
                        </p>
                        {edu.gpa && (
                          <div className="bg-white bg-opacity-20 rounded-full px-3 py-1 inline-block">
                            <span className="text-white font-nunito text-sm font-bold">GPA: {edu.gpa}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-center gap-3">
                          <FaCalendarAlt className="text-purple-500" />
                          <span className="font-nunito text-sm">{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaMapMarkerAlt className="text-purple-500" />
                          <span className="font-nunito text-sm">{edu.location}</span>
                        </div>
                        <div className="inline-block bg-gray-700 px-3 py-1 rounded-full">
                          <span className="font-nunito text-xs text-white">{edu.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Education Details */}
                  <div className="flex-1 text-white">
                    <div className="space-y-8">
                      {/* Description */}
                      <div>
                        <h4 className="text-lg font-bebas tracking-wide text-purple-500 mb-3 flex items-center gap-2">
                          <FaBookOpen />
                          PROGRAM OVERVIEW
                        </h4>
                        <p className="text-base sm:text-lg leading-relaxed font-nunito text-gray-300">
                          {edu.description}
                        </p>
                      </div>

                      {/* Key Coursework */}
                      <div>
                        <h4 className="text-lg font-bebas tracking-wide text-purple-500 mb-4 flex items-center gap-2">
                          <FaChartLine />
                          KEY COURSEWORK
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.coursework.map((course, idx) => (
                            <div key={idx} className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors">
                              <p className="text-sm font-nunito text-gray-300">{course}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Stats Summary */}
          <div className="mt-12">
            <div className="bg-[#161B22] rounded-2xl p-6 sm:p-8 shadow-lg mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
              <h2 className="text-2xl sm:text-3xl font-bebas font-bold tracking-wide text-white mb-8 text-center">
                Academic Achievements
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">2</div>
                  <p className="text-gray-300 font-nunito text-sm">Degrees</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <FaBookOpen className="text-white text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">20+</div>
                  <p className="text-gray-300 font-nunito text-sm">Core Subjects</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">6+</div>
                  <p className="text-gray-300 font-nunito text-sm">Years of Study</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative w-full py-2 sm:py-4 md:py-4 px-4">
        <div className="max-w-full mx-auto">
          <div className="bg-[#161B22] rounded-2xl sm:rounded-3xl p-2 sm:p-4 md:p-6 lg:p-8 mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 lg:gap-4">
              
              <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="w-full lg:w-20 lg:h-20 xl:w-28 xl:h-28 relative">
                  <div className="flex items-center justify-center lg:absolute lg:inset-0">
                    <div className="text-white text-sm sm:text-base lg:text-lg xl:text-xl font-bold italic">
                      #lifelonglearner
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-left lg:text-right">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bebas font-bold text-gray-400 leading-tight mb-1 sm:mb-1">
                  Transforming <span className="text-purple-500">knowledge</span>
                </h3>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bebas font-bold text-gray-400 leading-tight mb-1 sm:mb-1">
                  into <span className="text-purple-500">innovation</span>
                </h3>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bebas font-bold text-gray-400 leading-tight mb-1 sm:mb-1">
                  through continuous <span className="text-purple-500">learning</span>
                </h3>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bebas font-bold text-gray-400 leading-tight mb-2 sm:mb-2">
                  <span className="text-purple-500">and growth</span>.
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

export default Education;
