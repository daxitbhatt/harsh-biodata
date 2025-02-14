import BioData from "@/components/BioData";
import Button from "@/components/Button";
import Card from "@/components/Card";
import DottedLine from "@/components/DottedLine";
import Title from "@/components/Title";
import TitleText from "@/components/TitleText";
import WeddingBioImage from "@/components/WeddingBioImage";
import WeddingBioImage2 from "@/components/WeddingBioImage2";
import React from "react";

const index = () => {
  return (
    <div className="bg-lightBeige min-h-screen ">
      <div className="mx-[10%]">
        <TitleText />
        <Title />
        <div className="flex flex-col lg:flex-row mt-10">
          {/* First Section: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <WeddingBioImage />
          </div>

          {/* Second Section: BioData */}
          <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
            <BioData />
          </div>

          {/* Third Section: Second Image */}
          {/* <div className="w-full lg:w-1/3 flex justify-center mt-6 min-h-[80vh]">
            <WeddingBioImage2 />
          </div> */}
        </div>
        <a
          href="/Harsh-Biodata.pdf"
          download="Harsh-Biodata.pdf"
          className="w-full flex justify-center items-center pb-10"
        >
          <Button />
        </a>
      </div>
    </div>
  );
};

export default index;
