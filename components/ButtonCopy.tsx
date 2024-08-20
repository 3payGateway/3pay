"use client";
import Image from "next/image";
import React, { useState } from "react";
import { copyToClipboard } from "@/lib/utils";
import { ButtonMoving } from "@/components/ui/moving-border";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
  variant: string;
  icon?: string;
  link?: string;
}

const Button = ({ type, title, icon, variant, link }: ButtonProps) => {
  const [showCheckIcon, setShowCheckIcon] = useState(false);

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    } else {
      copyToClipboard(title);
      setShowCheckIcon(true);
      setTimeout(() => {
        setShowCheckIcon(false);
      }, 2000);
    }
  };

  return (
    <div className="relative inline-block">
      <ButtonMoving
        borderRadius="0.5rem"
        type={type}
        onClick={handleClick}
        className={`bg-black text-white border-gray-800 ${variant} hover:bg-zinc-900 transition duration-200 ease-in-out transform hover:scale-105`}
      >
        <label className="text-sm font-mono whitespace-nowrap pr-24 cursor-pointer">
          {title}
        </label>
        {showCheckIcon ? (
          <Image src="/check.png" alt="Checked" width={18} height={18} />
        ) : (
          icon && <Image src={icon} alt={title} width={18} height={18} />
        )}
      </ButtonMoving>
    </div>
  );
};

export default Button;
