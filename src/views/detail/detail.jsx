import PictureBrowser from '@/compoents/pircture-browser/picture-brower'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false)

  const { detailImgList } = useSelector((state) => (
    {
      detailImgList: state.detail.detailImgList
    }
  ), shallowEqual)

  function handleShowBrowser(e) {
    setShowBrowser(true)
  }

  function handleCancel() {
    setShowBrowser(false)
  }
  return (
    <DetailWrapper>
      <div className='img-list_box' onClick={handleShowBrowser}>
        <div className='img-box'>
          <img className='left-img' src={detailImgList?.[0]} alt=''/>
          <div className='img-cover'></div>
        </div>
        <div className='right-box'>
          {
            detailImgList?.slice(1,5).map(url => (
              <div key={url} className='img-box'>
                <img className='right-img' src={url} alt='' />
                <div className='img-cover'></div>
              </div>
            ))
          }
        </div>
      </div>

      {/* 图片显示器 */}
      {
        showBrowser && (
          <PictureBrowser list={detailImgList} onCancel={handleCancel}></PictureBrowser>
        )
      }
    </DetailWrapper>
  )
})

export default Detail