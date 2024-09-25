import React from "react";
import CarPng from "../../assets/car1.png";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate()

  const handleToChange = (e) => {
 
    navigate("/list");
    window.location.scrollTo(0,0)

  }

  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, magnam! Tenetur odio quo et maxime?
              </p>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </p>
              <button onClick={handleToChange} data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 ">
      <header className="">
        <h1 className="text-3xl font-bold text-center">Overview of the Car Industry & Reliance's Role</h1>
      </header>

      <section id="car-industry" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Global Car Industry</h2>
        <p className="mb-4">
          The car industry is one of the largest industries globally, encompassing a wide range of businesses involved in the design, development, manufacturing, marketing, and selling of motor vehicles. It is a significant driver of economic growth in many countries, contributing trillions of dollars annually to the global economy.
        </p>
        <p className="mb-4">
          In recent years, the industry has undergone tremendous change due to the advent of electric vehicles (EVs), autonomous driving technologies, and an increased focus on sustainability. Major companies like Tesla, Toyota, and Volkswagen are leading the charge in innovation, aiming to redefine the future of transportation.
        </p>
        <p className="mb-4">
          The car industry also has a far-reaching impact on related sectors like energy, steel, and technology, influencing jobs, research, and global markets.
        </p>
      </section>

      <section id="reliance" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Reliance's Influence</h2>
        <p className="mb-4">
          Reliance Industries, an Indian conglomerate led by Mukesh Ambani, has been a major player in multiple industries, including energy, telecommunications, and retail. In recent years, the company has shown interest in entering the electric vehicle (EV) space as part of its larger push towards green energy and sustainable initiatives.
        </p>
        <p className="mb-4">
          Reliance has announced partnerships and investments in the EV ecosystem, including battery manufacturing and charging infrastructure. These efforts align with India’s vision to accelerate the adoption of EVs and reduce the country's carbon footprint.
        </p>
        <p className="mb-4">
          Through its energy and petrochemical businesses, Reliance is also positioned to play a significant role in supporting the automotive industry by supplying essential raw materials and energy solutions.
        </p>
      </section>

      <footer className="mt-8 text-center">
        <p>&copy; Car Industry Insights. All Rights Reserved.</p>
      </footer>
    </div>


    </div>
  );
};

export default About;
