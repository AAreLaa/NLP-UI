import Image from "next/image";
import React from "react";

import Person1 from "@/public/images/teamImage/person1.jpg";
import Person2 from "@/public/images/teamImage/person2.jpg";
import Person3 from "@/public/images/teamImage/person3.jpg";

export default function OurTeam() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" id="ourTeam">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-2">
            <h2 className="h2 mb-4">Our Team</h2>
          </div>

          {/* Team Members */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st member */}
            <div
              className="flex flex-col h-80 p-6 bg-gray-800 border border-green-600 rounded-2xl justify-center"
              data-aos="fade-up"
            >
              <div className="relative flex justify-center items-center mb-4">
                <div className="absolute animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-green-600"></div>
                <Image
                  src={Person1}
                  className="rounded-full h-24 w-24"
                  alt="loading image"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-xl font-medium text-yellow-300">Nabin Da Shrestha</div>
                <div className="text-gray-400">Frontend Engineer</div>
                <div className="text-gray-400">UX/UI Designer</div>
              </div>
            </div>

            {/* 2nd member */}
            <div
              className="flex flex-col h-80 p-6 bg-gray-800 border border-green-600 rounded-2xl justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative flex justify-center items-center mb-4">
                <div className="absolute animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-green-600"></div>
                <Image
                  src={Person2}
                  className="rounded-full h-24 w-24"
                  alt="loading image"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-xl font-medium text-yellow-300">Nirajan Bekoju</div>
                <div className="text-gray-400">Backend Engineer</div>
                <div className="text-gray-400">ML Engineer</div>
              </div>
            </div>

            {/* 3rd member */}
            <div
              className="flex flex-col h-80 p-6 bg-gray-800 border border-green-600 rounded-2xl justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="relative flex justify-center items-center mb-4">
                <div className="absolute animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-green-600"></div>
                <Image
                  src={Person3}
                  className="rounded-full h-24 w-24"
                  alt="loading image"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-xl font-medium text-yellow-300">Nishant Luitel</div>
                <div className="text-gray-400">Backend Engineer</div>
                <div className="text-gray-400">ML Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
