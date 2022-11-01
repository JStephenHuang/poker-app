import { IoIosLogIn } from "react-icons/io";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Link to="/login" className="signin-bubble">
      <IoIosLogIn size={24} />
    </Link>
  );
};

export default SignIn;
