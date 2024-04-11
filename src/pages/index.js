import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="Subtle Moments Captured"
        title="Interactive Event Albums"
        text="Engage with your event like never before - browse, contribute, and cherish moments captured by professionals and fellow attendees on our intuitive platform."
        btnText="Explore"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle=" Explore Every Moment"
        title="Discover Memories"
        text="uncover hidden gems and relive the joy of every laugh, smile, and embrace captured by our community of photographers and attendees."
        btnText="Discover"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle="Explore Our Full Suite of Features"
        title="Endless Possibilities Await"
        text="Dive into a realm of creativity with our real-time photo filters, adding flair to every snapshot. Personalize your memories with bespoke event-themed frames, transforming photos into timeless keepsakes"
        btnText="Soon"
      />
      <Footer />
    </>
  );
};
