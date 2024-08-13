"use client";
import React, { useState } from "react";

interface FeatureItem {
  icon?: React.ElementType;
  title: string;
  description: string;
}

interface FeatureCardProps {
  featureItem: FeatureItem;
}

export const FeatureCard = ({ featureItem }: FeatureCardProps) => {
  const [tiltStyle, setTiltStyle] = useState({});

  return (
    <div className="w-full min-h-48 p-5 border-2 border-neutral-500 rounded-xl flex flex-col items-center gap-2 transition-all duration-100 shadow-none hover:shadow-2xl hover:border-white hover:scale-110 hover:text-white bg-black text-gray-20">
      {featureItem.icon &&
        React.createElement(featureItem.icon, { className: "text-3xl" })}
      <h2 className="text-xl text-[22px] font-bold text-center mb-[10px]">{featureItem.title}</h2>
      <p className="text-center text-[14px]">{featureItem.description}</p>
    </div>
  );
};
