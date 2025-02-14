import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

const WeddingBioImage2 = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex  mt-10 transition-opacity duration-700 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-96 h-96 shadow-lg">
        <Image
          src={"/user3.jpg"}
          alt="Wedding Bio"
          width={384}
          height={384}
          className="object-contain rounded-xl brightness-110"
        />
      </div>
    </div>
  );
};

export default WeddingBioImage2;
