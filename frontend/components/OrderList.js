import React from 'react'
import { useGetOrdersQuery } from '../state/ordersApi'
import { useSelector, useDispatch } from 'react-redux'
import { selectSize, setSize } from '../state/ordersSlice'

export default function OrderList() {
  const dispatch = useDispatch()
  const selected = useSelector(selectSize)
  const {data: orders} = useGetOrdersQuery()
  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          orders.map(() => {
            return (
              <li key={1}>
                <div>
                  order details here
                </div>
              </li>
            )
          })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(size => {
            const className = `button-filter${size === selected ? 'active' : ''}`
            return <button
              data-testid={`filterBtn${size}`}
              className={className}
              key={size}>{size}</button>
          })
        }
      </div>
    </div>
  )
}
