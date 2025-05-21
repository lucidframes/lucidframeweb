import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[40vh] bg-[#181818] px-4 text-center">
        <div className="h-[20vh]"></div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#F1F1F1] mb-2">
          We Don’t Just Run Ads
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#7F3BE3] font-medium">
          We Craft Stories That Stick
        </h2>
      </div>
      <div className="flex flex-col items-center  h-[60vh] bg-[#181818] px-4 text-center">
        <p className="text-[#F1F1F1] text-2xl m-4 md:m-28 md:text-4xl">
          <span className="text-[#7F3BE3] font-bold">Lucidframe</span> is a
          creative advertising agency built for brands that want to make an
          impact. We blend storytelling, design, and data to create campaigns
          that don’t just look good, they perform. Born out of a passion for
          bold visuals and smart strategies, we’re here to help you frame your
          brand clearly, creatively, and effectively in a world full of noise.
        </p>
      </div>
    </div>
  );
};

export default page;
