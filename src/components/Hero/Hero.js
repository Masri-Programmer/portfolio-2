import React, { useEffect } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Section row nopadding data-aos="fade-right">
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            A Highly Skilled FullStack Developer familiar with all the new technologies and looking for new opportunities...
          </SectionText>
          <div class="GlobalComponents__ButtonBack-sc-6qzy6y-6 jlrszi">
            <a href="https://drive.google.com/file/d/1SKvLJ960F0huIH-x9beW3hu3R87nUo-b/view?usp=sharing" target="_blank">
              <Button class="GlobalComponents__ButtonFront-sc-6qzy6y-7 evTffm">Download CV</Button>
            </a>
          </div>
        </LeftSection>
      </Section>
    </>
  )
};

export default Hero;