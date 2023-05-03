
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 bg-[#151111] text-black ">
        <div className="flex flex-col items-center p-5">
          <div className="flex flex-row">
            <div className="flex">
              <a href="https://www.gigatorb.com/" >
                <Image src={"/Images/google.png"} height={50} width={50} alt="Google" />
              </a >
            </div>
            <div className="flex " >
              <a href="https://www.linkedin.com/company/gigatorb/mycompany/">
                <Image src={"/Images/linkedin.png"} height={50} width={50} alt="linekdin" />
              </a >
            </div>
            <div className="flex ml-1 mt-1">
              <a href="https://www.instagram.com/gigatorbsoftware/?igshid=YmMyMTA2M2Y%3D">
                <Image src={"/Images/instagram1.png"} height={40} width={40} alt="instagram" />
              </a>
            </div>
            
            
          </div>
          <div className="text-white">Connect with us</div>
          <div className="mt-5 text-white"><h6>Copyright © 2023. Gigatorb Software. All Rights Reserved.</h6>
          <h6>Disclaimer: Cúram, Cúram SPM, etc are proprietary to Merative.</h6></div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
