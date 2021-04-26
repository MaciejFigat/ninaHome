import React from 'react'
import nina1 from '../assets/nina1.jpg'

import { WrapperCentringDiv, CoverImage } from '../styles/styled'
import { fitnessData } from '../data/fitness'
import { plansData } from '../data/plans'
import Panel from '../components/Panel'

const Home = () => {
  return (
    <>
      <WrapperCentringDiv id='home'>
        {' '}
        <h1>Become fit & swole</h1>
        <CoverImage width='60%' height='85%' src={nina1} alt='yoga girl' />
        <h2>Hello</h2>
      </WrapperCentringDiv>
      <Panel
        id='fitness'
        data={fitnessData}
        title='Fitness'
        subtitle='Zdrowe podejście do wysiłku sportowego'
      />
      <Panel
        id='plans'
        data={plansData}
        title='Plany treningowe'
        subtitle='Indywidualne podejście'
      />
      <Panel
        id='training'
        data={fitnessData}
        title='Periodyzacja treningowa'
        subtitle='Różnicowanie natężenia wysiłku fizycznego'
      />
      <Panel
        id='ending'
        data={fitnessData}
        title='Przekrojowe podejście'
        subtitle='Jestem trenerem medycznym i wiem najlepiej.'
      />
    </>
  )
}

export default Home
