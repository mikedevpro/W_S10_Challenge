import React from 'react'
import { useGetOrdersQuery, useCreateOrderMutation } from '../state/ordersApi'
import { useSelector, useDispatch } from 'react-redux'
import { selectSize } from '../state/ordersSlice'

export default function OrderList() {
  // const dispatch = useDispatch()
  const selected = useSelector(st => st.selectSize)

  const { data: orders } = useGetOrdersQuery()
  const [createOrder] = useCreateOrderMutation()
  
  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          orders?.map((order) => {
            {/* console.log(order) */}
            return (
              <li key={1}>
                <div>
                  {`${order.customer} ordered a size ${selectSize} with `}
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
              key={size}>{size}
              
              </button>
          })
        }
      </div>
    </div>
  )
}
