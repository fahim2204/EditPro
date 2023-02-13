const CardVideo = (props) => {
  return (
    <>
      <div className="min-w-[350px] max-w-[350px] rounded overflow-hidden shadow-lg bg-white m-5">
        <video autoPlay muted loop className="object-fill h-60">
          <source src={props.url} type="video/mp4" />
        </video>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-base text-dodger-blue-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardVideo;
