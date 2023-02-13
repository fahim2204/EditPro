import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import UploadImage from "../components/uploadImage";

export default function UploadPage() {
  const router = useRouter();
  const data = router.query;
  return (
    <>
      <div className="bg-gray-100 min-h-screen pb-10">
        <Navbar />
        <h2 className="text-4xl font-bold text-center mt-10 text-dodger-blue-600">
          {data.title}
        </h2>
        <div className="flex flex-wrap justify-center mt-10 max-w-7xl mx-auto">
          <div className="w-2/5 m-5">
            <UploadImage />
          </div>

          <div className="w-2/5 m-5">
            <ReactCompareSlider
              className="w-full h-full rounded-xl"
              itemOne={
                <ReactCompareSliderImage src={data.image1} alt="Image one" />
              }
              itemTwo={
                <ReactCompareSliderImage src={data.image2} alt="Image two" />
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center bg-white max-w-6xl h-[800px] m-10 mx-auto rounded-xl">
          <div className="mr-5 w-5/12">
            <p className="text-2xl font-bold text-center mt-10 text-black-600">
              Before
            </p>
            <hr className="bg-black h-1 mb-10" />
            <img className="h-5/6 w-full rounded-xl" src={data.image1} alt="before" />
          </div>
          <div className="ml-5 w-5/12">
            <p className="text-2xl font-bold text-center mt-10 text-dodger-blue-700">
              After
            </p>
            <hr className="bg-dodger-blue-700 h-1 mb-10" />
            <img className="h-5/6 rounded-xl" src={data.image2} alt="before" />
          </div>
        </div>
        <button className="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Image
        </button>
      </div>
    </>
  );
}
