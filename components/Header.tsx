import  Link from "next/link"
import {  useState } from "react";
// import logo2 from "../../Assets/Images/gigatorb1new1.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";



const Header = () =>{
    
    const menuItems = [
      {
        title: "Home",
        link: "/"
      },
      {
        title: "About Us",
        link: "/about"
      },
      {
        title: "Services",
        link: "/services"
      },
   
      {
        title: "Contact Us",
        link: "/contacts"
      },
      
    ]
    const [open,setOpen] = useState(false);
    return(
        <div className="bg-[#000000] flex flex-row justify-between items-center sticky top-0 z-50 ">
        {/* <div className=""> */}
        <Link href ="/">
          <img
            className="w-52 h-33 cursor-pointer"
            src={"/Images/gigatorb1new1.png"}
            
            alt='logo' />
            </Link>
        {/* </div> */}
        <div className="">
          
          <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden">
             {open ? <CloseIcon style={{color:"white"}} /> : <MenuIcon style={{color:"white"}}/>} 
            
            </div>
          <ul className= {`md:flex md:item-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:width-auto
          md:pl-0 pd-9 transition-all duration-500 ease-in ${open ?'top-10 opacity-100 mr-10 ':'top-[-450px] md:opacity-100 opacity-0'}`}>
            {menuItems.map((item, index) => 
            (
              <li key={index} className="md:ml-8 text-xl md:my-0 my-7 mx-4">
                <Link
                  href={item.link} 
                  //href={item.link}
                  onClick={()=>setOpen(!open)}
                  className=  "hover:text-[#00bffe] active:bg-[#00bffe]  text-[#0a1a24] flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1  capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out"
                >
                  
                  <span className="text-white text-lg">{item.title}</span>
                </Link>
              </li>
            )
            )}
          </ul>
        </div>
        </div>
       
    
    )
}
export default Header 