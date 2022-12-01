import React, { memo, useEffect } from 'react'
import coverImg from "@/assets/img/cover_01.jpeg"
import { HomeWrapper } from './style'

const Home = memo(() => {
  useEffect(() => {
  }, [])
  return (
    <HomeWrapper>
       <img className="banner" src={coverImg} alt="" />
    </HomeWrapper>
  )
})

export default Home