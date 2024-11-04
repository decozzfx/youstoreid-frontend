import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col md:flex-row gap-4 text-left">
          <div className="p-4  hover:bg-default-50 rounded-lg shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-default-900 mb-6">
              About Us
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
