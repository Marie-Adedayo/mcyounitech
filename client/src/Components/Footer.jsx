import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-sm leading-7 bg-gray-200 text-gray-600 justify-center py-6 px-4 md:px-10">
      {/* Badges Section */}
      <div className=" py-6">
        <div className="w-full flex justify-between ">
          <div>
            <img 
              src="/Images/African-logo.jpg" 
              alt="African" 
              className="w-32" 
            />
          </div>

          <div>
            <img 
              src="/Images/Ifewa-logo.png"
              alt="Certified Business Enterprise Badge" 
              className="w-32" 
            />
          </div>

          <div>
            <img 
              src="/Images/Sesi-logo.png" 
              alt="NGLCC Certified LGBTBE Badge" 
              className="w-24" 
            />
          </div>
          <div>
            <a href="/" target="_blank" >
              <img src="/Images/YBS.svg" alt="Clutch Top Designers Badge" className="w-32" />
            </a>
          </div>  
        </div>
      </div>
      <div className="w-full h-[2px] mt-4 bg-gray-600"></div>
      {/* Main Sections */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
       {/* Company Info Section */}
        <div className="text-start flex-1">
          <p className="font-medium">
            McYounitech is an award-winning web design agency and digital marketing firm
            serving Washington DC, VA, and MD.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex-1 text-center">
          <a href="/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
            House 9A, A Close, 11 Road, Gowon Estate, Egbeda Alimosho, Lagos Nigeria.
          </a>
          <a href="tel:080000000000" className="block text-blue-600 hover:underline">
            080 000 000 000
          </a>
        </div>

        {/* Social Links & Footer Utility Links */}
        <div className="flex-1 flex flex-col gap-4 text-center md:text-end">
          <div className="flex gap-6 justify-center md:justify-end">
            <a href="/" className="text-lg"><FaFacebookF /></a>
            <a href="/" className="text-lg"><FaLinkedinIn /></a>
            <a href="/" className="text-lg"><FaTwitter /></a>
            <a href="/" className="text-lg"><FaInstagram /></a>
          </div>
          <div className="pt-4">
            <p className="font-medium">All content © 2025 McYounitech</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
              <a href="javascript:void(0)" className="hover:underline">Do Not Sell/Share My Data</a>
              <a href="/sitemap" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
