import React, { useEffect, useContext } from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

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
              title="Black and White"
              image1="/img/baby-image.jpg"
              image2="/img/baby-bw-image.jpg"
            />
            <Card
              title="Image Quality Enhanced"
              image1="/img/baby-blur-image.jpg"
              image2="/img/baby-image.jpg"
            />
            <Card
              title="Image Remove Background"
              image1="/img/baby-image.jpg"
              image2="/img/baby-remove-bg-image.jpg"
            />
            <Card
              title="Cartoon Selfie"
              image1="/img/baby-image.jpg"
              image2="/img/baby-bw-image.jpg"
            />
            <Card
              title="Passport Photo Maker"
              image1="/img/baby-image.jpg"
              image2="/img/baby-bw-image.jpg"
            />
            <Card
              title="Photo Animation"
              image1="/img/baby-image.jpg"
              image2="/img/baby-bw-image.jpg"
            />
            <Card
              title="Enhance Video Quality"
              image1="/img/baby-image.jpg"
              image2="/img/baby-bw-image.jpg"
            />
            <Card
              title="Remove Unwanted Objects"
              image1="/img/baby-image.jpg"
              image2="/img/baby-bw-image.jpg"
            />
            <Card
              title="Remove Video Background"
              image1="/img/baby-image.jpg"
              image2="/img/baby-bw-image.jpg"
            />
            <Card
              title="Face Cutout"
              image1="/img/baby-image.jpg"
              image2="/img/baby-bw-image.jpg"
            />
            <Card
              title="Blur Background"
              image1="/img/baby-image.jpg"
              image2="/img/baby-bw-image.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
