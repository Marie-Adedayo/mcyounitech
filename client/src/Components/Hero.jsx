import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      title: "Question",
      background: "bg-red-500", 
      content: "everything" 
    },
    { 
      title: "How do you",
      background: "bg-blue-500", 
      content: "demonstrate member value?" 
    },
    { 
      title: "How do you",
      background: "bg-green-500",
      content: "Connect to your audience" 
    },
    { 
      title: "Feature",
      background: "bg-yellow-500", 
      content: "build your sales pipeline" 
    },
  ];

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollY = e.target.scrollTop;
      const slideHeight = window.innerHeight;
      const newSlide = Math.floor(scrollY / slideHeight);
      setCurrentSlide(newSlide);
    };

    const scrollContainer = document.getElementById("scrollable-slides");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="hero-section w-full md:h-screen overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 h-screen">
        {/* 1fr Column (Fixed Left Side) */}
        <div className="col-span-1 bg-white text-gray-800 flex items-center justify-center h-screen sticky top-0">
          <p className="text-3xl text-right">{slides[currentSlide]?.title}</p>
        </div>
    
        {/* 2fr Column (Scrollable Right Side) */}
        <div
          id="scrollable-slides"
          className="col-span-2 h-screen overflow-y-scroll snap-y snap-mandatory"
          style={{
            scrollbarWidth: "none", // Hides scrollbar for Firefox
            msOverflowStyle: "none", // Hides scrollbar for IE
          }}
        >
          {/* Hides scrollbar for Chrome, Edge, and Safari */}
          <style>
            {`
              #scrollable-slides::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`h-screen ${slide.background} snap-start flex items-center justify-center`}
            >
              <p className="text-4xl text-white">{slide.content}</p>
            </div>
          ))}
        </div>
      </div>
    
      {/* Mobile Layout */}
      <div className="block md:hidden h-auto">
        <div className="flex flex-col">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`h-[70vh] ${slide.background} flex items-center justify-center`}
            >
              <p className="text-2xl text-white p-4">{slide.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
