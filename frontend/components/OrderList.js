import React from 'react'
import { useGetOrdersQuery } from '../state/ordersApi'
import { useSelector } from 'react-redux'
import { selectSize } from '../state/ordersSlice'

export default function OrderList() {
  // const dispatch = useDispatch()
  const selected = useSelector(st => st.size)

  const { data: orders } = useGetOrdersQuery()
  
  
  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          orders?.map((order) => { 
            return (
              <li key={order.id}>
                <div>
                  {`${order.customer} ordered a size ${order.size} with ${order.toppings} toppings`}
                </div>
              </li>
            )
          })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L']
          .map(size => {
            const className = `button-filter${selectSize === selected ? 'active' : ''}`
            return <button
              onClick={() => (selectSize())}
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
