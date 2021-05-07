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
  Container,
} from '../styles/homePanel.js'
// import parrots from '../assets/parrots.svg'
import { fitnessData } from '../data/fitness'
import { ReactComponent as Parrots } from '../assets/parrots.svg'
// import SvgComponent from '../components/SvgComponent'
import SvgIcon from '../components/SvgIcon'

function Item({ picture, title, description, svgColor }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <ListItem
      as={motion.li}
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      // <SvgComponent color={svgColor} width='6rem' height='6rem' /> {title}
    >
      <ListTitleContainer as={motion.div}>
        <ListTitle as={motion.h2} layout>
          <Container width={6} height={4}>
            <SvgIcon
              Icon={Parrots}
              width={5.5}
              height={5}
              fillColor={svgColor}
            />{' '}
          </Container>
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
// <SvgComponent color='coral' />
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
              svgColor={item.color}
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
