import Head from "next/head";
import Button from "../components/Button";
import { useRouter } from "next/router";
const About = () => {
  const router = useRouter();
  return (
    <>
    <Head>
      <title>{router.asPath == "/about" ? "About" : "Gigatorb" }</title>
    </Head>
    <div id="about" className="min-h-screen flex flex-col place-content-evenly">
      <h2 className="mt-5 text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
        About <span style={{ color: "#00bffe" }}>Us</span>
      </h2>
      <div className="mt-20 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">
          <img src={"/Images/aboutgigatorb.svg"} alt="about" className="h-full w-full"/>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-center text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          <p className="leading-loose font-sans p-4">
            At Gigatorb, we offer comprehensive assistance for Cúram SPM implementation, 
            customization, and support services that are tailored to meet your specific business requirements. 
            Our implementation services cover everything from configuration and customization to migration, 
            integration, and ongoing support to ensure our clients success with the platform.
          </p>
          <div className="flex flex-row justify-center">
            <a href="#services">
              <Button>Learn More</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
