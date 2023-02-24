import React,{useEffect} from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  { number: 15, text: 'Open Source Projects'},
  { number: 10, text: 'Students Taught', },
  { number: 1000, text: 'Days Coding & Learning', },
  { number: '', text: 'Fast & Clean Code', }
];

const Acomplishments = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return(
    <Section  data-aos="fade-right">
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
    )
};

export default Acomplishments;
