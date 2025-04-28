// StickyMenu.jsx (Updated with translated styles)
import React from "react";

const StickyMenu = ({ isReady = true }) => {
  return (
    <nav
      className={`fixed left-0 top-1/2 transform -translate-y-1/2 -translate-x-full pl-[30px] opacity-0 transition-opacity duration-300 ease-out z-[3] ${
        isReady ? "translate-y-[-50%] opacity-100 delay-1000" : ""
      } 
      hidden lg:block 
      xl:pl-[50px]`}
    >
      <ul className="space-y-2 w-[236px] bg-white p-4 shadow-md rounded">
        <div className="flex items-center mb-4">
          <h1 className="text-xl font-bold mr-2">Services</h1>
          <span className="flex-1 h-1 bg-gray-300" />
        </div>
        {[
          "Strategy",
          "Branding",
          "Web Design",
          "Content",
          "Web Development",
          "Marketing & Fundraising",
        ].map((item, idx) => (
          <li key={idx}>
            <button
              className={`w-full text-left px-4 py-2 rounded hover:bg-gray-200 ${
                idx === 0 ? "bg-gray-800 text-white" : ""
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StickyMenu;
