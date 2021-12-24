import React from "react";
import Image from "next/image";
import SMU from "../assets/smu.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiTwotoneMail,
} from "react-icons/ai";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="grid gap-8 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2">
            <div className="w-1/4">
              <Image src={SMU} className="inline-flex items-center" />
            </div>
            <div className="mt-6 lg:max-w-sm tracking-wide">
              <p className="text-sm font-black pb-1">
                SMU School of Computing and Information Systems
              </p>
              <p className="text-sm font-black">
                SMU Centre for Social Responsibility (C4SR)
              </p>
              <p className="mt-4 text-sm font-black text-gray-800">
                Singapore Management University <br />
                80 Stamford Road <br />
                Singapore 178902
              </p>
            </div>
          </div>
          <div>
            <div className="text-base font-bold tracking-wide text-gray-900">
              Social
            </div>
            <p className="text-sm text-gray-600">
              Find us on the following social media platforms
            </p>
            <div className="flex items-center mt-1 space-x-2">
              <a
                href="https://www.instagram.com/smuheartcode/"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-purple-400"
              >
                <AiFillInstagram size={30} />
              </a>
              <a
                href="https://www.facebook.com/SMUProjectHeartCode/"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-purple-400"
              >
                <AiFillFacebook size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/smu-project-heartcode/about/"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-purple-400"
              >
                <AiFillLinkedin size={30} />
              </a>
            </div>
            <div className="text-base font-bold tracking-wide text-gray-900 mt-8">
              Contact Us
            </div>
            <p className="text-sm text-gray-600 flex items-center mt-1">
              <AiTwotoneMail size={20} className="inline mr-2" />
              Get in touch with us via
              <a
                href="mailto:ellipsis@sa.smu.edu.sg?subject=Project Heartcode"
                className="ml-1 inline transition-colors duration-300 hover:text-purple-400"
              >
                ellipsis@sa.smu.edu.sg
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright {new Date().getFullYear()} Singapore Management
            University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
