import React from 'react'
import { fitnessData } from '../data/fitness'
import { plansData } from '../data/plans'
import { offerData } from '../data/offer'
import { motivationData } from '../data/motivation'
import { SectionDiv } from '../styles/sectionStyled'
import ParallaxTextBubble from '../components/animated/ParallaxTextBubble'
import ContactForm from '../components/ContactForm'
import { AnimateSharedLayout } from 'framer-motion'
import SvgAnimated from '../components/animated/SvgAnimated'
import SectionCards from '../components/SectionCards'
const Home = () => {
  return (
    <AnimateSharedLayout>
      <SectionDiv id='beginning'>
        <SvgAnimated />
      </SectionDiv>
      <SectionDiv id='cardsOne'>
        <SectionCards cardData={motivationData} />
      </SectionDiv>

      <SectionDiv id='home'>
        {' '}
        <ParallaxTextBubble
          title='Motywacja do treningu'
          data={motivationData}
        ></ParallaxTextBubble>
      </SectionDiv>

      <SectionDiv id='cardsTwo'>
        <SectionCards cardData={offerData} />
      </SectionDiv>

      <SectionDiv id='fitness'>
        <ParallaxTextBubble title='Przykładowy trening' data={offerData} />{' '}
      </SectionDiv>

      <SectionDiv id='cardsThree'>
        <SectionCards cardData={fitnessData} />
      </SectionDiv>

      <SectionDiv id='plans'>
        {' '}
        <ParallaxTextBubble
          title={fitnessData[0].title}
          data={fitnessData}
        />{' '}
      </SectionDiv>

      <SectionDiv id='cardsFour'>
        <SectionCards cardData={offerData} />
      </SectionDiv>

      <SectionDiv id='training'>
        {' '}
        <ParallaxTextBubble
          title='Trening medyczny'
          // kettleData={kettleData0}

          data={plansData}
        />
      </SectionDiv>

      <SectionDiv id='ending'>
        {' '}
        <ContactForm />
      </SectionDiv>
    </AnimateSharedLayout>
  )
}

export default Home
