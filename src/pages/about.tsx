import Navbar from "../components/navbar/navbar";

const AboutPage = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <p className="text-[30px] my-5">About page</p>
      </div>
    </div>
  );
};

export default AboutPage;
