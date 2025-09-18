"use client";
import Image from "next/image";
export const ComingSoonComponent = ({
  title,
  img,
  description,
  subDescription,
  contentOne,
  contentTwo,
}) => {
  return (
    <div className="min-h-screen pt-7 px-4 lg:px-0">
      <div className="max-w-[1100px] mx-auto h-full lg:px-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 lg:gap-5 items-center justify-around md:justify-between md:min-h-screen  py-8 lg:py-0">
          {/* Left Content */}
          <div className="px-5">
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
                {title}
              </span>
              <div className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                Coming Soon
              </div>
            </div>

            {/* Main heading with dramatic entrance */}
            <h1
              className="mt-4 text-[32px] sm:text-[42px] lg:text-[50px] font-semibold leading-[36px] sm:leading-[46px] lg:leading-[50px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Coming Soon <span className="text-primary">{title} </span> <br />
              <span className="text-text pt-2">{subDescription}</span>
            </h1>

            {/* Subtitle with gentle fade */}
            {/* <p
              className="text-[20px] sm:text-[16px] mt-4 text-text font-normal"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              {subDescription ||
                "Streamlining healthcare services to meet your needs..."}
            </p> */}

            {/* CTA Button with bounce effect */}
            {/* <Link
              target="_blank"
              className="mt-4 bg-primary text-white rounded-full inline-block py-[12px] sm:py-[14px] px-[32px] sm:px-[40px] shadow-lg shadow-[#DADCFF]/60 hover:shadow-xl hover:shadow-[#DADCFF]/60 transition-all duration-300 hover:-translate-y-1 text-[14px] sm:text-[16px]"
              href="https://dashboard.cosmicforge-healthnet.com/auth/register"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              Get Started
            </Link> */}

            {/* Feature cards with staggered entrance */}
            {/* <div
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
            </div> */}
          </div>

          {/* Right Content - Dashboard */}
          <div
            className="flex items-center justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:w-[400px] bg-[#E6E7FD] p-2 rounded-[20px]">
              <Image
                quality={90}
                width={500}
                height={500}
                alt="pharmacy coming soon"
                src={img}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonComponent;
