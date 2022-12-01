import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from '@/assets/data/footer.json'


const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className='footer-content'>
        {
          footerData.map(item => (
            <div className='list' key={item.name}>
              <ul>
                <li className='title'>{item.name}</li>
                {
                  item.list.map(subItem => (
                    <li className='item' key={subItem}>{subItem}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
        
      </div>
      <div className='statement'>
        © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
      </div>
    </FooterWrapper>
  )
})

export default AppFooter