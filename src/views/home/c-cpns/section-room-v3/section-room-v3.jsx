import AddressItem from '@/compoents/address-item/address-item'
import ScrollView from '@/compoents/scroll-view/scroll-view'
import SectionTitle from '@/compoents/section-title/section-title'
import React, { memo } from 'react'
import { RoomV3Wrapper } from './style'

const SectionRoomV3 = memo((props) => {
  const { value } = props
  console.log(value.list)
  return (
    <RoomV3Wrapper>
      <SectionTitle mainTitle={value.title} secondTitle={value.subtitle}></SectionTitle>
      <ScrollView>
        {
          value.list.map((item, index) => (
            <AddressItem key={index} item={item}></AddressItem>
          ))
        }
      </ScrollView>
    </RoomV3Wrapper>
  )
})

export default SectionRoomV3