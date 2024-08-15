"use client";
import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/feature-card";
import { FEATURE_LINK } from "@/constants";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

export default function Feature() {
  const list = FEATURE_LINK;

  return (
    <section
      id="feature"
      className="relative font-poppins bg-customLBlue px-10 py-10 md:py-20 "
    >
      <h2 className="flex justify-center bold-40 lg:bold-64 text-white pb-12">
        <strong>Our Services</strong>
      </h2>

      <div className="relative z-10 w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {list.map((item, index) => (
          <FeatureCard featureItem={item} key={index} />
        ))}
      </div>

      <div className="hidden md:block absolute left-[20%] top-[10%] z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full "></div>
      </div>
    </section>
  );
}
