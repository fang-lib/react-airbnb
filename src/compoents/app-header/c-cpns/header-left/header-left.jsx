import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWraper } from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function toRedirect() {
    navigate('/')
  }
  return (
    <LeftWraper onClick={toRedirect}>
      <IconLogo/>
    </LeftWraper>
  )
})

export default HeaderLeft