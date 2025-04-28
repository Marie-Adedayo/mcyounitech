// ServiceCard.jsx
import React from "react";

const ServiceCard = ({ title, description, image, link }) => (
  <a
    href={link}
    className="block border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold capitalize">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </a>
);

export default ServiceCard;
