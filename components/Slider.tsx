"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Slider = () => {
  return (
    <div className="h-[30rem] font-poppins flex flex-col antialiased bg-customLBlue dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <p className="uppercase flex justify-center regular-24 -mt-1 mb-3 text-white">
        Supported BlockChains
      </p>

      <InfiniteMovingCards
        items={testimonials1}
        direction="left"
        speed="fast"
      />

      <InfiniteMovingCards
        items={testimonials2}
        direction="right"
        speed="fast"
      />
    </div>
  );
};

const testimonials1 = [
  {
    image: "/eth.png",
    name: "ethereum",
  },
  {
    image: "/tron.png",
    name: "tron",
  },
  {
    image: "/polygon.png",
    name: "kava",
  },
  {
    image: "/usdc.png",
    name: "usdc",
  },
  {
    image: "/base.png",
    name: "base",
  },
  {
    image: "/fantom.png",
    name: "fantom",
  },
  {
    image: "/injective.png",
    name: "injective",
  },
];

const testimonials2 = [
  {
    image: "/solana.png",
    name: "solana",
  },
  {
    image: "/polka.png",
    name: "polka",
  },
  {
    image: "/bitcoin.png",
    name: "bitcoin",
  },
  {
    image: "/eos.png",
    name: "eos",
  },
  {
    image: "/sei.png",
    name: "sei",
  },
  {
    image: "/bnb.png",
    name: "bnb",
  },
  {
    image: "/celestia.png",
    name: "celestia",
  },
];

export default Slider;
