import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import coverImg from "@/assets/img/cover_01.jpeg"
import { HomeWrapper } from './style'
import { fetchHomeData } from '@/store/modules/home'
import SectionRoomV1 from './c-cpns/section-room-v1/section-room-v1'
import SectionRoomV2 from './c-cpns/section-room-v2/section-room-v2'
import { isEmptyObj } from '@/utils/tool'
import SectionRoomV3 from './c-cpns/section-room-v3/section-room-v3'
import SectionRoomV4 from './c-cpns/section-room-v4/section-room-v4'
import AppHeader from '@/compoents/app-header/app-header'


const Home = memo(() => {
  const { goodPriceData, hightScoreData, recommendData, discountData, longForData, homePlusData } = useSelector((state) => {
    return {
      goodPriceData: state.home.goodPriceData,
      hightScoreData: state.home.hightScoreData,
      recommendData: state.home.recommendData,
      discountData: state.home.discountData,
      longForData: state.home.longForData,
      homePlusData: state.home.homePlusData
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeData())
  }, [])
  return (
    <HomeWrapper>
      <AppHeader></AppHeader>
      <img className="banner" src={coverImg} alt="" />
      <div className='home-content'>
        {isEmptyObj(discountData) && <SectionRoomV2 value={discountData}></SectionRoomV2>}
        {isEmptyObj(recommendData) && <SectionRoomV2 value={recommendData}></SectionRoomV2>}
        {isEmptyObj(longForData) && <SectionRoomV3 value={longForData}></SectionRoomV3>}
        {isEmptyObj(hightScoreData) && <SectionRoomV1 value={hightScoreData}></SectionRoomV1>}
        {isEmptyObj(goodPriceData) && <SectionRoomV1 value={goodPriceData}></SectionRoomV1>}
        {isEmptyObj(homePlusData) && <SectionRoomV4 value={homePlusData}></SectionRoomV4>}
      </div>
    </HomeWrapper>
  )
})

export default Home