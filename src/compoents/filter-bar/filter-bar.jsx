import classNames from 'classnames'
import React, { memo, useEffect, useRef, useState } from 'react'
import { FilterWrapper } from './style'

const FilterBar = memo((props) => {
  const { list } = props
  const [ filterList, setFilterList ] = useState([])
  const contentRef = useRef()
  const [fixedHeight, setFixedHeight] = useState(0)

  useEffect(() => {
    const height = contentRef.current.clientHeight
    setFixedHeight(height)
  }, [contentRef])

  function addFilter(item) {
    if(filterList.includes(item)) {
      const findIndex = filterList.findIndex(value => value === item)
      const newFilterList = [ ...filterList ]
      newFilterList.splice(findIndex, 1)
      setFilterList(newFilterList)
    } else {
      const newFilterList = [ ...filterList ]
      newFilterList.push(item)
      setFilterList(newFilterList)
    }
  }
  return (
    <FilterWrapper fixedHeight={fixedHeight}>
      <div className='content' ref={contentRef}>
        {
          list.map(item => (
            <div className={classNames('filter-item', {active: filterList.includes(item)})} key={item} onClick={e => addFilter(item)}>{item}</div>
          ))
        }
      </div>
      <div className='occupy'></div>
    </FilterWrapper>
  )
})

export default FilterBar