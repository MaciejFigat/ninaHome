import React from 'react'

import { fitnessData } from '../data/fitness'
import { plansData } from '../data/plans'
import { offerData } from '../data/offer'
// import Panel from '../components/Panel'
// import HomePanel from '../components/HomePanel'
import ParallaxComponent from '../components/animated/ParalaxComponent'
import ParallaxTextBubble from '../components/animated/ParallaxTextBubble'
const Home = () => {
  return (
    <>
      <div id='home'>
        {' '}
        <ParallaxTextBubble title='Zdrowy trening' />
      </div>
      <div id='fitness'>
        <ParallaxTextBubble title={fitnessData[0].title} />{' '}
      </div>
      <ParallaxComponent data={fitnessData} />
      <div id='plans'>
        {' '}
        <ParallaxTextBubble title={plansData[0].title} />
      </div>
      <ParallaxComponent data={plansData} />
      <div id='training'>
        {' '}
        <ParallaxTextBubble title={offerData[0].title} />
      </div>
      <ParallaxComponent data={offerData} />
      <div id='ending'>
        {' '}
        <ParallaxTextBubble title='The end' />
      </div>
    </>
  )
}

export default Home
