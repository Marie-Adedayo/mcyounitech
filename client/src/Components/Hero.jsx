import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      title: "Question",
      backgroundImage: "/Images/background1.jpg",
      overlayColor: "bg-red-500",
      content: "Explore the endless possibilities",
      description: "Discover groundbreaking solutions that answer the toughest questions."
    },
    { 
      title: "How do you",
      backgroundImage: "/Images/background2.jpg",
      overlayColor: "bg-blue-500",
      content: "Demonstrate member value",
      description: "We help you highlight the benefits and values you bring to your audience."
    },
    { 
      title: "How do you",
      backgroundImage: "/Images/background3.jpg",
      overlayColor: "bg-green-500",
      content: "Connect to your audience",
      description: "Engage your audience with innovative solutions and meaningful interactions."
    },
    { 
      title: "Feature",
      backgroundImage: "/Images/background4.jpg",
      overlayColor: "bg-black",
      content: "Build your sales pipeline",
      description: "Strategize and grow with tailored solutions to expand your reach effectively."
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
        {/* Fixed Left Column */}
        <div className="col-span-1 bg-white text-gray-800 flex items-center justify-center h-screen sticky top-0">
          <p className="text-3xl font-bold text-right">{slides[currentSlide]?.title}</p>
        </div>
    
        {/* Scrollable Right Column */}
        <div
          id="scrollable-slides"
          className="col-span-2 h-screen overflow-y-scroll snap-y snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
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
              className="relative h-screen snap-start"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className={`absolute inset-0 ${slide.overlayColor} opacity-50`}></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-start">
                <h2 className="text-4xl text-white font-bold">{slide.content}</h2>
                <p className="mt-4 text-xl text-white">{slide.description}</p>
              </div>
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
              className="relative h-[70vh]"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className={`absolute inset-0 ${slide.overlayColor} opacity-50`}></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h2 className="text-2xl text-white font-bold">{slide.title} {slide.content.toLowerCase()}</h2>
                <p className="mt-2 text-lg text-white">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;
