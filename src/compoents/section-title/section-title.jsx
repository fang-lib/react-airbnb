import React, { memo } from 'react'
import { PropTypes } from 'prop-types'
import { TitleWrapper } from './style'

const SectionTitle = memo((props) => {
  const { mainTitle, secondTitle } = props
  return (
    <TitleWrapper>
      <div className='main-title'>{mainTitle}</div>
      {
        secondTitle && (
          <div className='second-title'>{secondTitle}</div>
        )
      }
      
    </TitleWrapper>
  )
})

SectionTitle.propTypes = {
  mainTitle: PropTypes.string,
  secondTitle: PropTypes.string
}
export default SectionTitle