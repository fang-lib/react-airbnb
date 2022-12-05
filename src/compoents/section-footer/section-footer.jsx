import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'

import { RightOutlined } from '@ant-design/icons';

const SectionFooter = memo((props) => {
  const { text, isOtherColor } = props
  return (
    <SectionFooterWrapper isOtherColor={isOtherColor}>
      <div className='text'>{text}</div>
      <RightOutlined className='icon' />
    </SectionFooterWrapper>
  )
})

export default SectionFooter