import  Link from "next/link"
import {  useState } from "react";
import logo2 from "../public/Images/gigatorb1new1.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


import NavLinks from "./NavLinks";



const Header = () =>{

    
   
    const [open,setOpen] = useState(false);

    function clickHandler(){
      setOpen(!open);
    }
    return(
        <div className="bg-[#000000] flex flex-row justify-between items-center sticky top-0 z-50 ">
      
        <Link href ="/">
          <img
            className="w-52 h-33 cursor-pointer"
            src={"/Images/gigatorb1new1.png"}
            
            alt='logo' />
            </Link>
       
        <div className=""> 
          <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden">
             {open ? <CloseIcon style={{color:"white"}} /> : <MenuIcon style={{color:"white"}}/>} 
            
            </div>
          <ul className= {`md:flex md:item-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:width-auto
          md:pl-0 pd-9 transition-all duration-500 ease-in ${open ?'top-10 opacity-100 ':'top-[-450px] md:opacity-100 opacity-0'}`}>
          <NavLinks onClickHandler={clickHandler} />
          </ul>
        </div>
        </div>
       
    
    )
}
export default Header 