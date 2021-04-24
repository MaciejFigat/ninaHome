import React from 'react'
import nina1 from '../assets/nina1.jpg'
import nina2 from '../assets/nina2.jpg'
import mirror from '../assets/mirror.jpg'
import {
  WrapperCentringDiv,
  CardProper,
  StyledImage,
  CardWrapper,
} from '../styles/styled'

import '../styles/home.css'
const Home = () => {
  return (
    <WrapperCentringDiv>
      <h2>Witam na mojej stronie</h2>

      <CardWrapper>
        <CardProper>
          <StyledImage src={nina1} alt='yoga girl' />
        </CardProper>
        <CardProper>
          <StyledImage src={nina2} alt='yoga girl' />
        </CardProper>
        <CardProper>
          <StyledImage src={mirror} alt='yoga girl' />
        </CardProper>
      </CardWrapper>
      <h3>Lubię placki</h3>
    </WrapperCentringDiv>
  )
}

export default Home
