import React, { memo } from 'react'

import SectionTitle from '@/compoents/section-title/section-title'
import SectionRoom from '@/compoents/section-room/section-room'
import { RoomV1Wrapper } from './style'
import SectionFooter from '@/compoents/section-footer/section-footer'

const SectionRoomV1 = memo((props) => {
  const { value } = props
  return (
    <RoomV1Wrapper>
      <SectionTitle mainTitle={value.title}></SectionTitle>
      <SectionRoom list={value.list} itemWidth={'25'}></SectionRoom>
      <SectionFooter text='显示更多' isOtherColor={false}></SectionFooter>
    </RoomV1Wrapper>
  )
})

export default SectionRoomV1