import HeroSectionR from "../components/heroSectionR";
import React, { useState } from "react";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";
import Footer from "../components/footer";


export function RegisterPage(){

   const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }

    return( <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSectionR/>
        <Footer />
      </div>
    );

}


