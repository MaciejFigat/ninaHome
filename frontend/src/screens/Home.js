import React from 'react'

import { fitnessData } from '../data/fitness'
import { plansData } from '../data/plans'
import { offerData } from '../data/offer'
import { kettleData } from '../data/bubbles'
import { kettleData2, kettleData3 } from '../data/kettlebells'
import { SectionDiv } from '../styles/sectionStyled'
import kettleParrot from '../assets/kettleParrot.svg'
// import kettleParrot2 from '../assets/kettleParrot2.svg'
import parrots2 from '../assets/parrots2.svg'
// import background2 from '../assets/backgrounds/background2.jpg'
// import Panel from '../components/Panel'
// import HomePanel from '../components/HomePanel'
import ParallaxTextBubble from '../components/animated/ParallaxTextBubble'
import { AnimateSharedLayout } from 'framer-motion'

const Home = () => {
  return (
    <AnimateSharedLayout>
      <SectionDiv id='home' backgroundImage={parrots2}>
        {' '}
        <ParallaxTextBubble
          title='Trening medyczny'
          kettleData={kettleData3}
          data={offerData}
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
          title={offerData[0].title}
          kettleData={kettleData}
        />
      </SectionDiv>

      <SectionDiv id='ending' backgroundImage={kettleParrot}>
        {' '}
        <ParallaxTextBubble title='The end' kettleData={kettleData2} />
      </SectionDiv>
    </AnimateSharedLayout>
  )
}

export default Home
