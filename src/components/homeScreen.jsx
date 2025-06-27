import { FaLinkedin, FaGithub, FaReact, FaJs, FaCss3Alt, FaFigma, FaInstagram, FaYoutube, FaTelegram, FaDownload, FaEye } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import professionalPhoto from '../assets/professional-photo.jpg';
import resumePDF from '../assets/Karan Parekh_RESUME.pdf';

function Home() {
  const navigate = useNavigate();
  
  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToProjects = () => {
    navigate('/project');
  };

  const navigateToExperience = () => {
    navigate('/experience');
  };

  const navigateToContact = () => {
    navigate('/contact');
  };

  // Add this function for resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Karan_Parekh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Hero Section - Split Layout */}
      <div className="relative min-h-screen w-full font-sans overflow-hidden">
        
        {/* Grid texture overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(#1d1d1d33_1px,_transparent_1px),linear-gradient(90deg,#1d1d1d33_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />
        
        {/* Responsive container with proper padding */}
        <div className="flex flex-col lg:flex-row min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[120px] relative z-10 gap-6 lg:gap-12">
          
          {/* Left Side - Content */}
          <div className="flex-1 flex flex-col justify-center py-8 lg:py-0 space-y-6">
            <p className="text-xs sm:text-sm md:text-base font-nunito font-bold tracking-widest uppercase text-purple-500">
              HI, I'M
            </p>
            
            <div className="space-y-4">
              <h1 className="text-[50px] xs:text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-bebas tracking-normal leading-none text-white">
                KARAN
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-nunito leading-relaxed max-w-none lg:max-w-2xl">
                During these <span className="text-purple-500 font-bold">5 years</span> as <span className="text-purple-500 font-bold">Business Analyst</span>.  In my roles I've harnessed tools like Power BI, SQL, and process automation to eliminate over 100 hours of manual effort, enhance data accuracy, and enable smarter, faster decision-making.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={handleResumeDownload}
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-nunito font-semibold hover:bg-purple-600 transition flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <FaDownload />
                Download CV
              </button>
              <button 
                onClick={navigateToExperience}
                className="border border-purple-500 text-white px-6 py-3 rounded-lg font-nunito font-semibold hover:bg-purple-500 hover:text-white transition flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <FaEye />
                See experiences
              </button>
            </div>

            <div className="flex gap-6 text-2xl text-purple-500 pt-4">
              <a href="https://www.linkedin.com/in/karan-parekh-13819b175/" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition">
                <FaLinkedin />
              </a>
              <a href="https://github.com/KaranParekh9" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Side - Circular Photo */}
          <div className="flex-1 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0 px-4 sm:px-0">
            <div className="relative">
              {/* Gradient Background - circular glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/40 via-blue-500/30 to-cyan-400/40 blur-3xl scale-110 rounded-full"></div>
              
              {/* Main Circular Container with Gradient Border - Responsive sizes */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={professionalPhoto}
                    alt="Karan Parekh - Business Analyst" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Decorative Elements - responsive positioning */}
              <div className="absolute -top-4 sm:-top-6 lg:-top-8 -left-4 sm:-left-6 lg:-left-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 border-purple-400/20 rounded-full"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-6 sm:-left-8 lg:-left-12 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-cyan-400/20 rounded-full animate-bounce"></div>
              <div className="absolute top-6 sm:top-8 lg:top-12 -right-6 sm:-right-8 lg:-right-12 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 border border-blue-400/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your existing sections remain the same... */}
      {/* About Section */}
      <div className="relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[120px]">
        <div className="max-w-full mx-auto">
          <div className="bg-purple-500 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bebas font-bold text-center mb-6 sm:mb-8 md:mb-12 tracking-wider uppercase">
              ABOUT
            </h2>
            
            <div className="max-w-full">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-nunito leading-relaxed text-justify">
                Hi, I'm Karan Parekh—a Business Analyst with over 5 years of experience translating business challenges into impactful data-driven solutions across investment management and financial services. My portfolio showcases how I've harnessed tools like Power BI, SQL, and process automation to eliminate over 100 hours of manual effort, enhance data accuracy, and enable smarter, faster decision-making. From building real-time dashboards and optimizing proposal workflows to leading cross-functional collaborations and driving process innovation, I specialize in turning insights into outcomes that matter.
              </p>
              
              <div className="flex justify-center sm:justify-end mt-6 sm:mt-8">
                <button 
                  onClick={navigateToAbout}
                  className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-nunito font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="relative w-full py-6 sm:py-12 md:py-14 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[120px]">
        <div className="max-w-full mx-auto">
          {/* Title Card */}
          <div className="bg-[#161B22] rounded-2xl p-6 sm:p-8 shadow-lg mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bebas font-bold text-white tracking-wider">
                Recent Projects
              </h2>
              <button 
                onClick={navigateToProjects}
                className="text-white hover:text-purple-500 transition text-sm sm:text-base font-nunito flex items-center gap-2"
              >
                See all →
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Portfolio Project */}
            <div className="bg-[#161B22] rounded-2xl p-4 sm:p-6 border-2 border-[#D5FF3F] hover:border-[#D5FF3F] transition-all duration-300 group">
              <div className="bg-[#D5FF3F] rounded-xl p-4 mb-4 h-32 sm:h-40 lg:h-48 flex items-center justify-center">
                <span className="text-black font-bebas text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider">KARAN</span>
              </div>
              <h3 className="text-white font-bebas text-lg sm:text-xl tracking-wider mb-2">Portfolio</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Frontend</p>
              <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                Developed to showcase my skills in business analytics, my portfolio website exemplifies proficiency in data visualization and process optimization.
              </p>
              <div className="flex gap-2">
                <FaReact className="text-[#61DAFB] text-sm sm:text-lg" />
                <FaJs className="text-[#F7DF1E] text-sm sm:text-lg" />
                <FaCss3Alt className="text-[#1572B6] text-sm sm:text-lg" />
                <FaFigma className="text-[#F24E1E] text-sm sm:text-lg" />
              </div>
            </div>

            {/* Data Analytics Dashboard */}
            <div className="bg-[#161B22] rounded-2xl p-4 sm:p-6 border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 mb-4 h-32 sm:h-40 lg:h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://finextraining.com/wp-content/uploads/2020/10/NISM.png" 
                  alt="NISM Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-white font-bebas text-lg sm:text-xl tracking-wider mb-2">Awareness about NISM</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Machine Learning</p>
              <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                Comprehensive research report analyzing public awareness and impact of the National Institute of Securities Markets (NISM) in financial education and certification programs.
              </p>
            </div>

            {/* Process Automation Tool */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-4 sm:p-6 border-2 border-gray-600 hover:border-purple-500 hover:shadow-lg hover:shadow-[#D5FF3F]/20 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[#2a2a2a] to-[#3a3a3a] rounded-xl p-4 mb-4 h-32 sm:h-40 lg:h-48 flex items-center justify-center overflow-hidden relative border-2 border-dashed border-gray-500">
                <div className="relative z-10 text-center text-gray-400">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 opacity-50">⚡</div>
                  <div className="text-sm sm:text-base lg:text-lg font-bold mb-2 text-white">More Projects</div>
                  <div className="text-xs sm:text-sm opacity-80 tracking-wider">Coming Soon...</div>
                  <div className="mt-4 w-12 sm:w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </div>
              </div>
              <h3 className="text-white font-bebas text-lg sm:text-xl tracking-wider mb-2">Coming Soon</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">Future Projects</p>
              <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                Exciting new projects are in development. Stay tuned for innovative solutions in data analytics, business intelligence, and process automation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[120px]">
        <div className="max-w-full mx-auto">
          <div className="bg-purple-500 text-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex-1">
                <h2 className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-bebas font-bold mb-4 tracking-wider">
                  Get in Touch
                </h2>
                <p className="text-sm text-white sm:text-base md:text-lg font-nunito leading-relaxed max-w-2xl">
                  If you're looking to drive innovation and achieve your goals, don't hesitate to connect. Let's start our collaboration journey today!
                </p>
              </div>
              
              <div className="flex flex-col items-start lg:items-end gap-4">
                <div className="text-sm text-white sm:text-base font-nunito font-bold">
                  Follow me on
                </div>
                <div className="flex gap-4 text-2xl">
                  <a href="https://www.instagram.com/_karan.parekh/profilecard/?igsh=MWZ4Z3N4c2V4MWdyYw== " target="_blank" rel="noreferrer" className="hover:opacity-70 transition text-white">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/karan-parekh-13819b175" target="_blank" rel="noreferrer" className="hover:opacity-70 transition text-white">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/KaranParekh9" target="_blank" rel="noreferrer" className="hover:opacity-70 transition text-white">
                    <FaGithub />
                  </a>
                </div>
                <button 
                onClick={navigateToContact}
                className="bg-black text-white px-4 sm:px-8 py-2 sm:py-2 rounded-lg font-nunito font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base flex items-center gap-2 mt-2">
                  Contact Me <FaTelegram />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative w-full py-2 sm:py-4 md:py-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[120px]">
        <div className="max-w-full mx-auto">
          <div className="bg-[#161B22] rounded-2xl sm:rounded-3xl p-2 sm:p-4 md:p-6 lg:p-8">
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

export default Home;
