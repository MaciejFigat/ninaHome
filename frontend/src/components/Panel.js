import React from 'react'
import {
  WrapperCentringDiv,
  CardProper,
  StyledImage,
  CardWrapper,
  CardH3,
  CardH2,
  CardP,
} from '../styles/styled'

const Panel = ({ id, data, title, subtitle }) => {
  return (
    <WrapperCentringDiv id={id}>
      <CardH2>{title}</CardH2>{' '}
      <CardWrapper>
        {' '}
        {data.map((example) => (
          <CardProper key={example.id}>
            <StyledImage
              width='100%'
              height='63%'
              src={example.picture}
              alt='yoga girl'
            />
            <CardH3>{example.title}</CardH3>
            <CardP>{example.description}</CardP>
          </CardProper>
        ))}{' '}
      </CardWrapper>
      <CardP>{subtitle}</CardP>
    </WrapperCentringDiv>
  )
}

export default Panel
