import React from "react";
import cup from "../assets/cup.png";
// import bean from "../assets/beans.png";

function Hero() {
 

  return (
    <div className="flex justify-center items-center">
      <div className="text-center mb-5">
        <h1 className="text-[#2F2105] text-6xl text-start my-2">
          Enjoy your <span className="text-[#FF902A]">coffee</span>
          <br />
          before your activity
        </h1>
        <h2 className="text-[#7E7D7A] text-start my-2">Boost your productivity and build your <br /> mood with a glass of coffee in the morning </h2>
        <div className="flex justify-center gap-6 mt-3">
          <button className="bg-[#2f2105] text-white px-8 py-3 rounded-lg hover:bg-[#3b2a08] focus:outline-none">
            Order Now
          </button>
          <button className="text-[#FF902A] text-xl font-bold">
            More menu
          </button>
        </div>
      </div>

      <div>
        <img src={cup} alt="cup" width={400} />
      </div>

    </div>
  );
}

export default Hero;
