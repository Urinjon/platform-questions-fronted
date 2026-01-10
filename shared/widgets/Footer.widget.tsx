"use client";
import { BackgroundRippleEffect } from "@shared/ui/background-ripple-effect";

export const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-4 relative min-h-50 mt-5 z-2">
      <BackgroundRippleEffect rows={4} />
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </div>
    </footer>
  );
};
