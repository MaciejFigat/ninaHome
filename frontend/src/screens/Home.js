import React from 'react'
import { fitnessData } from '../data/fitness'
import { plansData } from '../data/plans'
import { offerData } from '../data/offer'
import { kettleData } from '../data/bubbles'
import { motivationData } from '../data/motivation'
import { kettleData2, kettleData3, kettleData0 } from '../data/kettlebells'
import { SectionDiv } from '../styles/sectionStyled'
import ParallaxTextBubble from '../components/animated/ParallaxTextBubble'
import ContactIcons from '../components/ContactIcons'
import { ParallaxBoxTwo } from '../styles/parallaxCompStyled'
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
        <SectionCards />
      </SectionDiv>

      <SectionDiv id='home'>
        {' '}
        <ParallaxTextBubble
          title='Motywacja do treningu'
          kettleData={kettleData0}
          data={motivationData}
        ></ParallaxTextBubble>
      </SectionDiv>

      <SectionDiv id='cardsTwo'>
        <SectionCards />
      </SectionDiv>

      <SectionDiv id='fitness'>
        <ParallaxTextBubble
          title='Przykładowy trening'
          kettleData={kettleData0}
          data={plansData}
        />{' '}
      </SectionDiv>

      <SectionDiv id='cardsThree'>
        <SectionCards />
      </SectionDiv>

      <SectionDiv id='plans'>
        {' '}
        <ParallaxTextBubble
          title={fitnessData[0].title}
          kettleData={kettleData0}
          data={fitnessData}
        />{' '}
      </SectionDiv>

      <SectionDiv id='cardsFour'>
        <SectionCards />
      </SectionDiv>

      <SectionDiv id='training'>
        {' '}
        <ParallaxTextBubble
          title='Trening medyczny'
          kettleData={kettleData0}
          data={offerData}
        />
      </SectionDiv>

      <SectionDiv id='ending'>
        {' '}
        <ParallaxBoxTwo>
          <h1>
            <ContactIcons />
          </h1>
        </ParallaxBoxTwo>
        <ContactForm />
        <ParallaxTextBubble kettleData={kettleData0} />
      </SectionDiv>
    </AnimateSharedLayout>
  )
}

export default Home
