import {
  BarChart2,
  Brain,
  Calendar,
  ChevronRight,
  ContainerIcon,
  Dribbble,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  PieChart,
  SquaresExclude,
  Twitter,
  X,
} from "lucide-react";
import { OrbitingIconRing } from "../common/OrbitingIconRing";
import { HeadingText } from "./HeadingText";

const icons = [
  <Mail key="mail" className="size-6 text-emerald-900" />,
  <Calendar key="cal" className="size-6 text-emerald-900" />,
  <BarChart2 key="bar" className="size-6 text-emerald-900" />,
  <FileText key="file" className="size-6 text-emerald-900" />,
  <SquaresExclude key="squaresexclude" className="size-6 text-emerald-900" />,
  <PieChart key="pie" className="size-6 text-emerald-900" />,
  <Brain key="brain" className="size-6 text-emerald-900" />,
  <ContainerIcon key="container" className="size-6 text-emerald-900" />,
];

export function Footer() {
  return (
    <div className="px-4 sm:px-8 xl:px-[var(--horizontal-padding)] flex-col justify-center pb-12">
      <div className="h-full w-full p-4 pb-12 flex flex-col rounded-3xl bg-teal-900 justify-center gap-y-12 text-white">
        {/* Newsletter & Orbiting Icons Section */}
        <div className="flex justify-between w-full bg-green-300 rounded-2xl overflow-hidden text-black">
          <div className="h-[65vh] ml-6 sm:ml-12 flex flex-col justify-center text-left gap-y-4">
            <HeadingText className="text-left text-black">
              Stay in the Loop
            </HeadingText>
            <p className="text-lg">
              Sign up for our newsletter to get product updates, tips, and
              industry insights—delivered right to your inbox.
            </p>
            <div>
              <button className="flex items-center py-3 px-4 text-lg text-white space-x-1 rounded-full bg-[#1B7564]">
                Get this Template
                <ChevronRight className="size-6 ml-1" />
              </button>
            </div>
          </div>

          <div className="relative -top-1/2 -left-1/2 translate-y-1 sm:-top-0 sm:-left-0 sm:translate-y-0 sm:mt-28 sm:mr-12">
            <OrbitingIconRing icons={icons} />
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-0 md:gap-x-12 px-3 md:px-6 py-4 text-left">
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-200">
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Faq</li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Support & Contact</h4>
            <ul className="space-y-2 text-gray-200">
              <li>Contact Us</li>
              <li>Email Support</li>
              <li>Phone Support</li>
            </ul>
          </div>

          {/* Stay Connect */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Stay connect</h4>
            <div className="flex space-x-4 text-gray-200">
              <a target="_blank" href="mailto:hardpatel2602@gmail.com">
                <Mail className="w-5 h-5 cursor-pointer hover:text-white" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/hard-patel-b0b508215/"
              >
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-white" />
              </a>
              <a target="_blank" href="https://x.com/Hardpatel2602">
                <Twitter className="w-5 h-5 cursor-pointer hover:text-white" />
              </a>
              <a target="_blank" href="https://instagram.com/Hardpatel2626">
                <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-3 md:px-6 py-4">
          <HeadingText className="text-white text-left">SaaS</HeadingText>
          <div className="flex flex-col md:flex-row items-center justify-between text-left gap-y-8">
            <p className="mt-2 text-lg text-white/70">
              At Zuro, we believe in empowering teams of all sizes with
              intuitive
              <br /> tools for automation and seamless collaboration.
            </p>
            <p className="mt-2 text-lg text-white/70">
              © 2025 Zuro. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="h-full w-full p-4 mt-8 flex flex-col rounded-3xl bg-teal-900 justify-center gap-y-12 text-white">
        <div className="gap-y-4 flex flex-col sm:flex-row justify-between items-center px-3 md:px-6 py-4">
          <p>
            Made with ♥️ by{"  "}
            <a
              target="_blank"
              href="https://hard-patel.netlify.app"
              className="underline font-medium"
            >
              Hard Patel
            </a>
          </p>
          <p>
            Inspired & Original Credit:{" "}
            <a
              target="_blank"
              href="https://hosseinfathi.net/"
              className="underline font-medium"
            >
              Hossein Fathi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
