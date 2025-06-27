import React from 'react';
import { FaReact, FaJs, FaCss3Alt, FaFigma } from 'react-icons/fa';

function Projects() {
  return (
    <div className="min-h-screen w-full bg-black">
      {/* Projects Header Card */}
      <div className="relative w-full py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-12">
            <div className="bg-[#161B22] rounded-2xl p-6 sm:p-8 shadow-lg mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-bold tracking-wide text-white  uppercase">
                PROJECTS
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="relative w-full py-6 sm:py-2 md:py-2 px-4">
        <div className="max-w-full mx-auto">
         
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
            {/* Portfolio Project */}
            <div className="bg-gradient-to-br bg-[#161B22] rounded-2xl p-6 border-2 border-[#D5FF3F] hover:border-[#D5FF3F] transition-all duration-300 group">
              <div className="bg-[#D5FF3F] rounded-xl p-4 mb-4 h-48 flex items-center justify-center">
                <span className="text-black font-bebas text-4xl font-bold">KARAN</span>
              </div>
              <h3 className="text-white font-bebas text-xl tracking-wide mb-2">PORTFOLIO</h3>
              <p className="text-gray-400 text-sm mb-2">Frontend</p>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Developed to showcase my skills in business analytics, my portfolio website exemplifies proficiency in data visualization and process optimization.
              </p>
              <div className="flex gap-2">
                <FaReact className="text-[#61DAFB] text-lg" />
                <FaJs className="text-[#F7DF1E] text-lg" />
                <FaCss3Alt className="text-[#1572B6] text-lg" />
                <FaFigma className="text-[#F24E1E] text-lg" />
              </div>
            </div>

            {/* Data Analytics Dashboard */}
            <div className="bg-gradient-to-br bg-[#161B22] rounded-2xl p-6 border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 mb-4 h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://finextraining.com/wp-content/uploads/2020/10/NISM.png" 
                  alt="NISM Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-white font-bebas text-xl tracking-wider mb-2">AWARENESS ABOUT NISM</h3>
              <p className="text-gray-400 text-sm mb-2">Machine Learning</p>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Comprehensive research report analyzing public awareness and impact of the National Institute of Securities Markets (NISM) in financial education and certification programs.
              </p>
            </div>

            {/* Process Automation Tool */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-6 border-2 border-gray-600 hover:border-purple-500 hover:shadow-lg hover:shadow-[#D5FF3F]/20 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[#2a2a2a] to-[#3a3a3a] rounded-xl p-4 mb-4 h-48 flex items-center justify-center overflow-hidden relative border-2 border-dashed border-gray-500">
                <div className="relative z-10 text-center text-gray-400">
                  <div className="text-6xl mb-4 opacity-50">⚡</div>
                  <div className="text-lg font-bold mb-2 text-white">More Projects</div>
                  <div className="text-sm opacity-80">Coming Soon...</div>
                  <div className="mt-4 w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </div>
              </div>
              <h3 className="text-white font-bebas text-xl tracking-wider mb-2">COMING SOON</h3>
              <p className="text-gray-400 text-sm mb-2">Future Projects</p>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Exciting new projects are in development. Stay tuned for innovative solutions in data analytics, business intelligence, and process automation.
              </p>
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

export default Projects;
