import React, { memo, useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ScrollViewWrapper } from './style'

import { RightOutlined, LeftOutlined } from '@ant-design/icons'

const ScrollView = memo((props) => {
  const contentRef = useRef()
  const totalDistance = useRef()
  const [ showLeftBtn, setShowLeftBtn ] = useState(false)
  const [ showRightBtn, setShowRightBtn ] = useState(true)
  const [ moveIndex, setMoveIndex ] = useState(0)

  // 右滚动按钮的显示和隐藏(初次渲染的时候)
  useEffect(() => {
    // 一共可以滚动的宽度
    const scrollWidth = contentRef.current.scrollWidth 
    // 本身占据的款第
    const clientWidth = contentRef.current.clientWidth
    totalDistance.current = scrollWidth - clientWidth
    setShowRightBtn(totalDistance.current > 0)
  }, [props.children])

  // 向右滚动
  function handleMove(isRight = true) {
    const newIndex = isRight ? moveIndex + 1 : moveIndex - 1
    const rightDistance = contentRef.current.children[newIndex].offsetLeft
    console.log(contentRef.current.children[newIndex].offsetLeft)
    contentRef.current.style.transform = `translate(-${rightDistance}px)`
    setMoveIndex(newIndex)
    // 当每次渲染的时候去判断按钮是否显示
    setShowRightBtn(totalDistance.current > rightDistance)
    setShowLeftBtn(rightDistance > 0)
  }

  return (
    <ScrollViewWrapper>
      {showLeftBtn && (
        <div className='btn leftBtn' onClick={ e => handleMove(false)}>
          <LeftOutlined />
        </div>
      )
      }
      {showRightBtn && (
        <div className='btn rightBtn' onClick={ e => handleMove()}>
          <RightOutlined />
        </div>
      )}

      <div className='scroll'>
        <div className='content' ref={contentRef}>
          {props.children}
        </div>
      </div>
      
    </ScrollViewWrapper>
  )
})

export default ScrollView