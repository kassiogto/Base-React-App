import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Bitcoin } from 'src/assets'

import {
  Container,
  ContentSlide,
  ContentNews,
  ContentNotices,
  TitleNews,
  ContentList,
  ItemList,
  Date,
} from './styles'

interface MainPageNewsProps {}

const MainPageNews: React.FC<MainPageNewsProps> = (props) => {
  const { t } = useTranslation(['MainPageNews', 'Glossary'])

  const [image, setImage] = useState(
    'https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8yZjU3NjMzMjYyNTUxZGE1NjcyMGJhNzhmMjdlNjVmOC5qcGVn.jpg',
  )

  return (
    <Container>
      <ContentSlide>
        <ContentNews>
          <img src={image} alt="Image notice" />
          <figcaption>
            <h2>
              Sou investidor cripto Sou investidor criptoSou investidor
              criptoSou investidor criptoSou investidor criptoSou investidor
              criptoSou
            </h2>
          </figcaption>
          <footer>
            <TitleNews href="#">{t('lastNews')}</TitleNews>
            <Date>Postado a 5 horas</Date>
          </footer>
        </ContentNews>

        <ContentNotices>
          <h2>{t('recentNews')}</h2>
          <ContentList>
            <ItemList>
              <a href="#">
                Bitcoin caiu 27% nos ultimos dias pela incopetencia da IR dos
                EUA
              </a>
            </ItemList>
            <ItemList>
              <a href="#">
                Bitcoin caiu 27% nos ultimos dias pela incopetencia da IR dos
                EUA
              </a>
            </ItemList>
            <ItemList>
              <a href="#">
                Bitcoin caiu 27% nos ultimos dias pela incopetencia da IR dos
                EUA
              </a>
            </ItemList>
            <ItemList>
              <a href="#">
                Bitcoin caiu 27% nos ultimos dias pela incopetencia da IR dos
                EUA
              </a>
            </ItemList>
            <ItemList>
              <a href="#">
                Bitcoin caiu 27% nos ultimos dias pela incopetencia da IR dos
                EUA
              </a>
            </ItemList>
            <ItemList>
              <a href="#">
                Bitcoin caiu 27% nos ultimos dias pela incopetencia da IR dos
                EUA
              </a>
            </ItemList>
          </ContentList>
        </ContentNotices>
      </ContentSlide>
    </Container>
  )
}

export default MainPageNews
