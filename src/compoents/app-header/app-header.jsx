import React, { memo } from 'react'
import HeaderCenter from './c-cpns/header-center/header-center'
import HeaderLeft from './c-cpns/header-left/header-left'
import HeaderRight from './c-cpns/header-right/header-right'
import { HeaderWrapper } from './style'

const AppHeader = memo((props) => {
  const { isFixed = true, background, headerCenter } = props

  return (
    <HeaderWrapper isFixed={isFixed} background={background}>
      <HeaderLeft background={background}></HeaderLeft>
      {
        headerCenter || <HeaderCenter></HeaderCenter>
      }
      
      <HeaderRight background={background}></HeaderRight>
    </HeaderWrapper>
  )
})

export default AppHeader