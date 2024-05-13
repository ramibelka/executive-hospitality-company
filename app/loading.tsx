import React from "react";
import Logo from "../public/images/Logo";

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <Logo className="mb-4 h-24" />
      <h1 className="text-3xl font-semibold">Loading...</h1>
    </div>
  );
};

export default LoadingScreen;
