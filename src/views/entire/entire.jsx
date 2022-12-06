import React, { memo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { EntireWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import { changeCurrentPage, fetchEntireData } from '@/store/modules/entire/actionCreators'
import FilterBar from '@/compoents/filter-bar/filter-bar'
import RoomItem from '@/compoents/room-item/room-item'
import { Pagination } from '@mui/material'


const Entire = memo(() => {
  const { total, entireData } = useSelector((state) => ({
    total: state.entire.total,
    entireData: state.entire.entireData
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireData())
  }, [])

  function handleChangePage(e, value) {
    dispatch(changeCurrentPage(value - 1))
    dispatch(fetchEntireData())
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
              <RoomItem key={item.id} item={item} itemWidth="20"></RoomItem>
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