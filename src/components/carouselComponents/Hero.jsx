"use client";
import Link from "next/link";
export const Hero = () => {
  return (
    <div className="min-h-screen pt-7 px-4 lg:px-0">
      <div className="max-w-[1100px] mx-auto h-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-5 items-center justify-between min-h-screen py-8 lg:py-0">
          {/* Left Content */}
          <div className="">
            {/* Badge with subtle entrance */}
            <div
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-[#F5F5F5] to-[#EEEEFF] border border-[#E0E0FF]"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="relative">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-[14px] font-medium text-primary">
                We are launching v0
              </span>
              <div className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                NEW
              </div>
            </div>

            {/* Main heading with dramatic entrance */}
            <h1
              className="mt-4 text-[32px] sm:text-[42px] lg:text-[50px] font-semibold leading-[36px] sm:leading-[46px] lg:leading-[50px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Simplified and Smarter{" "}
              <span className="text-primary">Healthcare </span>
              solutions, One click at a time.
            </h1>

            {/* Subtitle with gentle fade */}
            <p
              className="text-[14px] sm:text-[16px] mt-4 text-text font-normal"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              Streamlining healthcare services to meet your needs...
            </p>

            {/* CTA Button with bounce effect */}
            <Link
              target="_blank"
              className="mt-4 bg-primary text-white rounded-full inline-block py-[12px] sm:py-[14px] px-[32px] sm:px-[40px] shadow-lg shadow-[#DADCFF]/60 hover:shadow-xl hover:shadow-[#DADCFF]/60 transition-all duration-300 hover:-translate-y-1 text-[14px] sm:text-[16px]"
              href="https://dashboard.cosmicforge-healthnet.com/auth/register"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              Get Started
            </Link>

            {/* Feature cards with staggered entrance */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 mt-8 lg:mt-12 gap-6 lg:gap-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              <div
                data-aos="slide-right"
                data-aos-duration="700"
                data-aos-delay="1000"
              >
                <div
                  className="w-full h-[5px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, #272EA7, rgba(39, 46, 167, 0))",
                  }}
                ></div>
                <div className="mt-3">
                  <h1 className="text-black text-[15px] sm:text-[16px] font-semibold">
                    Your practice, your price
                  </h1>
                  <p className="text-[13px] sm:text-[14px] text-text">
                    Charge exactly what your expertise is worth—update
                    consultation fees in seconds and keep 100% of your earnings.
                  </p>
                </div>
              </div>
              <div
                data-aos="slide-left"
                data-aos-duration="700"
                data-aos-delay="1200"
              >
                <div
                  className="w-full h-[5px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, #272EA7, rgba(39, 46, 167, 0))",
                  }}
                ></div>
                <div className="mt-3">
                  <h1 className="text-black text-[15px] sm:text-[16px] font-semibold">
                    Save more, worry less
                  </h1>
                  <p className="text-[13px] sm:text-[14px] text-text">
                    Join our monthly subscription to unlock unlimited visits,
                    automatic discounts on every appointment, and priority
                    booking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard */}
          <div
            className="flex items-center justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:w-[400px] bg-[#E6E7FD] p-2 rounded-[20px]">
              {/* Glass card with gradient border */}
              <div
                className="z-20 absolute bottom-8 sm:bottom-10 lg:bottom-12 -left-6 sm:-left-10 lg:-left-14 backdrop-blur-md rounded-xl backdrop-saturate-150"
                data-aos="slide-up"
                data-aos-duration="800"
                data-aos-delay="1000"
              >
                <div className="p-[1px] bg-gradient-to-b from-white to-gray-300 rounded-xl">
                  <div className="bg-[#F3F4FB]/50 rounded-xl p-4 sm:p-5 lg:p-6 min-w-[280px] sm:min-w-[320px] lg:min-w-[360px]">
                    <h1 className="text-black font-semibold text-[13px] sm:text-[14px] lg:text-[15px] mb-4 lg:mb-6">
                      Check Doctor's Availability
                    </h1>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <div className="relative">
                          <img
                            src="https://i.pravatar.cc/300"
                            alt="Dr. John Doe"
                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover ring-4 ring-white/40"
                          />
                        </div>
                        <div>
                          <h1 className="text-black font-semibold text-[11px] sm:text-[12px] lg:text-[13px]">
                            Dr. John Doe
                          </h1>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                            <p className="text-gray-700 text-[10px] sm:text-xs lg:text-sm">
                              Current online
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary backdrop-blur-sm text-[10px] sm:text-[11px] lg:text-[13px] text-white px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full font-medium transition-all shadow-lg">
                        Check Rates
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="z-20 w-full sm:w-[320px] lg:w-[400px] border p-3 sm:p-4 border-[#dedee48b] absolute overflow-hidden -top-3 sm:-top-4 lg:-top-5 -right-6 sm:-right-10 lg:-right-14 left-6 sm:left-10 lg:left-14 backdrop-blur-md rounded-xl backdrop-saturate-150"
                data-aos="slide-down"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <h1 className="text-black font-semibold text-[13px] sm:text-[14px] lg:text-[15px] mb-2">
                  Track and View Appointments
                </h1>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/home/h3.png"
                    className="w-full h-auto object-cover scale-110 sm:scale-105 lg:scale-100"
                    alt="Track and View appointments"
                  />
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(to top, #fff, rgba(39, 46, 167, 0))",
                  }}
                  className="w-full h-[60px] sm:h-[80px] lg:h-[100px] bg-white absolute bottom-0 left-0"
                ></div>
              </div>

              {/* Background content for blur effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 via-blue-200/50 to-indigo-300/50 rounded-[20px]"></div>

              <div
                className="relative z-10"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img
                  src="/home/h1.png"
                  className="w-full h-auto rounded-[10px]"
                  alt="Hero Image one"
                />
                <img
                  src="/home/h2.png"
                  className="w-full mt-3 sm:mt-4 h-auto rounded-[10px]"
                  alt="Hero Image Two"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
