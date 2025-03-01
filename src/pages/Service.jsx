import services from "../utils/constant/service";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 bg-blue-400 text-transparent bg-clip-text">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-gray-900 px-8 py-6 rounded-lg shadow-lg 
              border border-blue-700 hover:border-blue-500 transition-all duration-300 
              transform hover:scale-105"
            >

              <h3 className="mt-6 text-2xl font-bold bg-blue-400 text-transparent h-[105px] bg-clip-text flex items-center">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
