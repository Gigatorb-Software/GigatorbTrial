import Head from "next/head";
import "react-slideshow-image/dist/styles.css";
import "aos/dist/aos.css";
import Button from "../components/Button";
import Contact from "./contacts";
import Service from "./services";
import About from "./about";
import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';

export default function Home({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    }, []);
  return (
    <main className="centre_wr">
      <Head>
        <title>Gigatorb</title>
      </Head>
      <div className="flex flex-row">
       

        <div className="image h-screen-view bg-no-repeat bg-cover w-screen flex justify-center flex-col">
          <h1
            className="text-center text-xl font-bold text-white  sm:text-3xl md:text-5xl lg:text-6xl"
            data-aos="zoom-in"
          >
            Merative Cúram Social Program
            Management (SPM) Implementation Services
          </h1>
          <h6
            className="font mt-5  text-center text-xl text-white "
            data-aos="zoom-in"
          >
            Gigatorb provides complete implementation services for Merative
            Cúram SPM.
            <br /> You can rely on us to offer end-to-end technical skills that
            maximize <br />
            the return on your investment in Merative Cúram SPM.{" "}
          </h6>
          <div className="flex flex-row justify-center mt-4 ">
            <a href="services">
              <Button className="animate__animated animate__bounceInLeft">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
 
       <div>
        <About />
      </div>

   <div>
        <Service />
      </div>

      <div>
        <Contact />
      </div> 
    </main>
  );
}
