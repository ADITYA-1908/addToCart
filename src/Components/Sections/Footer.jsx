import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6 mt-10 shadow-inner w-full h-10 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p style={{ marginTop: "13px" }} className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MyCart. All rights reserved.
          </p>
        </div>

        <div style={{ marginTop: "13px" }} className="flex space-x-4 gap-6">
          <a href="#" className="text-gray-400 hover:text-teal-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
