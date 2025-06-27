import { FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaFileDownload } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import resumePDF from '../assets/Karan Parekh_RESUME.pdf'; // Import the PDF

function About() {
  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Karan_Parekh_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full bg-black">
      {/* About Section */}
      <div className="relative w-full py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-full mx-auto">
          {/* About Header Card */}
          <div className="text-center mb-12">
            <div className="bg-[#161B22] rounded-2xl p-6 sm:p-8 shadow-lg mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-bold text-white tracking-wider uppercase">
                ABOUT
              </h1>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-[#161B22] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Left Side - Profile Image */}
              <div className="flex-shrink-0 lg:w-1/3">
                <div className="w-full max-w-sm mx-auto lg:mx-0">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D22AQFyuMmYSPTD7w/feedshare-shrink_1280/B4DZTh9cEeHYAs-/0/1738957767517?e=1752710400&v=beta&t=PmKkEX-kVeOqumY6VxeHm1ZE6elYio9WSMqmCDpt7lU" 
                    alt="Karan Parekh" 
                    className="w-full h-60 sm:h-66 md:h-[24rem] lg:h-[28rem] rounded-2xl object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 text-white">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg leading-relaxed font-nunito text-gray-300">
                    I'm a Business Analytics student passionate about transforming complex data into actionable business insights. My expertise lies in building data-driven solutions that enhance decision-making processes and drive organizational growth. I am currently focused on Power BI, SQL, Python, and advanced analytics, leveraging these tools to create comprehensive dashboards and predictive models. One of my notable projects involves developing automated reporting systems that have eliminated over 100 hours of manual effort while improving data accuracy across multiple departments.
                  </p>

                  <p className="text-base sm:text-lg leading-relaxed font-nunito text-gray-300">
                    I actively participate in business intelligence initiatives, data science competitions, and analytics workshops, mentoring others in data visualization and statistical analysis. I thrive in collaborative environments where cross-functional teams work together to solve complex business challenges. I'm always eager to work on impactful projects that challenge me to grow while contributing to meaningful business outcomes. Whether you're looking for a dedicated analyst, a strategic thinker, or a collaborative team member, I'm here to help transform your data into competitive advantages. Let's connect and create data-driven solutions together!
                  </p>

                  {/* Download Resume Button - Updated with onClick handler */}
                  <div className="pt-4">
                    <button 
                      onClick={handleResumeDownload}
                      className="bg-purple-500 text-white px-6 py-3 rounded-lg font-nunito font-extrabold hover:bg-purple-400 transition-colors flex items-center gap-2"
                    >
                      <FaFileDownload className="text-lg" />
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section Card */}
          <div className="mt-12">
            <div className="bg-[#161B22] rounded-2xl p-6 sm:p-8 shadow-lg mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
              <h2 className="text-2xl sm:text-3xl font-bebas font-bold text-white mb-8 text-center tracking-wider">
                Skills
              </h2>
              
              <div className="flex flex-wrap gap-8 justify-center">
                {/* Business Analytics Skills - All Purple with much bigger sizing */}
                <div className="px-8 py-6 bg-purple-500 rounded-xl flex items-center justify-center min-w-fit">
                  <span className="text-white font-bold text-lg whitespace-nowrap">Soft Skills</span>
                </div>
                <div className="px-8 py-6 bg-purple-500 rounded-xl flex items-center justify-center min-w-fit">
                  <span className="text-white font-bold text-lg whitespace-nowrap">AI Tools</span>
                </div>
                <div className="px-8 py-6 bg-purple-500 rounded-xl flex items-center justify-center min-w-fit">
                  <span className="text-white font-bold text-lg whitespace-nowrap">Documentation</span>
                </div>
                <div className="px-8 py-6 bg-purple-500 rounded-xl flex items-center justify-center min-w-fit">
                  <span className="text-white font-bold text-lg whitespace-nowrap">Product Tools</span>
                </div>
                <div className="px-8 py-6 bg-purple-500 rounded-xl flex items-center justify-center min-w-fit">
                  <span className="text-white font-bold text-lg whitespace-nowrap">MS Office & Excel</span>
                </div>
                <div className="px-8 py-6 bg-purple-500 rounded-xl flex items-center justify-center min-w-fit">
                  <span className="text-white font-bold text-lg whitespace-nowrap">Product Designing</span>
                </div>
                <div className="px-8 py-6 bg-purple-500 rounded-xl flex items-center justify-center min-w-fit">
                  <span className="text-white font-bold text-lg whitespace-nowrap">Analytics</span>
                </div>
                <div className="px-8 py-6 bg-purple-500 rounded-xl flex items-center justify-center min-w-fit">
                  <span className="text-white font-bold text-lg whitespace-nowrap">Security Tools</span>
                </div>
                <div className="px-8 py-6 bg-purple-500 rounded-xl flex items-center justify-center min-w-fit">
                  <span className="text-white font-bold text-lg whitespace-nowrap">Data Science</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="mt-12">
            <div className="bg-[#161B22] rounded-2xl p-6 sm:p-8 shadow-lg mx-2 sm:mx-4 md:mx-8 lg:mx-[100px]">
              <h2 className="text-2xl sm:text-3xl font-bebas font-bold text-white mb-8 text-center tracking-wider">
                Socials
              </h2>
              <div className="flex justify-center gap-6 text-3xl">
                <a href="https://www.instagram.com/_karan.parekh/profilecard/?igsh=MWZ4Z3N4c2V4MWdyYw== " target="_blank" rel="noreferrer" className="text-yellow-500 hover:text-yellow-400 transition flex items-center justify-center">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/karan-parekh-13819b175" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-500 transition flex items-center justify-center">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/KaranParekh9" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300 transition flex items-center justify-center">
                  <FaGithub />
                </a>
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

export default About;
