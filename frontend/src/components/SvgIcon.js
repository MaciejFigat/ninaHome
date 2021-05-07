import React from 'react'
import { SvgContainer } from '../styles/homePanel'

const SvgIcon = ({ width, height, Icon, fillColor }) => {
  return (
    <SvgContainer
      width={width}
      height={height}
      Icon={Icon}
      fillColor={fillColor}
    >
      <Icon />
    </SvgContainer>
  )
}

export default SvgIcon
