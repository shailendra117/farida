import Award from "../../assets/images/award-img1.png"
const YoutubeVideo = () => {
  return (
    <div className="max-w-10xl  flex  px-4 py-10 gap-2">
     <div className="w-full h-[350px] aspect-auto rounded-xl">
         <iframe
        className="w-full h-[350px] aspect-auto rounded-xl"
        src="https://www.youtube.com/watch?v=XDyhnE9TJQE"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
     </div>

      <div className="">
        <img src={Award} alt="" className="flex flex-col mx-auto" />
        <p className="text-gray-600 text-xs leading-7 text-start px-8">
          Team Farida Gupta clinching the most innovative SMB on Digital in 2017 at the Google SMB heroes India Finale in Delhi.
        </p>

        <p className="mt-2 text-xs text-start pl-8 text-gray-500">
          26 July 2017
        </p>
      </div>

    </div>
  );
};

export default YoutubeVideo;