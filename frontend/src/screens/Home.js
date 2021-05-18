import React from 'react'

import { fitnessData } from '../data/fitness'
import { plansData } from '../data/plans'
import { offerData } from '../data/offer'
import { kettleData } from '../data/bubbles'
import { kettleData2 } from '../data/kettlebells'
import { SectionDiv } from '../styles/sectionStyled'
import kettleParrot from '../assets/kettleParrot.svg'
import kettleParrot2 from '../assets/kettleParrot2.svg'
// import background2 from '../assets/backgrounds/background2.jpg'
// import Panel from '../components/Panel'
// import HomePanel from '../components/HomePanel'
import ParallaxComponent from '../components/animated/ParallaxComponent'
import ParallaxTextBubble from '../components/animated/ParallaxTextBubble'
// backgroundImage={kettleParrot}
const Home = () => {
  return (
    <>
      <SectionDiv id='home' backgroundImage={kettleParrot}>
        {' '}
        <ParallaxTextBubble
          title='Trening medyczny'
          kettleData={kettleData}
        ></ParallaxTextBubble>
        <ParallaxComponent data={offerData} />
      </SectionDiv>
      <SectionDiv id='fitness' backgroundImage={kettleParrot2}>
        <ParallaxTextBubble
          title='Przykładowy trening'
          kettleData={kettleData}
        />{' '}
        <ParallaxComponent data={plansData} />
      </SectionDiv>

      <div id='plans'>
        {' '}
        <ParallaxComponent data={fitnessData} />
      </div>

      <div id='training'>
        {' '}
        <ParallaxTextBubble
          title={offerData[0].title}
          kettleData={kettleData}
        />
      </div>

      <div id='ending'>
        {' '}
        <ParallaxTextBubble title='The end' kettleData={kettleData2} />
      </div>
    </>
  )
}

export default Home
