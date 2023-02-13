import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Link from "next/link";
import uploadPage from "../pages/uploadPage";

const Card = (props) => {
  return (
    <>
      <div className="min-w-[350px] max-w-[350px] rounded-xl overflow-hidden shadow-lg bg-white m-5">
        <ReactCompareSlider
          className="object-fill h-60"
          itemOne={
            <ReactCompareSliderImage src={props.image1} alt="Image one" />
          }
          itemTwo={
            <ReactCompareSliderImage src={props.image2} alt="Image two" />
          }
        />
        <Link href={{
            pathname: "/uploadPage",
            query: props , // the data
          }}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 hover:text-dodger-blue-700">{props.title}</div>
            <p className="text-base text-dodger-blue-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
