import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import coverImg from "@/assets/img/cover_01.jpeg"
import { HomeWrapper } from './style'
import { fetchGoodPriceData } from '@/store/modules/home'
import SectionTitle from '@/compoents/section-title/section-title'
import SectionRoom from '@/compoents/section-room/section-room'


const Home = memo(() => {
  const { goodPriceData } = useSelector((state) => {
    return {
      goodPriceData: state.home.goodPriceData
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGoodPriceData())
  }, [])
  return (
    <HomeWrapper>
       <img className="banner" src={coverImg} alt="" />
       <div className='home-content'>
        {/* 热门目的地 */}
        <SectionTitle mainTitle={goodPriceData.title}></SectionTitle>
        <SectionRoom list={goodPriceData.list}></SectionRoom>
       </div>
    </HomeWrapper>
  )
})

export default Home