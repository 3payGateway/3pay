import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      console.log("Text copied to clipboard");
    },
    (err) => {
      console.error("Failed to copy text to clipboard", err);
    }
  );
};
