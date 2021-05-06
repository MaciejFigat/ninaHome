import React, { useState } from 'react'
import nina1 from '../assets/nina1.jpg'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import {
  WrapperCentringDiv,
  CardWrapper,
  CardProper,
  CoverImage,
  CardH3,
  CardH2,
} from '../styles/styled'
import {
  ListWrapper,
  ListItem,
  ListTitle,
  ListTitleContainer,
  ListRow,
  ListImage,
} from '../styles/homePanel.js'
import parrots from '../assets/parrots.svg'
import { fitnessData } from '../data/fitness'

function Item({ picture, title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <ListItem
      as={motion.li}
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
    >
      <ListTitleContainer as={motion.div}>
        <ListImage
          src={parrots}
          as={motion.img}
          width='23%'
          height='3%'
          layout
        />

        <ListTitle as={motion.h2} layout>
          {title}
        </ListTitle>
      </ListTitleContainer>

      <AnimatePresence>
        {isOpen && (
          <Content picture={picture} title={title} description={description} />
        )}
      </AnimatePresence>
    </ListItem>
  )
}

function Content({ picture, title, description }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ListRow as={motion.div}>{description}</ListRow>
    </motion.div>
  )
}
// <ListRow as={motion.div}>
//         <img src={picture} alt='ilustration' />
//       </ListRow>
//       <ListRow as={motion.div}>{title}</ListRow>
//  <CoverImage src={item.picture} alt='ilustration' />
const HomePanel = () => {
  return (
    <>
      <AnimateSharedLayout>
        <ListWrapper as={motion.ul} layout initial={{ borderRadius: 25 }}>
          {fitnessData.map((item) => (
            <Item
              key={item.id}
              picture={item.picture}
              title={item.title}
              description={item.description}
            />
          ))}
        </ListWrapper>{' '}
      </AnimateSharedLayout>
      <WrapperCentringDiv id='home'>
        {' '}
        <CardWrapper>
          <CardProper>
            <CoverImage
              width='100%'
              height='100%'
              src={nina1}
              alt='yoga girl'
            />
          </CardProper>
          <CardH2>Trener medyczny certyfikowany przez Blackroll</CardH2>
          <CardProper>
            <CardH3>
              Specjalizuję się w wielopłaszczyznowych treningach oraz
              eliminowaniu słabych ogniw układu ruchu.
            </CardH3>
          </CardProper>

          <CardH2>Doświadczenie i&nbsp;szkolenia</CardH2>

          <CardProper>
            <CoverImage
              width='100%'
              height='100%'
              src={nina1}
              alt='yoga girl'
            />
          </CardProper>
          <CardProper>
            <CardH3>
              Pracuję w TI HealthClub oraz studiuję Fizjoterapię na AWF w
              Warszawie.
            </CardH3>
          </CardProper>
        </CardWrapper>
      </WrapperCentringDiv>
    </>
  )
}

export default HomePanel
