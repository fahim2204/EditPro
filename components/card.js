import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Card = (props) => {
  return (
    <>
      <div className="min-w-[350px] max-w-[350px] rounded overflow-hidden shadow-lg bg-white m-5">
        <ReactCompareSlider
          itemOne=
          {<ReactCompareSliderImage src={props.image1} alt="Image one" />}
          itemTwo=
          {<ReactCompareSliderImage src={props.image2} alt="Image two" />}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base text-dodger-blue-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
