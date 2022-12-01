import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { LeftWraper } from './style'

const HeaderLeft = memo(() => {
  return (
    <LeftWraper>
      <IconLogo/>
    </LeftWraper>
  )
})

export default HeaderLeft