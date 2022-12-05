import SectionControl from '@/compoents/section-control/section-control'
import SectionFooter from '@/compoents/section-footer/section-footer'
import SectionRoom from '@/compoents/section-room/section-room'
import SectionTitle from '@/compoents/section-title/section-title'
import React, { memo, useCallback, useState } from 'react'
import { RoomV2Wrapper } from './style'

const SeactionRoomV2 = memo((props) => {
  const { value } = props
  const [tabName, setTabName] = useState(value.dest_address[0].name)
  const changeTabName = useCallback((name) => {
    setTabName(name)
  }, [])
  return (
    <RoomV2Wrapper>
      <SectionTitle mainTitle={value.title}></SectionTitle>
      <SectionControl list={value.dest_address?.map(item => item.name)} changeTabName={changeTabName}></SectionControl>
      <SectionRoom list={value.dest_list?.[tabName]} itemWidth={'33.33'}></SectionRoom>
      <SectionFooter text={`显示更多${tabName}房源`} isOtherColor={true}></SectionFooter>
    </RoomV2Wrapper>
  )
})

export default SeactionRoomV2