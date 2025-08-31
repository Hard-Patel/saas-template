import { CheckIcon, ChevronRight, EarthIcon } from "lucide-react";
import { motion } from "motion/react";
import heroBackground from "../../assets/hero-background.svg";
import heroRight from "../../assets/hero-image.avif";

export const Hero = () => {
  return (
    <div className="flex pl-22">
      {/* Background Image */}
      <img
        src={heroBackground}
        alt="IMAGE Background"
        className="absolute -z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex flex-col flex-1 w-1/2 h-[100vh] space-y-4 text-left pt-18 ml-8">
        <img
          src="/zuro.avif"
          className="size-21 shadow-xl/40 shadow-black bg-transparent rounded-3xl"
        />
        {/* </span> */}
        <span className="mt-6">
          <p className="text-black text-6xl font-bold">
            Unlock Your <br /> Team's Potential
          </p>

          <p className="mt-4 text-[##000000B3] text-xl">
            Automate complex workflows and increase
            <br /> productivity in real-time—all on one powerful
            <br /> platform.
          </p>
        </span>

        <div className="flex space-x-3 mt-4">
          <button className="flex items-center py-3 px-4 text-lg text-white space-x-1 rounded-full bg-[#1B7564]">
            Get this Template
            <ChevronRight className="size-6 ml-1" />
          </button>

          <button className="flex items-center py-3 px-4 text-lg text-gray-800 space-x-1 rounded-full hover:bg-[#9b9f9e] border-[#9b9f9e] border">
            Book a Demo
            <EarthIcon className="size-4 ml-1.5" />
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

      <div className="relative w-1/2 h-screen overflow-hidden">
        <motion.div
          initial={{ x: "100%" }} // start off-screen inside wrapper
          animate={{ x: "20%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute rounded-2xl top-1/2 -translate-y-1/2 shadow-xl/30 shadow-black"
        >
          <img src={heroRight} />
        </motion.div>
      </div>
    </div>
  );
};
