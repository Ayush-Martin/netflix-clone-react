import {
  Header,
  Logo,
  Footer,
  Hero,
  DropDown,
  Button,
  Carousel,
  Card,
  BackgroundImage,
  Accordions,
  EmailForm,
} from "../components";
import cardItems from "../constants/cardItems";
import accordionItems from "../constants/accordionItems";
import { FOOTER_ITEMS_LANDING } from "../constants/footer";
import {
  PLACE_OPTIONS_DROPDOWNS,
  SHOW_OPTIONS_DROPDOWNS,
} from "../constants/dropDowns";
import { getPopularMovies, getTopRatedMovies } from "../utils/api";

import { TbLanguage } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SigninPage = () => {
  const navigate = useNavigate();
  const [popularMovieList, setPopularMovieList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPopularMovies();
      setPopularMovieList(data);
    };

    getData();
  }, []);

  console.log("DSD", popularMovieList);

  return (
    <>
      <div className="relative w-full ">
        <BackgroundImage className={"h-[550px] object-cover"} />

        <div className="absolute top-0 flex flex-col w-full h-[550px]">
          <Header
            className={
              "bg-gradient-to-b from-black to-transparent bg-transparent px-4  md:px-32 "
            }
          >
            <div className="flex justify-between h-7">
              <Logo className={"w-20 md:w-28"} />
              <div className="flex gap-2">
                <DropDown className={"w-2/3"}>
                  <TbLanguage />
                </DropDown>

                <Button
                  className="flex-none w-1/3  text-white bg-red-600 text-[12px] font-medium px-2"
                  text="Sign In"
                  onClickHandle={() => navigate("/login")}
                />
              </div>
            </div>
          </Header>

          <Hero />
        </div>
      </div>
      <div className="px-3 md:px-20 lg:px-32 bg-black text-[#b3b3b3] text-[14px] h-full">
        <h3 className="mb-3 text-lg font-medium text-white">Trending Now</h3>

        <div className="flex gap-2 pb-6">
          <DropDown options={PLACE_OPTIONS_DROPDOWNS} />
          <DropDown options={SHOW_OPTIONS_DROPDOWNS} />
        </div>

        <Carousel
          items={popularMovieList.map((movie) => {
            return { image: movie.poster_path };
          })}
        />

        <h3 className="text-lg font-medium text-white mt-9 ">
          More Reasons To Join
        </h3>

        <div className="grid gap-3 mt-4 md:grid-cols-2 lg:grid-cols-4">
          {cardItems.map((card) => (
            <Card title={card.title} text={card.text} image={card.image} />
          ))}
        </div>

        <h3 className="text-lg font-medium text-white mt-9 ">
          Frequently Asked Questions
        </h3>

        <Accordions items={accordionItems} />

        <div className="pb-2 mt-6 md:px-32">
          <EmailForm />
        </div>
      </div>
      <Footer
        items={FOOTER_ITEMS_LANDING}
        className={" bg-black text-[#b3b3b3] "}
      />
    </>
  );
};

export default SigninPage;
