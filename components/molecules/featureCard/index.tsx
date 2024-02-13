import React from "react";
import { FeatureCardProps } from "./featureCard.types";

export default function FeatureCard(props: Readonly<FeatureCardProps>) {
  const { children, title, description } = props;
  return (
    <div
      className="relative flex flex-col items-center"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
    >
      <div className="w-16 h-16 border-dotted border-4 border-green-300 bg-gradient-to-tr from-gray-900 to-green-900 p-1 shadow-lg rounded-full object-cover bg-gray-700 flex item-center justify-center">
        {" "}
        {children}
      </div>
      <h4 className="h4 mb-2 mt-4">{title}</h4>
      <p className="text-lg text-gray-400 text-center">{description}</p>
    </div>
  );
}
