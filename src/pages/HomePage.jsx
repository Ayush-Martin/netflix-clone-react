import { signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useNavigate } from "react-router-dom";
import { Header, Logo, Button, Carousel, Footer } from "../components";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../utils/api";
import { useState, useEffect } from "react";
import { MOVIE_POSTER_BASE_URL } from "../constants/TMDBApi";
import { FOOTER_ITEMS_LANDING } from "../constants/footer";

const HomePage = () => {
  const navigate = useNavigate();
  const [popularMovieList, setPopularMovieList] = useState([]);
  const [topRatedMovieList, setTopRatedMovieList] = useState([]);
  const [trendingMovieList, setTrendingMovieList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const popularMovieData = await getPopularMovies();
      const topRatedMovieData = await getTopRatedMovies();
      const trendingMovieData = await getTrendingMovies();

      setPopularMovieList(popularMovieData);
      setTopRatedMovieList(topRatedMovieData);
      setTrendingMovieList(trendingMovieData);
    };

    getData();

    getPopularMovies();
  }, []);

  const signout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className=" h-[520px] relative">
        <div className="w-full h-full ">
          <img
            src={
              MOVIE_POSTER_BASE_URL +
              "original" +
              popularMovieList[0]?.backdrop_path
            }
            alt=""
            className="object-cover w-full h-[520px]"
          />
        </div>

        <div className="absolute top-0 w-full h-full">
          <Header className={"px-7"}>
            <div className="flex gap-5">
              <Logo className={"w-20 md:w-28"} />
              <div className="flex justify-between w-full">
                <ul className="flex gap-2 text-white">
                  <li>hello</li>
                  <li>hello</li>
                  <li>hello</li>
                  <li>hello</li>
                </ul>
                <Button
                  text="Sign Out"
                  className={"bg-red-600 text-white text-sm py-1 px-2"}
                  onClickHandle={signout}
                />
              </div>
            </div>
          </Header>
        </div>

        <div className="absolute top-[270px] w-full text-white px-10">
          <p className="font-mono text-[15px] tracking-widest">SHOW</p>
          <h1 className="w-1/2 mt-2 text-4xl font-bold sm:text-5xl md:text-6xl">
            {popularMovieList[0]?.title}
          </h1>

          <div className="flex gap-1 mt-2">
            <Button
              text="play"
              className={
                "bg-white text-black text-[14px] py-1 px-5 font-semibold mt-3"
              }
            />
            <Button
              text="play"
              className={
                "bg-opacity-50 bg-[#555150] text-[14px] text-white py-1 px-5 font-medium mt-3"
              }
            />
          </div>
        </div>

        <div className="w-full absolute top-[456px] h-16 bg-gradient-to-b from-transparent to-[#151515]"></div>
      </div>

      <div className=" bg-[#151515] px-3 md:px-20 lg:px-32 py-10">
        <div>
          <p className="mb-2 text-lg text-white ">Popular movies</p>
          <Carousel
            items={popularMovieList.map((movie) => {
              return { image: movie.backdrop_path, title: movie.title };
            })}
          />
        </div>

        <div className="mt-6">
          <p className="mb-2 text-lg text-white ">Top rated movies</p>
          <Carousel
            items={topRatedMovieList.map((movie) => {
              return { image: movie.backdrop_path, title: movie.title };
            })}
          />
        </div>

        <div className="mt-6">
          <p className="mb-2 text-lg text-white ">Trending movies</p>
          <Carousel
            items={trendingMovieList.map((movie) => {
              return { image: movie.backdrop_path, title: movie.title };
            })}
          />
        </div>
      </div>

      <Footer
        items={FOOTER_ITEMS_LANDING}
        className={"bg-[#151515] text-white"}
      />
    </>
  );
};

export default HomePage;
