import { Link } from "react-router-dom";

interface NavbarLinkProperties {
  name: string;
  path: string;
}

const NavbarLink = (props: NavbarLinkProperties) => {
  return (
    <Link to={props.path} className="text-[20px]">
      {props.name}
    </Link>
  );
};

export default NavbarLink;
