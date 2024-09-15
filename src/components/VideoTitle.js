import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video pt-[20%] px-24 bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold -mt-14 text-white">{title}</h1>
      <p className="py-6 text-pretty w-1/4 text-white">{overview}</p>
      <div className="">
        <button className="bg-white text-black px-8 py-4 text-xl rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className=" mx-4 bg-gray-600 text-white px-8 py-4 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
        More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
