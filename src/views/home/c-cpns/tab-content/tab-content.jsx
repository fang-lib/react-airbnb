import React, { Fragment, memo } from 'react'
import { TabContentWrapper } from './style'

const TabContent = memo((props) => {
  const { value } = props

  return (
    <TabContentWrapper>
      {
        value.map(item => (
          <Fragment key={item.title}>
            <div className='item'>
              <div className='item-title'>{item.title}</div>
              <div className='item-desc'>{item.desc}</div>
            </div>
            <span className='line'></span>
          </Fragment>
        ))
      }
      
    </TabContentWrapper>
  )
})

export default TabContent