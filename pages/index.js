import React, { useEffect, useContext } from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import CardVideo from "../components/card-video";


export default function Home() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mt-10">
            <h2 className="text-5xl font-bold">
              Our <span className="text-dodger-blue-600"> Services </span>
            </h2>
            <p className="mt-3 text-base text-slate-500">
              We have an experienced team of production and inspection personnel
              to ensure quality.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-5">
            
              <Card
                title="Image Remove Background"
                image1="/img/remove-background.jpg"
                image2="/img/remove-background-1.jpg"
              />
            <Card
              title="Image Quality Enhanced"
              image1="/img/quality-enhanced-1.jpg"
              image2="/img/quality-enhanced.jpg"
            />
            <Card
              title="Photo Colorizer"
              image1="/img/colorizer.jpg"
              image2="/img/colorizer-1.jpg"
            />
            <Card
              title="Cartoon Selfie"
              image1="/img/cartoon.jpg"
              image2="/img/cartoon-1.jpg"
            />
            <Card
              title="Passport Photo Maker"
              image1="/img/passport.jpg"
              image2="/img/passport-1.jpg"
            />
            <CardVideo
              title="Photo Animation"
              url="/videos/photo-animation.mp4"
            />
            <CardVideo
              title="Enhance Video Quality"
              url="/videos/enhance-video.mp4"
            />
            <Card
              title="Remove Unwanted Objects"
              image1="/img/remove-unwanted.jpg"
              image2="/img/remove-unwanted-1.jpg"
            />
            <CardVideo
              title="Remove Video Background"
              url="/videos/remove-video-bg-1.mp4"
            />
            <Card
              title="Face Cutout"
              image1="/img/cutout.jpg"
              image2="/img/cutout-1.jpg"
            />
            <Card
              title="Blur Background"
              image1="/img/blur.jpg"
              image2="/img/blur-1.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
