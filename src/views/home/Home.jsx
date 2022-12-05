import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import coverImg from "@/assets/img/cover_01.jpeg"
import { HomeWrapper } from './style'
import { fetchHomeData } from '@/store/modules/home'
import SectionRoomV1 from './c-cpns/section-room-v1/section-room-v1'
import SeactionRoomV2 from './c-cpns/section-room-v2/section-room-v2'
import { isEmptyObj } from '@/utils/tool'


const Home = memo(() => {
  const { goodPriceData, hightScoreData, recommendData, discountData } = useSelector((state) => {
    return {
      goodPriceData: state.home.goodPriceData,
      hightScoreData: state.home.hightScoreData,
      recommendData: state.home.recommendData,
      discountData: state.home.discountData
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeData())
  }, [])
  return (
    <HomeWrapper>
       <img className="banner" src={coverImg} alt="" />
       <div className='home-content'>
          {isEmptyObj(discountData) && <SeactionRoomV2 value={discountData}></SeactionRoomV2>}
          {isEmptyObj(recommendData) && <SeactionRoomV2 value={recommendData}></SeactionRoomV2>}
          <SectionRoomV1 value={hightScoreData}></SectionRoomV1>
          <SectionRoomV1 value={goodPriceData}></SectionRoomV1>
       </div>
    </HomeWrapper>
  )
})

export default Home