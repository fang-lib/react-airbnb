import React, { memo } from 'react'
import { AddressItemWrapper } from './style'

const AddressItem = memo((props) => {
  const { item } = props
  return (
    <AddressItemWrapper>
      <img className='address-img' src={item?.picture_url} alt='' />
      <div className='cover'>
        <div className='address-text'>{item?.city}</div>
        <div className='address-price'>均价{item?.price}</div>
      </div>
    </AddressItemWrapper>
  )
})

export default AddressItem