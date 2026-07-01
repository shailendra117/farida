import video3 from "../../assets/video/video3.mp4";

export default function VideoSection() {
  return (
    <div className="mt-8 sm:mt-10 px-3 sm:px-6 md:px-10 lg:px-20">
      <video
        src={video3}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[690px] object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl"
      />
    </div>
  );
}
