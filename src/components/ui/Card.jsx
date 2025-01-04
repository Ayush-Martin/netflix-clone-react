import React from "react";
import cardDownload from "../../assets/Images/cardDownload.png";

const Card = ({
  title = "Enjoy on your TV",
  text = "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
  image,
}) => {
  console.log(image);

  return (
    <div className="relative flex-row h-56 py-6 pl-4 pr-2 bg-card-gradient rounded-3xl">
      <div className="block">
        <h1 className="text-lg font-medium">{title}</h1>
        <p className="mt-3 text-[12px]">{text}</p>
      </div>
      <div className="absolute bottom-4 right-4">
        <img src={image} alt="Card Image" className="w-16" />
      </div>
    </div>
  );
};

export default Card;
