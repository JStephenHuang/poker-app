import Navbar from "../navbar/navbar";
import Cards from "./cards";

import AnchorLink from "react-anchor-link-smooth-scroll";

const WelcomeTitle = () => {
  return (
    <div className="w-[40%] flex flex-col">
      <div className="text-start">
        <p className="text-[4.5rem] font-bold">Welcome to FullHouse Poker 🃞</p>
      </div>
      <hr className="my-8" />
      <p className="text-[20px] font-medium mt-5">
        World's biggest online poker website.
      </p>
      <AnchorLink href="#quote" className="main-button mt-8">
        See more
      </AnchorLink>
    </div>
  );
};

const Quote = () => {
  return (
    <div id="quote" className="w-[50%] flex items-center py-[10rem]">
      <div className="border-b-2 border-t-2 border-white text-center">
        <p className="text-[24px] p-5">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore
          harum exercitationem maiores quam repudiandae minima doloribus
          asperiores dolorum rem eaque repellat maxime, iusto doloremque quos et
          error mollitia possimus."
        </p>
      </div>
    </div>
  );
};

const Feature1 = () => {
  return (
    <div className="w-full h-[50rem] px-5 flex mb-[5rem] mt-[10rem]">
      <div className="w-1/2 flex flex-col items-center">
        <h1 className="text-[32px] font-semibold mb-5">How To Play</h1>
        <div className="flex flex-col items-center text-[24px] w-full">
          <p>1. Sign Up</p>
          <p>2. Put Money In</p>
          <p>3. Have Fun</p>
        </div>
      </div>
      <div className="w-1/2 bg-white h-full"></div>
    </div>
  );
};

const Feature2 = () => {
  return (
    <div className="w-full h-[50rem] flex mt-[10rem]">
      <div className="w-1/2 bg-white h-full"></div>
      <div className="w-1/2 flex flex-col items-center">
        <h1 className="text-[32px] font-semibold mb-5">
          Why FrontHouse Poker?
        </h1>
        <div className="flex flex-col items-center text-[24px] w-full">
          <p>1. Sign Up</p>
          <p>2. Put Money In</p>
          <p>3. Have Fun</p>
        </div>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-full">
        <Navbar />
        <div className="h-full flex flex-col items-center mt-8">
          <div className="w-[90%] flex">
            <WelcomeTitle />
            <Cards />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Quote />
          <Feature1 />
          <Feature2 />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
