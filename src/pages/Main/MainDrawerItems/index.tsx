import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  FiBarChart,
  FiPieChart,
  FiMonitor,
  FiBarChart2,
  FiHexagon,
} from 'react-icons/fi'

import { DrawerItem } from 'src/components'

import useCheckIfSelected from './useCheckIfSelected'
import { Container, Group, GroupLabel } from './styles'

const MainDrawerItems: React.FC = () => {
  const { t } = useTranslation('Main')
  const handleCheckIfSelected = useCheckIfSelected()

  return (
    <Container>
      <Group>
        <GroupLabel>{t('labels.general')}</GroupLabel>

        <DrawerItem
          to="/"
          text={t('drawer.Home')}
          iconComponent={<FiPieChart />}
          selected={handleCheckIfSelected('/', true)}
        />
      </Group>
    </Container>
  )
}

export default MainDrawerItems
