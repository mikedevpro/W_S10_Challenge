import React from 'react';
import { useGetOrdersQuery } from '../state/ordersApi.js';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from '../state/ordersSlice.js';

export default function OrderList() {
  const dispatch = useDispatch();
  const orders = useGetOrdersQuery().data || [];
  const currentFilter = useSelector((st) => st.orders.size);
  
  
  
  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {orders &&
          orders
            .filter(
              (ord) => currentFilter === 'All' || currentFilter === ord.size
          )
          .map((ord) => { 
            const { id, customer, size, toppings } = ord;
            return (
              <li key={id}>
                <div>
                  {customer} ordered a size {size} with {" "}
                  {toppings?.length || 'no'} topping
                  {toppings && toppings.length === 1 ? "" : "s"}
                </div>
              </li>
            );
          })}
    
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L']
          .map((size) => {
            const onClick = () => dispatch(filterChange(size));
            const className = `button-filter${size === 'All' ? 'active' : ''}`;
            
            

            return (
              <button
              onClick={onClick}
              data-testid={`filterBtn${size}`}
              className={className}
              key={size}>{size}
              </button>
            );
          })
        }
      </div>
    </div>
  );
}
