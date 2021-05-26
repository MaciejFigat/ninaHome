import React from 'react'
import { fitnessData } from '../data/fitness'
import { plansData } from '../data/plans'
import { offerData } from '../data/offer'
import { kettleData } from '../data/bubbles'
import { motivationData } from '../data/motivation'
import { kettleData2, kettleData3 } from '../data/kettlebells'
import { SectionDiv } from '../styles/sectionStyled'
import parrots2 from '../assets/parrots2.svg'
import ParallaxTextBubble from '../components/animated/ParallaxTextBubble'
import ContactIcons from '../components/ContactIcons'
import { AnimateSharedLayout } from 'framer-motion'

const Home = () => {
  return (
    <AnimateSharedLayout>
      <SectionDiv id='home' backgroundImage={parrots2}>
        {' '}
        <ParallaxTextBubble
          pictureID='frog3'
          title='Motywacja do treningu'
          kettleData={kettleData3}
          data={motivationData}
        ></ParallaxTextBubble>
      </SectionDiv>

      <SectionDiv id='fitness' backgroundImage={parrots2}>
        <ParallaxTextBubble
          title='Przykładowy trening'
          kettleData={kettleData}
          data={plansData}
        />{' '}
      </SectionDiv>

      <SectionDiv id='plans' backgroundImage={parrots2}>
        {' '}
        <ParallaxTextBubble
          title={fitnessData[0].title}
          kettleData={kettleData3}
          data={fitnessData}
        />{' '}
      </SectionDiv>

      <SectionDiv id='training' backgroundImage={parrots2}>
        {' '}
        <ParallaxTextBubble
          title='Trening medyczny'
          kettleData={kettleData}
          data={offerData}
        />
      </SectionDiv>

      <SectionDiv id='ending' backgroundImage={parrots2}>
        {' '}
        <ParallaxTextBubble title={<ContactIcons />} kettleData={kettleData2} />
      </SectionDiv>
    </AnimateSharedLayout>
  )
}

export default Home
