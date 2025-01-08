import React from 'react'
import OrderList from './OrderList'
import PizzaForm from './PizzaForm'


export default function App() {
  // const count = useSelector(st => st.counters.count)
  // const dispatch = useDispatch()
 
  // return (
  //   <div>
  //     <button onClick={() => {
  //       const action = increment()
  //       dispatch(action)
  //     }}>The count is {count}</button>
  //   </div>
  // )
  

  return (
    <div id="app">
      <PizzaForm />
      <OrderList />
    </div>
  )
}
