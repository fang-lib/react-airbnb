import React, { Fragment, memo, useRef, useState } from 'react'
import { RoomItemWrapper } from './style'

import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import { Rate, Carousel  } from 'antd'
import Indicator from '../indicator/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const { item, itemWidth, onItemClick } = props
  const carouselRef = useRef()
  const [activeIndex, setActiveIndex] = useState(0)
  const [showOperation, setShowOperation] = useState(false)

  function handleChangeImg(isNext, e) 
  {
    e.stopPropagation()
    isNext ? carouselRef?.current.next() : carouselRef?.current.prev()
    let newIndex = isNext ? activeIndex + 1: activeIndex - 1
    const length = item.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setActiveIndex(newIndex)
  }

  function handleChange(current) {
    setActiveIndex(current)
  }

  function onClick() {
    if(onItemClick) onItemClick(item)
  }
  return (
    <RoomItemWrapper typeTextColor={item.verify_info.text_color} rateColor={item.star_rating_color} itemWidth={itemWidth} showBtn={showOperation} onClick={onClick}>
      {
        item.picture_urls ? (
          <div className='slider-box' onMouseEnter={e => {setShowOperation(true)}} onMouseLeave={e => {setShowOperation(false)}}>
            {/* 上一张/下一张按钮 */}
            {
              showOperation && (
                <>
                  <div className='btn left-btn' onClick={e => handleChangeImg(false, e)}>
                    <LeftOutlined/>
                  </div>
                  <div className='btn right-btn' onClick={e => handleChangeImg(true, e)}>
                    <RightOutlined/>
                  </div>
                </>
              )
            }
            
            {/* 轮播图 */}
            <Carousel ref={carouselRef} dots={false} afterChange={handleChange}>
              {item.picture_urls.map(url => (
                <img key={url} className='item-img' src={url} alt=''></img>
                ))
              }
            </Carousel>

            {/* 指示器 */}
            <div className='indictor'>
              <Indicator activeIndex={activeIndex}>
                {
                  item.picture_urls.map((url, index) => (
                    <div key={url} className={classNames('item-dot', {'item_active': activeIndex === index})}></div>
                  ))
                }
              </Indicator>
            </div>
          </div> 
        )
        : <img className='item-img' src={item.picture_url} alt=''/>
      }
      <div className='item-type'>{item.verify_info.messages.join(' · ')}</div>
      <div className='item-desc over-ell-two'>{item.name}</div>
      <div className='item-price'>¥{item.price}/晚</div>
      <div className='item-star'>
        <Rate className='item-star_rate' allowHalf value={item.star_rating*1} />
        <span>{item.reviews_count}{item.bottom_info && ` · ${item.bottom_info.content}`}</span>
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem