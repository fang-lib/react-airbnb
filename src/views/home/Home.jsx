import React, { memo, useEffect } from 'react'
import coverImg from "@/assets/img/cover_01.jpeg"
import { HomeWrapper } from './style'
import { fetchGoodPriceData } from '@/store/modules/home'
import { useDispatch } from 'react-redux'

const Home = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodPriceData())
  }, [])
  return (
    <HomeWrapper>
       <img className="banner" src={coverImg} alt="" />
    </HomeWrapper>
  )
})

export default Home