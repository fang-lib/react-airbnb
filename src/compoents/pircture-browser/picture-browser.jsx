import React, { memo, useState } from 'react'
import { useEffect } from 'react'
import { CloseOutlined, LeftOutlined, RightOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import { PictureBrowserWrapper } from './style'
import Indicator from '../indicator/indicator'
import classNames from 'classnames'

const PictureBrowser = memo((props) => {
  const { onCancel, list } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hiddenList, setHiddenList] = useState(false)

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
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = list.length - 1
    if (newIndex > list.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }

  function chooseImg(index) {
    setCurrentIndex(index)
  }
  return (
    <PictureBrowserWrapper hiddenList={hiddenList}>
      {/* 取消按钮 */}
      <div className='cancel-box' onClick={onCancelClick}>
        <CloseOutlined />
      </div>

      {/* 轮播图 */}
      <div className='carousel'>
        <img className='carousel-img' src={list[currentIndex]} alt='' />
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
        <div className='indictor-limit'>
          <div className='indictor-header'>
            <div className='header-num'>{currentIndex + 1}/{list.length}</div>
            <div className='header-text' onClick={e => {setHiddenList(!hiddenList)}}>
              {hiddenList ? '显示' : '隐藏'}照片列表
              {hiddenList? <CaretUpOutlined /> : <CaretDownOutlined />}
            </div>
          </div>
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
      </div>
      
    </PictureBrowserWrapper>
  )
})

export default PictureBrowser