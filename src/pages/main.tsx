import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import WelcomeTitle from "../components/main-page/welcome-title";
import Cards from "../components/main-page/cards.tsx/cards";
import Quote from "../components/main-page/quote";
import Feature1 from "../components/main-page/feature1";

const MainPage = () => {
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-full">
        <Navbar />
        <div className="h-full flex flex-col items-center mt-8">
          <div className="w-[90%] flex ">
            <WelcomeTitle />
            <Cards />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Quote />
          <Feature1 />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
