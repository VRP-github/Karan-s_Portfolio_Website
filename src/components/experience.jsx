import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaFileDownload, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import DPA from '../assets/dpa logo.jpeg.jpg';

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "BNY (Bank of New York Mellon)",
      position: "Senior Analyst / Associate, Business Development Support",
      duration: "Mar 2023 - Jan 2025",
      location: "Pune, MH, India",
      type: "Full-time",
      logo: "https://thedigitalbanker.com/wp-content/uploads/2024/06/BNY.png",
      description: "Led cross-functional RFP and due diligence initiatives for BNY Investments' North American funds ($360.5B AUM), collaborating with legal, finance, product, and portfolio teams to define business requirements, align strategic initiatives, and manage complex stakeholder expectations.",
      achievements: [
        "Managed RFP initiatives for $360.5B AUM North American funds",
        "Saved over 100 manual hours through automation implementation",
        "Enhanced operational efficiency across investment analysis and compliance",
        "Enabled real-time insights through data-driven dashboard solutions"
      ],
      technologies: ["RocketDocs", "Seismic", "Power BI", "Fund Attribution Models", "Automated Pipelines"],
      category: "work"
    },
    {
      id: 2,
      company: "Decimal Point Analytics",
      position: "Research Analyst",
      duration: "Sep 2021 - Oct 2022",
      location: "Nashik, MH, India",
      type: "Full-time",
      logo: DPA,
      description: "Streamlined financial data operations by designing and automating data pipelines using SSIS, SQL, Python, and VBA, reducing manual effort by over 100 hours and enhancing data accuracy and efficiency across ETF and mutual fund analysis. Drove data-centric financial analysis and reporting through Power BI, VBA macros, and RPA, enabling strategic insights into investment trends, risk assessment, and portfolio performance while leading end-to-end project execution and stakeholder engagement.",
      achievements: [
        "Reduced manual data processing effort by over 100 hours through automation",
        "Enhanced data accuracy and efficiency across ETF and mutual fund analysis",
        "Led end-to-end project execution and stakeholder engagement initiatives",
        "Enabled strategic insights into investment trends and risk assessment"
      ],
      technologies: ["SSIS", "SQL", "Python", "VBA", "Power BI", "RPA"],
      category: "work"
    },
    {
      id: 3,
      company: "OnScreen Technology Private Limited",
      position: "Business Analyst",
      duration: "May 2019 - Aug 2021",
      location: "India",
      type: "Full-time",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUGugyeJJCyySNmA-uq0sR4Sfo68W4p_O1w&s",
      description: "Bridged cross-functional teams by partnering with customer-facing units, Finance, Sales, Product, and Engineering to align technology initiatives with business goals—ensuring seamless customer experiences and efficient system enhancements. Participated in planning, prioritization, and execution phases, including UAT and stakeholder feedback loops.",
      achievements: [
        "Aligned technology initiatives with business goals across multiple departments",
        "Improved reporting accuracy through data analysis and root cause assessments",
        "Optimized internal systems and contributed to company growth",
        "Enhanced custom inventory management interface based on user testing insights"
      ],
      technologies: ["SQL", "Data Analysis Tools", "UAT", "Inventory Management Systems"],
      category: "work"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black pt-4">
      {/* Experience Header */}
      <div className="relative w-full py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-full mx-auto">
          {/* Header Card */}
          <div className="text-center mb-12">
            <div className="bg-[#161B22] rounded-2xl p-6 sm:p-8 shadow-lg mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-bold text-white tracking-wider uppercase">
                EXPERIENCE
              </h1>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="bg-[#161B22] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  
                  {/* Left Side - Company Info */}
                  <div className="flex-shrink-0 lg:w-1/3">
                    <div className="space-y-4">
                      <div className="bg-purple-500 rounded-xl p-4 text-center">
                        {/* Company Logo */}
                        {exp.logo && (
                          <div className="flex justify-center mb-3">
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className="w-12 h-12 rounded-lg object-contain bg-white p-1"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                        <h3 className="text-xl sm:text-2xl font-bebas text-white tracking-wider mb-2">
                          {exp.company}
                        </h3>
                        <p className="text-white font-nunito font-bold text-sm">
                          {exp.position}
                        </p>
                      </div>
                      
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-purple-500" />
                          <span className="font-nunito text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-purple-500" />
                          <span className="font-nunito text-sm">{exp.location}</span>
                        </div>
                        <div className="inline-block bg-gray-700 px-3 py-1 rounded-full">
                          <span className="font-nunito text-xs text-white">{exp.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Experience Details */}
                  <div className="flex-1 text-white">
                    <div className="space-y-6">
                      {/* Description */}
                      <div>
                        <h4 className="text-lg font-bebas tracking-wide text-purple-500 mb-3">
                          ROLE OVERVIEW
                        </h4>
                        <p className="text-base sm:text-lg leading-relaxed font-nunito text-gray-300">
                          {exp.description}
                        </p>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-lg font-bebas tracking-wide text-purple-500 mb-3">
                          KEY ACHIEVEMENTS
                        </h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-base font-nunito text-gray-300">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-bebas tracking-wide text-purple-500 mb-3">
                          TECHNOLOGIES USED
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-gray-700 px-3 py-1 rounded-full text-sm font-nunito text-white">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Timeline Summary */}
          <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="bg-[#161B22] rounded-2xl p-6 sm:p-8 shadow-lg mx-2 sm:mx-4 md:mx-8 lg:mx-[100px] mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bebas font-bold tracking-wider text-white mb-8 text-center">
                Career Journey
              </h2>
              
              {/* Stats Section */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center mb-8 md:mb-12 lg:mb-16">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">5+</span>
                  </div>
                  <p className="text-gray-300 font-nunito">Years of Experience</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">10+</span>
                  </div>
                  <p className="text-gray-300 font-nunito">Projects Completed</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">12+</span>
                  </div>
                  <p className="text-gray-300 font-nunito">Technologies Mastered</p>
                </div>
              </div>

              {/* Responsive Timeline Visualization */}
              <div className="relative mt-6 md:mt-8 lg:mt-12">
                <h3 className="text-xl font-bebas tracking-wider text-purple-500 mb-6 md:mb-8 lg:mb-12 text-center">
                  EXPERIENCE TIMELINE
                </h3>
                
                {/* Desktop/Tablet Timeline (Horizontal) */}
                <div className="hidden md:block mb-8 lg:mb-12">
                  <div className="relative overflow-x-auto pb-8">
                    <div className="flex items-center justify-between min-w-full px-8 relative mt-4 md:mt-6 lg:mt-8">
                      
                      {/* Horizontal Timeline Line with responsive margins */}
                      <div className="absolute top-1/2 left-8 right-8 h-1 bg-purple-500 transform -translate-y-1/2 z-0"></div>
                      
                      {/* Timeline Items with added spacing */}
                      {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative flex flex-col items-center z-10 flex-1 px-4">
                          
                          {/* Company Info Card - Above Timeline with responsive margins */}
                          <div className="mb-6 md:mb-8 lg:mb-10 w-full max-w-xs">
                            <div className="bg-gray-800 rounded-lg p-4 shadow-lg text-center">
                              <h4 className="font-bebas tracking-wide text-white text-lg mb-1">
                                {exp.company}
                              </h4>
                              <p className="text-purple-400 font-nunito font-semibold text-sm mb-2">
                                {exp.position}
                              </p>
                              <p className="text-gray-400 font-nunito text-xs mb-3">
                                {exp.location}
                              </p>
                              <div className="flex flex-wrap gap-1 justify-center">
                                {exp.technologies.slice(0, 3).map((tech, idx) => (
                                  <span key={idx} className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-nunito">
                                    {tech}
                                  </span>
                                ))}
                                {exp.technologies.length > 3 && (
                                  <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-nunito">
                                    +{exp.technologies.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Timeline Icon with responsive spacing */}
                          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center border-4 border-black mb-6 md:mb-8 lg:mb-10 relative z-10">
                            <FaBriefcase className="text-white text-lg" />
                          </div>

                          {/* Date Card - Below Timeline with responsive margins */}
                          <div className="w-full max-w-xs mt-2 md:mt-4">
                            <div className="bg-gray-700 rounded-lg p-3 text-center">
                              <p className="text-white font-nunito font-bold text-sm mb-1">
                                {exp.duration}
                              </p>
                              <p className="text-gray-300 font-nunito text-xs">
                                {exp.type}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline (Vertical) */}
                <div className="block md:hidden mb-8">
                  <div className="relative mt-4">
                    {/* Vertical Timeline Line with margin adjustments */}
                    <div className="absolute left-6 top-4 bottom-0 w-1 bg-purple-500 z-0"></div>
                    
                    {/* Timeline Items with responsive spacing */}
                    <div className="space-y-6 sm:space-y-8 pt-4">
                      {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative flex items-start pl-16 mb-4">
                          
                          {/* Timeline Icon with adjusted positioning */}
                          <div className="absolute left-2 top-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center border-2 border-black z-10">
                            <FaBriefcase className="text-white text-xs" />
                          </div>

                          {/* Content Card with responsive margins */}
                          <div className="flex-1 mt-2">
                            <div className="bg-gray-800 rounded-lg p-4 shadow-lg mb-4">
                              <div className="mb-3">
                                <h4 className="font-bebas font-bold text-white text-lg mb-1">
                                  {exp.company}
                                </h4>
                                <p className="text-purple-400 font-nunito font-semibold text-sm mb-1">
                                  {exp.position}
                                </p>
                                <p className="text-gray-400 font-nunito text-xs mb-2">
                                  {exp.duration} • {exp.location}
                                </p>
                              </div>
                              
                              {/* Technologies for Mobile */}
                              <div className="flex flex-wrap gap-1 mb-3">
                                {exp.technologies.slice(0, 2).map((tech, idx) => (
                                  <span key={idx} className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-nunito">
                                    {tech}
                                  </span>
                                ))}
                                {exp.technologies.length > 2 && (
                                  <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-nunito">
                                    +{exp.technologies.length - 2}
                                  </span>
                                )}
                              </div>

                              {/* Type Badge */}
                              <div className="inline-block bg-gray-700 px-2 py-1 rounded-full">
                                <span className="font-nunito text-xs text-white">{exp.type}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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

export default Experience;
