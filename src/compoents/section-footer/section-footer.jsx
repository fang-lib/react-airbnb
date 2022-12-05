import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'

import { RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SectionFooter = memo((props) => {
  const { text, isOtherColor } = props

  const navigate = useNavigate()
  function toEntire() {
    navigate('/entire')
  }
  return (
    <SectionFooterWrapper isOtherColor={isOtherColor} onClick={toEntire}>
      <div className='text'>{text}</div>
      <RightOutlined className='icon' />
    </SectionFooterWrapper>
  )
})

export default SectionFooter