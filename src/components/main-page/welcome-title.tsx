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

export default WelcomeTitle;
