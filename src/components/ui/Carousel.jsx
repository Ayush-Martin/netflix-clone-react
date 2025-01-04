import { useRef } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { MOVIE_POSTER_BASE_URL } from "./../../constants/TMDBApi";

const Carousel = ({ items }) => {
  const scrollDivRef = useRef(null);
  const scrollAmount = 650;

  const prev = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const next = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative px-5">
      <button className="absolute left-0 z-20 h-full text-5xl" onClick={prev}>
        <GrFormPrevious className=" bg-[#1a1a1a] rounded-3xl hover:brightness-75" />
      </button>
      <button className="absolute right-0 z-20 h-full text-5xl" onClick={next}>
        <GrFormNext className=" bg-[#1a1a1a] rounded-3xl hover:brightness-75" />
      </button>

      <div
        className="flex w-full gap-2 overflow-x-auto scrollbar-hide"
        ref={scrollDivRef}
      >
        {items.map((item) => (
          <div className="relative z-10 flex-shrink-0 w-1/2 xs:w-1/4">
            <img
              src={MOVIE_POSTER_BASE_URL + "w500" + item.image}
              alt="fdff"
              className="rounded-md"
            />

            <p className="absolute bottom-0 font-mono text-white left-0 bg-gradient-to-b from-transparent to-[#151515] w-full px-2">
              {item?.title?.slice(0, 20)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
