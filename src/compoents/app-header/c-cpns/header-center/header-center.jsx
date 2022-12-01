import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { CenterWraper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWraper>
      <input className='search-input' placeholder='搜索房源和体验' />
      <div className='search-icon'>
        <IconSearchBar/>
      </div>
    </CenterWraper>
  )
})

export default HeaderCenter