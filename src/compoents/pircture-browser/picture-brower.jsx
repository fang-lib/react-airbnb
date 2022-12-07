import React, { memo, useState } from 'react'
import { useEffect } from 'react'
import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { PictureBrowerWrapper } from './style'
import { Carousel } from 'antd'
import { useRef } from 'react'
import Indicator from '../indicator/indicator'
import classNames from 'classnames'

const PictureBrowser = memo((props) => {
  const { onCancel, list } = props
  const carouselRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  function onCancelClick() {
    if(onCancel) onCancel()
  }

  function handleImgChange(isNext = false) {
    isNext ? carouselRef.current.next() : carouselRef.current.prev()
  }

  function getCurrentIndex(current) {
    setCurrentIndex(current)
  }

  function chooseImg(index) {
    carouselRef.current.goTo(index, true)
    setCurrentIndex(index)
  }
  return (
    <PictureBrowerWrapper>
      {/* 取消按钮 */}
      <div className='cancel-box' onClick={onCancelClick}>
        <CloseOutlined />
      </div>

      {/* 轮播图 */}
      <div className='carousel'>
        <Carousel ref={carouselRef} dots={false} afterChange={getCurrentIndex}>
          {
            list.map(url => (
              <img key={url} className='carousel-img' src={url} alt='' />
            ))
          }
        </Carousel>
      </div>

      {/* 上一张/下一张 */}
      <div className='operation operation-left' onClick={e => handleImgChange()}>
        <LeftOutlined />
      </div>
      <div className='operation operation-right' onClick={e => handleImgChange(true)}>
        <RightOutlined />
      </div>

      {/* 指示器 */}
      <div className='indictor-box'>
        <Indicator activeIndex={currentIndex}>
          {
            list.map((url, index) => (
              <div key={url} className={classNames('indictor-img_box', {'indictor-img_active': currentIndex === index})} onClick={e => chooseImg(index)}>
                <img className='indictor-img' src={url} alt='' />
                <div className='indictor-cover'></div>
              </div>
            ))
          }
        </Indicator>
      </div>
      
    </PictureBrowerWrapper>
  )
})

export default PictureBrowser