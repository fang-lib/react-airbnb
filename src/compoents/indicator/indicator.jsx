import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { activeIndex } = props
  const indicatorRef = useRef()

  useEffect(() => {
    // 滚动到中间距离计算
    const clientWidth = indicatorRef.current.clientWidth
    const scrollWidth = indicatorRef.current.scrollWidth
    const itemWidth = indicatorRef.current.children[activeIndex].clientWidth
    const offsetLeft = indicatorRef.current.children[activeIndex].offsetLeft
    const totalDistance = scrollWidth - clientWidth
    let distance = clientWidth * 0.5 - offsetLeft - itemWidth * 0.5

    // 排除不滚动元素
    // 右边特殊元素处理
    if(distance > 0) {
      distance = 0
    }
    if(-distance > totalDistance) {
      distance = -totalDistance
    }

    indicatorRef.current.style.transform = `translate(${distance}px)`
  }, [indicatorRef, activeIndex])

  return (
    <IndicatorWrapper ref={indicatorRef}>
      {props.children}
    </IndicatorWrapper>
  )
})

export default Indicator