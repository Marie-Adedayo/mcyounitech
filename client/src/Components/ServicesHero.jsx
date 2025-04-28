import { useState, useEffect } from "react";

const ServicesHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Integrated",
      background: "bg-red-500",
      content: "We bring together strategy, design, content, technology, and marketing to drive measurable results.",
    },
    {
      title: "Strategy",
      background: "bg-blue-500",
      content: "It's so important, it's in our name and at the heart of everything we do.",
    },
    {
      title: "Creative",
      background: "bg-green-500",
      content: "Design thinking to inspire your audience and elevate your brand.",
    },
    {
      title: "Technology",
      background: "bg-yellow-500",
      content: "Seamlessly built websites and apps designed for growth and innovation.",
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
    <div className="hero-section w-full h-auto md:h-screen overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 h-screen">
        {/* Fixed Left Column */}
        <div className="col-span-1 bg-white text-gray-800 justify-center h-screen sticky">
            <div className="relative flex flex-row justify-between mt-36">
                <div>
                    <ul className="space-y-4">
                        {services.map((service, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer ${
                            currentSlide === index ? "font-bold text-blue-500" : "text-gray-500"
                            }`}
                            onClick={() => {
                            const slide = document.getElementById(`service-slide-${index}`);
                            slide?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {service.title}
                        </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-6">We do</h2>
                </div>
                
            </div>
        </div>

        {/* Scrollable Slides */}
        <div
          id="scrollable-slides"
          className="col-span-2 h-screen overflow-y-scroll snap-y snap-mandatory"
        >
          {services.map((service, index) => (
            <div
              id={`service-slide-${index}`}
              key={index}
              className={`h-screen ${service.background} snap-start flex items-center justify-center`}
            >
              <p className="text-4xl text-white p-4">{service.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden h-auto">
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div
              key={index}
              className={`h-[70vh] ${service.background} flex items-center justify-center`}
            >
              <p className="text-2xl text-white p-4">{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
