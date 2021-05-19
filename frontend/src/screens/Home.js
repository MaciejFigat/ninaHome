import React from 'react'

import { fitnessData } from '../data/fitness'
import { plansData } from '../data/plans'
import { offerData } from '../data/offer'
import { kettleData } from '../data/bubbles'
import { kettleData2 } from '../data/kettlebells'
import { SectionDiv } from '../styles/sectionStyled'
import kettleParrot from '../assets/kettleParrot.svg'
import kettleParrot2 from '../assets/kettleParrot2.svg'
import parrots2 from '../assets/parrots2.svg'
// import background2 from '../assets/backgrounds/background2.jpg'
// import Panel from '../components/Panel'
// import HomePanel from '../components/HomePanel'
import ParallaxComponent from '../components/animated/ParallaxComponent'
import ParallaxTextBubble from '../components/animated/ParallaxTextBubble'

const Home = () => {
  return (
    <>
      <SectionDiv id='home' backgroundImage={parrots2}>
        {' '}
        <ParallaxTextBubble
          title='Trening medyczny'
          kettleData={kettleData}
        ></ParallaxTextBubble>
        <ParallaxComponent data={offerData} />
      </SectionDiv>
      <SectionDiv id='fitness' backgroundImage={kettleParrot}>
        <ParallaxTextBubble
          title='Przykładowy trening'
          kettleData={kettleData}
        />{' '}
        <ParallaxComponent data={plansData} />
      </SectionDiv>

      <SectionDiv id='plans' backgroundImage={kettleParrot2}>
        {' '}
        <ParallaxComponent data={fitnessData} />
      </SectionDiv>

      <SectionDiv id='training' backgroundImage={kettleParrot2}>
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
    </>
  )
}

export default Home
