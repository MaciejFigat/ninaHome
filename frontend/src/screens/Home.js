import React from 'react'

import { fitnessData } from '../data/fitness'
import { plansData } from '../data/plans'
import { offerData } from '../data/offer'
import Panel from '../components/Panel'
import HomePanel from '../components/HomePanel'

const Home = () => {
  return (
    <>
      <HomePanel />
      <Panel
        id='fitness'
        data={fitnessData}
        title='Fitness'
        subtitle='Zdrowe podejście do wysiłku sportowego'
        width='100%'
        height='60%'
      />
      <Panel
        id='plans'
        data={offerData}
        title='Plany treningowe'
        subtitle='Indywidualne podejście'
        width='100%'
        height='60%'
      />
      <Panel
        id='training'
        data={plansData}
        title='Periodyzacja treningowa'
        subtitle='Różnicowanie natężenia wysiłku fizycznego'
        width='100%'
        height='60%'
      />
      <Panel
        id='ending'
        data={fitnessData}
        title='Przekrojowe podejście'
        subtitle='Jestem trenerem medycznym i wiem najlepiej.'
        width='60%'
        height='60%'
      />
    </>
  )
}

export default Home
