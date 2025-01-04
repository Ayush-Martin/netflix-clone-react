import { EmailForm } from "../components";

const Hero = () => {
  return (
    <div className="justify-center flex-grow w-full py-12 mt-10 px-7 sm:px-40 md:px-60 lg:px-80 bg-opacity-55 bg-gradient-to-t from-black to-transparent">
      <h1 className="text-3xl font-bold text-center text-white lg:text-5xl font-netflix">
        Unlimited movies,<br></br> TV shows and more
      </h1>
      <p className="mt-4 font-medium text-center text-white">
        Starts at ₹149. Cancel at any time.
      </p>

      <EmailForm />
    </div>
  );
};

export default Hero;
