import React from "react";

function WhoCanUsePlatform() {
  return (
    <div
      className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 relative"
      style={{
        background: "#272EA7",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Main CTA Card */}
        <div
          className="bg-[#272EA7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative "
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* Content Container */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div
                className="space-y-3 lg:space-y-4"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  Who can use Our
                  <span className="text-[#9096F8]">
                    Platform<span className="text-[#03C800]">.</span>
                  </span>
                </h2>

                <p
                  className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="600"
                >
                  Cosmicforge HealthNet connects every part of the healthcare
                  process. Patients, doctors, labs, pharmacies, and medical tour
                  partners work on one secure platform. Each role has tools
                  designed for efficiency, trust, and better outcomes. We focus
                  on practical workflows that make care accessible and reliable.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="800"
              >
                <a
                  target="_blank"
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 sm:px-8 lg:px-[40px] py-3 sm:py-[14px] rounded-sm font-semibold hover:bg-white/30 transition-all duration-300 text-center text-sm sm:text-base"
                  // href="https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=doctor"
                  data-aos="slide-right"
                  data-aos-duration="500"
                  data-aos-delay="1000"
                >
                  Doctors
                </a>
                <a
                  target="_blank"
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 sm:px-8 lg:px-[40px] py-3 sm:py-[14px] rounded-sm font-semibold hover:bg-white/30 transition-all duration-300 text-center text-sm sm:text-base"
                  // href="https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=patient"
                  data-aos="slide-left"
                  data-aos-duration="500"
                  data-aos-delay="1100"
                >
                  Patients
                </a>
              </div>
            </div>

            {/* Right Statistics */}
            <div
              className="space-y-6 lg:space-y-8 "
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <h1 className="hidden md:block absolute -right-2.5 -bottom-64 z-2 lg:text-right font-bold text-[50px] md:text-[450px] opacity-100! text-white/50">
                ?
              </h1>
              <h1 className="hidden md:block absolute right-40 -bottom-72 z-10 lg:text-right font-bold text-[50px] md:text-[390px] opacity-100! text-white/50">
                ?
              </h1>
              {/* Application Users Stat */}
              {/* <div
                className="text-center lg:text-right"
                data-aos="flip-left"
                data-aos-duration="600"
                data-aos-delay="700"
              >
                <div className="flex items-end justify-center lg:justify-end gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                    1
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
                    k
                  </span>
                </div>
                <p className="text-blue-200 text-sm sm:text-base lg:text-lg">
                  Application Users
                </p>
              </div> */}

              {/* Growth Stat */}
              {/* <div
                className="text-center lg:text-right"
                data-aos="flip-left"
                data-aos-duration="600"
                data-aos-delay="900"
              >
                <div className="flex items-end justify-center lg:justify-end gap-1 mb-1 sm:mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                    80
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
                    %
                  </span>
                </div>
                <p className="text-blue-200 text-sm sm:text-base lg:text-lg">
                  Growth
                </p>
              </div> */}

              {/* Doctors Joined Stat */}
              {/* <div
                className="text-center lg:text-right"
                data-aos="flip-left"
                data-aos-duration="600"
                data-aos-delay="1100"
              >
                <div className="flex items-end justify-center lg:justify-end gap-1 mb-1 sm:mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                    500
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
                    +
                  </span>
                </div>
                <p className="text-blue-200 text-sm sm:text-base lg:text-lg">
                  Doctors Joined Us
                </p>
              </div> */}
            </div>
          </div>

          {/* Background Decorative Elements - Hidden on mobile for cleaner look */}
          <div
            className="hidden lg:block absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"
            data-aos="fade"
            data-aos-duration="2000"
            data-aos-delay="300"
          ></div>
          <div
            className="hidden lg:block absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"
            data-aos="fade"
            data-aos-duration="2000"
            data-aos-delay="500"
          ></div>

          {/* Mobile decorative elements - smaller and positioned better */}
          <div
            className="lg:hidden absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full -translate-y-16 translate-x-16"
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="400"
          ></div>
          <div
            className="lg:hidden absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full translate-y-12 -translate-x-12"
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="600"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default WhoCanUsePlatform;
