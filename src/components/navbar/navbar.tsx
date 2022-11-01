import Logo from "./logo";
import SignIn from "./singin-button";
import { useParams } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[15%] flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-between">
        <div className="h-full">
          <Logo />
        </div>
        <div className="group flex items-center">
          <p className="transition-all group-hover:mr-1 font-bold text-[20px] mr-3">
            SIGN IN
          </p>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
