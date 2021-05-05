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
  ListMarker,
  ListRow,
} from '../styles/homePanel.js'
function Item() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <ListItem
      as={motion.li}
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
    >
      <ListMarker as={motion.div} layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </ListItem>
  )
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ListRow as={motion.div}></ListRow>
      <ListRow as={motion.div}></ListRow>
      <ListRow as={motion.div}></ListRow>
    </motion.div>
  )
}

const HomePanel = () => {
  const items = [0, 1, 2, 4]
  return (
    <>
      <AnimateSharedLayout>
        <ListWrapper as={motion.ul} layout initial={{ borderRadius: 25 }}>
          {items.map((item) => (
            <Item key={item} />
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
