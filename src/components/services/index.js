import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Photo Curation</ServicesH2>
          <ServicesP>
          Our  service sorts images by quality, composition, and facial expressions, ensuring every moment is captured beautifully
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Album Creation</ServicesH2>
          <ServicesP>
          Our collaborative album creation service empowers users to curate and edit their own photo albums, fostering creativity and personalization
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Event Analytics</ServicesH2>
          <ServicesP>
          Providing organizers with total user image requests, empowering informed decisions for future events
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
