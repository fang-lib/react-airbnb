import React, { memo, useState } from 'react'
import { ControlWrapper } from './style'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SectionControl = memo((props) => {
  const { list=[], changeTabName } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)

  function changeIndex(index) {
    setCurrentIndex(index)
    changeTabName(list[index])
  }
  return (
    <ControlWrapper>
      {
        list.map((item, index) => (
          <div className={classNames('item', {active: currentIndex === index})} key={item} onClick={e => changeIndex(index)}>{item}</div>
        ))
      }
    </ControlWrapper>
  )
})

SectionControl.propTypes = {
  list: PropTypes.array
}

export default SectionControl