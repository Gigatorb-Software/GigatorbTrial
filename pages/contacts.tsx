import React,{useEffect}from "react";


import 'aos/dist/aos.css';
import { useRouter } from "next/router";
import Head from "next/head";

const Contact = () => {
  const router = useRouter();
  return (
    <div className= "min-h-screen flex flex-col place-content-evenly" id="contacts">
      <Head>
      <title>{router.asPath == "/contacts" ? "Contact Us":"Gigatorb" }</title>
      <meta name="description" content="Gigatorb Contact Information " />
        <meta
          name="keywords"
          content="Gigatorb, Curam, Merative, Cúram, Social Program
            Management, SPM ,Implementation Services ,Cúram SPM Implementation Services , Cúram SPM Implementation, Merative Cúram , merative cúram spm ,merative spm, merative cúram spm implementation services, Merative Cúram SPM platform"
        />
    </Head>
      <div >
        <h2 className=" text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold" >
          {" "}
          Contact <span style={{ color: "#00bffe" }}>Us</span>
        </h2>
      </div>
      <div className="flex flex-wrap mb-4 flex-row items-center">
        <div className="flex w-full sm:w-1/3  mx-auto flex-col items-center">
          <img src={"/Images/location.svg"} alt="address" data-aos="zoom-in-up"/>
          <div className="font-bold uppercase ...">Addresses</div>
          <div className="capitalize ...">S-201 Gravity Mall, Vijay Nagar, Indore, India</div>
          <div className="capitalize ...">1311 Freeport Drive, Mississauga, Ontario, Canada, L5C 1S5</div>
          
        </div>
        <div className="w-full sm:w-1/3  flex flex-col items-center">
          <img src={"/Images/phone.svg"} height={100} width={100} alt="phone" data-aos="zoom-in-up"/>
          <div className="font-bold uppercase ...">phone</div>
          <div>+91-9893339788</div>
          <div>+1-2896339569</div>
          
        </div>
        <div className="w-full sm:w-1/3   flex flex-col items-center">
          <img src={"/Images/email.svg"} height={100} width={100} alt="email" data-aos="zoom-in-up"/>
          <div className="font-bold uppercase ...">email</div>
          <p>
          <a className="underline" href="mailto:info@gigatorb.com">info@gigatorb.com</a></p>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
