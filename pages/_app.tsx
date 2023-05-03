import '@/styles/globals.css'

import Header from "../components/Header"
import Footer from "../components/Footer"
import type { AppProps } from 'next/app'
import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    }, []);
  return(  
 <>
  <Header/>
  <Component {...pageProps}/>
  <Footer/>
  </> 
  )
}
