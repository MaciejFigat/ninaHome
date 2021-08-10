import React from 'react'
import {
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../styles/sectionCards'
const SectionCards = ({ cardData }) => {
  return (
    <CardContainer>
      {cardData &&
        cardData.map((example) => (
          <Card key={example.id}>
            <CardTitle>{example.title}</CardTitle>
            <CardContent>{example.description}</CardContent>
          </Card>
        ))}
    </CardContainer>
  )
}

export default SectionCards
