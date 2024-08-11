"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


const Slider = () => {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-customLBlue dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">


      <InfiniteMovingCards
        items={testimonials1}
        direction="left"
        speed="normal"
      />

<InfiniteMovingCards
        items={testimonials2}
        direction="right"
        speed="normal"
      />
    </div>

    
  );
}

const testimonials1 = [
  {
    image: '/ethereum.png',
    name: "ethereum",
  },
  {
    image: '/osmosis.png', 
    name: "osmosis",
  },
  {
    image: '/kava.png', 
    name: "kava",
  },
  {
    image: '/filecoin.png', 
    name: "filecoin",
  },
  {
    image: '/moonbeam1.png', 
    name: "moonbeam",
  },
  {
    image: '/mantle.png', 
    name: "mantle",
  },
  {
    image: '/arbitrum.png', 
    name: "arbitrum",
  },
  {
    image: '/fantom.png', 
    name: "fantom",
  },
  {
    image: '/optimism.png', 
    name: "optimism",
  },
];

const testimonials2 = [
    {
        image: '/avalanche.png', 
        name: "avalanche",
      },
      {
        image: '/polygon.png', 
        name: "polygon",
      },
      {
        image: '/terra.png', 
        name: "terra",
      },
      {
        image: '/secret.png', 
        name: "secret",
      },
      {
        image: '/dymension.png', 
        name: "dymension",
      },
      {
        image: '/cosmos.png', 
        name: "cosmos",
      },
      {
        image: '/sei.png', 
        name: "sei",
      },
      {
        image: '/injective.png', 
        name: "injective",
      },
      {
        image: '/celestia.png', 
        name: "celestia",
      },

];

export default Slider;