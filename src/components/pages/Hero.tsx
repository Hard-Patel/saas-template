import { CheckIcon, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import heroBackground from "../../assets/hero-background.svg";
import heroRight from "../../assets/hero-image.avif";

export const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row md:pl-8 xl:pl-22">
      {/* Background Image */}
      <img
        src={heroBackground}
        alt="IMAGE Background"
        className="absolute -z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex flex-col flex-1 items-center md:items-start w-full xl:w-1/2 h-[100vh] space-y-4 text-center md:text-left pt-18 ml-0 md:ml-8 md:mr-24">
        <img
          src="/zuro.avif"
          className="size-21 shadow-xl/40 shadow-black bg-transparent rounded-3xl"
        />
        <span className="px-4 md:mx-0 mt-6">
          <p className="text-black text-4xl sm:text-5xl lg:text-6xl font-bold">
            Unlock Your Team's Potential
          </p>

          <p className="mt-4 text-[##000000B3] text-wrap text-lg md:text-xl">
            Automate complex workflows and increase productivity in
            real-time—all on one powerful platform.
          </p>
        </span>

        <div className="flex w-full md:w-auto px-8 md:px-0 flex-col md:flex-row space-x-3 space-y-3 mt-4">
          <button className="flex items-center justify-center py-3 px-5 text-lg text-white space-x-1 rounded-full bg-[#1B7564]">
            Get this Template
            <ChevronRight className="size-6 ml-1" />
          </button>

          <button className="flex items-center justify-center py-3 px-5 text-lg text-gray-800 space-x-1 rounded-full hover:bg-[#9b9f9e] border-[#9b9f9e] border">
            Book a Demo
            {/* <EarthIcon className="size-4 ml-1.5" /> */}
          </button>
        </div>

        <div className="flex-col space-y-4 mt-4">
          {[
            "Real-Time Analytics",
            "Seamless Integration",
            "Automated Workflows",
          ].map((text) => {
            return (
              <div
                key={text}
                className="flex items-center text-lg gap-x-2 text-[#000000B3]"
              >
                <CheckIcon className="size-5 text-gray-400" />
                {text}
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden xl:block relative w-1/2 min-h-screen overflow-hidden">
        <motion.div
          initial={{ x: "100%" }} // start off-screen inside wrapper
          animate={{ x: "20%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative xl:absolute rounded-2xl xl:top-1/2 xl:-translate-y-1/2 xl:shadow-xl/30 xl:shadow-black"
        >
          <img src={heroRight} />
          <div className="xl:hidden rounded-xl pointer-events-none absolute bottom-0 w-full h-48 bg-gradient-to-t from-white to-transparent z-50" />
        </motion.div>
      </div>

      <div className="xl:hidden relative my-8 px-12 w-[100%] overflow-hidden">
        <motion.div
          initial={{ y: "100%" }} // start off-screen inside wrapper
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative xl:absolute rounded-2xl xl:top-1/2 xl:-translate-y-1/2 xl:shadow-xl/30 xl:shadow-black"
        >
          <img src={heroRight} />
          <div className="xl:hidden rounded-xl pointer-events-none absolute bottom-0 w-full h-48 bg-gradient-to-t from-white to-transparent z-50" />
        </motion.div>
      </div>
    </div>
  );
};
