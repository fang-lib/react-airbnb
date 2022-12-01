import React, { memo, useEffect, useState } from 'react'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import { RightWraper } from './style'

const HeaderRight = memo(() => {
  const [isShowPanel, setIsShowPanel] = useState(false)
 
  useEffect(() => {
    function hidePanel() {
      setIsShowPanel(false)
    }

    window.addEventListener('click', hidePanel, true)

    return () => {
      console.log('重新渲染')
      window.removeEventListener('click', hidePanel, true)
    }
  }, [])
  return (
    <RightWraper>
      <span className='btn'>登录</span>
      <span className='btn'>注册</span>
      <span className='btn'>
        <IconGlobal/>
      </span>
      <div className='bar' onClick={e => setIsShowPanel(true)}>
        <IconMenu/>
        <IconAvatar/>
      </div>
      {/* 面板 */}
      {
        isShowPanel && (
        <div className='panel'>
          <div className='item'>注册</div>
          <div className='item'>登录</div>
          <div className='line'></div>
          <div className='item'>来爱彼迎注册房源</div>
          <div className='item'>开展体验</div>
          <div className='item'>发布</div>
        </div>
        )
      }
      
    </RightWraper>
  )
})

export default HeaderRight