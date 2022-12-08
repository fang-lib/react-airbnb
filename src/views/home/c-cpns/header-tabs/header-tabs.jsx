import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import TabContent from '../tab-content/tab-content'
import { HeaderTabsWrapper } from './style'

const HeaderTabs = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const tabs = useRef(['搜索房源', '搜索体验'])
  const contentList = useRef(
    [
      [
        {
          title: '城市',
          desc: '你想去哪个城市'
        },
        {
          title: '入住退房日期',
          desc: '请在日历中选择'
        },
        {
          title: '关键字',
          desc: '景点/住址/房源名'
        }
      ],
      [
        {
          title: '城市',
          desc: '你想去哪个城市'
        },
        {
          title: '日期',
          desc: '你想何时出发'
        }
      ]
    ]
  )

  return (
    <HeaderTabsWrapper>
      {
        tabs.current.map((text, index) => (
          <div key={text} className={classNames('tab-item', {'tab-item_active': currentIndex === index})} onClick={e => {setCurrentIndex(index)}}>{text}</div>
        ))
      }

      <div className='tabContent'>
        <TabContent value={contentList.current[currentIndex]}/>
      </div>
    </HeaderTabsWrapper>
  )
})

export default HeaderTabs