import React, { useReducer } from 'react'
import {   useCreateOrderMutation
} from '../state/ordersApi'


const CHANGE_INPUT = 'CHANGE_INPUT'
const RESET_FORM = 'RESET_INPUT'

const initialFormState = { // suggested
  fullName: '',
  size: ['S', 'M', 'L'],
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      const { name, value } = action.payload
      return { ...state, [name]: value } 
    }
    case RESET_FORM: {
      return { fullName: '', size: '' }
    }
    default: 
      return state
   }
}

export default function PizzaForm() {
  const [form, dispatch] = useReducer(reducer, initialFormState)
  const [createOrder, {isLoading, error}] =  useCreateOrderMutation()
  const onChange = (event) => {
    let {name, value, type, checked} = event.target
    const checkedValue = type === 'checkbox' ? checked : value
    dispatch({ type: CHANGE_INPUT, payload: { name, value: checkedValue }})
  }
  
  const onNewOrder = (evt) => {
    evt.preventDefault()
    let { fullName, size, ...toppings } = form
    let toppingList = []
    for (let key in toppings) {
      if (toppings[key]) toppingList.push(key) 
    }
  let requestBody = { fullName, size, toppings:toppingList } 
  createOrder(requestBody)
  .unwrap()
  .then(() => {dispatch({type: RESET_FORM})})
  .catch(() => {})
  }

  return (
    <form id="PizzaForm" onSubmit={onNewOrder}>
      <h2>Pizza Form</h2>
      {isLoading && <div className='pending'>Order in progress...</div>}
      {error && <div className='failure'>Order failed: {error.data.message}</div>}

      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label><br />
          <input
            data-testid="fullNameInput"
            id="fullName"
            name="fullName"
            placeholder="Type full name"
            type="text"
            onChange={onChange}
            value={form.fullName}
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label><br />
          <select data-testid="sizeSelect" id="size" name="size"
          onChange={onChange} value={form.size}>
            <option value="">----Choose size----</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>
          <input data-testid="checkPepperoni" name="1" type="checkbox" onChange={onChange} checked={form['1']}/>
          Pepperoni<br /></label>
        <label>
          <input data-testid="checkGreenpeppers" name="2" type="checkbox" onChange={onChange} checked={form['2']}/>
          Green Peppers<br /></label>
        <label>
          <input data-testid="checkPineapple" name="3" type="checkbox" onChange={onChange} checked={form['3']}/>
          Pineapple<br /></label>
        <label>
          <input data-testid="checkMushrooms" name="4" type="checkbox" onChange={onChange} checked={form['4']}/>
          Mushrooms<br /></label>
        <label>
          <input data-testid="checkHam" name="5" type="checkbox" onChange={onChange} checked={form['5']}/>
          Ham<br /></label>
      </div>
      <input data-testid="submit" type="submit" />
    </form>
  )
}
