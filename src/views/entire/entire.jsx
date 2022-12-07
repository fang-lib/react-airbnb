import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { EntireWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import { changeCurrentPage, fetchEntireData } from '@/store/modules/entire/actionCreators'
import FilterBar from '@/compoents/filter-bar/filter-bar'
import RoomItem from '@/compoents/room-item/room-item'
import { Pagination } from '@mui/material'
import { changeDetailImgLIst } from '@/store/modules/detail'
import storage from '@/utils/storage'


const Entire = memo(() => {
  const navigate = useNavigate()

  const { total, entireData } = useSelector((state) => ({
    total: state.entire.total,
    entireData: state.entire.entireData
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireData())
  }, [])

  function handleChangePage(e, value) {
    dispatch(changeCurrentPage(value - 1))
    dispatch(fetchEntireData())
    window.scrollTo(0, 0)
  }

  function toDetail(item) {
    storage.setStorage('picture_urls', item.picture_urls)
    dispatch(changeDetailImgLIst(item.picture_urls))
    navigate('/detail')
  }
  return (
    <EntireWrapper>
      {/* 筛选栏 */}
      <FilterBar list={filterData}></FilterBar>
      <div className='entire-content'>
        <h2>{total}多处住所</h2>

        {/* 列表展示 */}
        <div className='entire-list'>
          {
            entireData?.list?.map((item, index) => (
              <RoomItem key={item.id} item={item} itemWidth="20" onItemClick={toDetail}></RoomItem>
            ))
          }
        </div>

          {/* 分页器 */}
          <div className='entrire-pagination'>
            <Pagination count={total/20} onChange={handleChangePage}></Pagination>
          </div>
      </div>
    </EntireWrapper>
  )
})

export default Entire