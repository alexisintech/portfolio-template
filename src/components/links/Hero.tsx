import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-10">
      <img
        className="m-auto mb-4 w-7/12 rounded-full sm:w-3/12 xl:w-1/5"
        src="/assets/imgs/profile-pic.webp"
        alt="@alexisxdawn Profile Picture | picture of alexisintech | picture of alexisxdawn | picture of Alexis Aguilar"
      />

      <h1 className="text-4xl">Goodluck Lawani</h1>
      <h2 className="text-xl">Software Engineer | Community Leader</h2>
    </div>
  );
};

export default Hero;
