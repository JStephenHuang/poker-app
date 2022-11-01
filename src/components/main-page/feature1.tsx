const Feature1 = () => {
  return (
    <div className="w-[90%] h-[45rem] flex mt-[10rem]">
      <div className="w-[50%] flex flex-col text-center">
        <div className="flex flex-col items-center">
          <p className="text-[36px] font-semibold">Have not signed up yet? </p>
          <button className="main-button my-5">Register</button>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[36px] font-semibold">Go spends some money!</p>
          <button className="main-button mt-5">Log in</button>
        </div>
      </div>
      <div className="w-[50%] rounded-lg bg-white"></div>
    </div>
  );
};

export default Feature1;
