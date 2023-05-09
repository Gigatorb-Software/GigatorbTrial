import Link from 'next/link'
import React from 'react'
//@ts-ignore
const NavLinks = ({onClickHandler}) => {
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
          link: "/services",
          submenu: true ,
          subLinks: [
          {
            title: "curam",
          },
          {
            title: "Spm",
          },
          {
            title: "Azure devops",
          }
        ]
        },
     
        {
            
          title: "Contact Us",
          link: "/contacts"
        },
        
      ]
  return (
    <>
      {menuItems.map((item , index) => (
            
            <li 
            
            key={index} className="md:ml-8 text-xl md:my-0 my-7 mx-4 group">
            <Link
                 onClick={onClickHandler} 
                 href={item.link}
                 className=  "hover:text-[#00bffe] active:bg-[#00bffe]  text-[#0a1a24] flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1  capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out"
               > 
               
                 
                 <span 
                 className="text-lg hover:text-sky-500 text-white">{item.title}</span>
                 
               </Link>
               {item.submenu && 
                <div className='absolute top-15 hidden group-hover:block hover:block '>

                   <div className='py-3'><div className='w-4 h-4 left-3 absolute mt-1 bg-black rotate-45'></div></div>
                  <div className='bg-black md:bg-black p-6' >
                    {
                        item.subLinks.map((subLinks , index )=>(
                            <div key={index}>
                                <span className=" text-lg cursor-pointer hover:text-sky-500 text-white">{subLinks.title}</span>
                            </div>
                        ))
                    }
                  </div>
                </div>
               }
            </li>
            
            
           ) )}
    </>
  )
}

export default NavLinks
