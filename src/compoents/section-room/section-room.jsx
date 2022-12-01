import React, { memo } from 'react'
import RoomItem from '../room-item/room-item'
import { RoomWrapper } from './style'

const SectionRoom = memo((props) => {
  const { list } = props
  return (
    <RoomWrapper>
      {
        list?.slice(0, 8).map((item, index) => (
          <RoomItem item={item} key={index}></RoomItem>
        ))
      }
    </RoomWrapper>
  )
})

export default SectionRoom