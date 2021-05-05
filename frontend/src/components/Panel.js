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

const Panel = ({ id, data, title, subtitle, width, height }) => {
  return (
    <WrapperCentringDiv id={id}>
      <CardH2>{title}</CardH2> <CardP>{subtitle}</CardP>
      <CardWrapper>
        {' '}
        {data.map((example) => (
          <CardProper key={example.id}>
            <StyledImage
              width={width}
              height={height}
              src={example.picture}
              alt='yoga girl'
            />
            <CardH3>{example.title}</CardH3>
            <CardP>{example.description}</CardP>
          </CardProper>
        ))}{' '}
      </CardWrapper>
    </WrapperCentringDiv>
  )
}

export default Panel
