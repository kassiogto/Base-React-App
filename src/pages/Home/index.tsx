import React from 'react'

import { useSetBrowserTabTitle } from 'src/hooks'

import FooterPageNews from '../Main/FooterPageNews'
import MainPageNews from './MainPageNews'
import PostCardNews from './PostCardNews'
import { Container } from './styles'

const Home: React.FC = () => {
  useSetBrowserTabTitle('default')

  return (
    <Container>
      <MainPageNews />
      <PostCardNews />
      <FooterPageNews />
    </Container>
  )
}

export default Home
