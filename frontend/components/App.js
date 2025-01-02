import React from 'react'
import PizzaForm from './PizzaForm'
import OrderList from './OrderList'
import { useCreateOrderMutation, useGetOrdersQuery } from '../state/OrdersApi'

export default function App() {

  const { 
    data: orders,
    error: ordersError,
    isLoading: ordersLoading,
    isFetching: ordersFetching,
   } = useGetOrdersQuery()
  const [createOrder, {
    error: orderError,
    isLoading: orderCreating,
  }] = useCreateOrderMutation()

  return (
    <div id="app">
      <PizzaForm />
      <OrderList />
    </div>
  )
}
