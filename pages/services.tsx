
import "aos/dist/aos.css";

import Head from "next/head";
import { useRouter } from "next/router";


const Service = () => {
  const router = useRouter();

  const items = [
    {
      imageTle:"Cúram SPM Implementation Services",
      imageSrc: "/curam_logo_1.jpg",
      imageAlt: "mobile ",
      imageContent: "We provide a comprehensive suite of design, development, and implementation services for the Merative Cúram SPM platform, utilizing an agile delivery methodology and either on-site or offshore delivery options. By prioritizing simplicity and scalability in our implementation approach, we can help you achieve significant operational cost savings of up to 30% and effort savings of 30-40%."
    },
    {
      imageTle:"Azure DevOps Services",
      imageSrc: "/Microsoft-Azure.jpg",
      imageAlt: "mobile development",
      imageContent:
        "At Gigatorb, we provide comprehensive Azure Cloud Services that enable you to build cloud-native applications from end to end. Our services cover all aspects of the development lifecycle, including scalability, security, development, testing, and deployment. We'll work with you to select the appropriate services for your needs, and we'll set up pipelines to ensure that the deployment process is both simple and secure, resulting in an efficient and hassle-free experience.",
    },
 
  ];

  return (
 
    
    <div  className="mt-20 min-h-screen flex flex-col place-content-evenly " id="services">
       <Head>
      <title>{router.asPath == "/services" ? "Our Services" :"Gigatorb" }</title>
    </Head>
      <div >
        <h2 className="mt-20 text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold" >
        Our <span  style={{ color: "#00bffe" }}>Services</span>
      </h2>
      {items.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <div >
          <div  className="mt-20 flex mx-auto flex-col sm:flex-row justify-center items-center">
            <div className="w-full sm:w-1/2 p-8"  data-aos="zoom-in" >
              <div className="items-center text-3xl font-bold">
              {item.imageTle}
              </div>
               <div className="mt-4 leading-loose font-sans">
               {item.imageContent}
                </div>
              
            </div>
            <div className="w-full sm:w-1/2 p-8"  data-aos="zoom-in">
              <img src={item.imageSrc} alt="image" height={400} width={600} />
            </div>
          
          </div>
      
          
        </div>
      ))}

     
    </div>
    </div>
  );
};

export default Service;
