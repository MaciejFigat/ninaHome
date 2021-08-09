import React from 'react'
import {
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../styles/sectionCards'
const SectionCards = () => {
  return (
    <CardContainer>
      <Card>
        <CardTitle>First Card</CardTitle>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          velit veniam eum recusandae similique excepturi numquam adipisci nemo
          quisquam eos.
        </CardContent>
      </Card>
      <Card>
        <CardTitle>First Card</CardTitle>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          velit veniam eum recusandae similique excepturi numquam adipisci nemo
          quisquam eos.
        </CardContent>
      </Card>
      <Card>
        <CardTitle>First Card</CardTitle>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          velit veniam eum recusandae similique excepturi numquam adipisci nemo
          quisquam eos.
        </CardContent>
      </Card>
    </CardContainer>
  )
}

export default SectionCards
