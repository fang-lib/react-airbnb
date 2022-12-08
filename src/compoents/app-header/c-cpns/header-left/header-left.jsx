import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWraper } from './style'

const HeaderLeft = memo((props) => {
  const { background } = props


  const navigate = useNavigate()
  function toRedirect() {
    navigate('/')
  }
  return (
    <LeftWraper  background={background} onClick={toRedirect}>
      <IconLogo/>
    </LeftWraper>
  )
})

export default HeaderLeft