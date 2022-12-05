import React, { memo } from 'react'
import { RoomItemWrapper } from './style'
import { Rate } from 'antd'

const RoomItem = memo((props) => {
  const { item, itemWidth } = props
  return (
    <RoomItemWrapper typeTextColor={item.verify_info.text_color} rateColor={item.star_rating_color} itemWidth={itemWidth}>
      <img className='item-img' src={item.picture_url} alt=''/>
      <div className='item-type'>{item.verify_info.messages.join(' · ')}</div>
      <div className='item-desc over-ell-two'>{item.name}</div>
      <div className='item-price'>￥{item.price}/晚</div>
      <div className='item-star'>
        <Rate className='item-star_rate' allowHalf value={item.star_rating*1} />
        <span>{item.reviews_count}{item.bottom_info && ` · ${item.bottom_info.content}`}</span>
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem