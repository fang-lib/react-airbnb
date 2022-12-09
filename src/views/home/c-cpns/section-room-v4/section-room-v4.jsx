import RoomItem from '@/compoents/room-item/room-item'
import ScrollView from '@/compoents/scroll-view/scroll-view'
import SectionFooter from '@/compoents/section-footer/section-footer'
import SectionTitle from '@/compoents/section-title/section-title'
import React, { memo } from 'react'
import { RoomV4Wrapper } from './style'

const SectionRoomV4 = memo((props) => {
  const { value } = props
  return (
    <RoomV4Wrapper>
      <SectionTitle mainTitle={value.title} secondTitle={value.subtitle}></SectionTitle>
      <ScrollView>
        {
          value.list?.map(item => (
            <RoomItem key={item.id} item={item} itemWidth="20"></RoomItem>
          ))
        }
      </ScrollView>
      <SectionFooter text="显示更多plus房源" isOtherColor={true}></SectionFooter>
    </RoomV4Wrapper>
  )
})

export default SectionRoomV4