import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/counterSlide'
import './App.css'

function App() {

  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(0);

  const count = useSelector((state) => state.counter.value)
  //  useSelector : Hey Redux, give me some state!. You use useSelector to grab values from the store. It lets you access any part of your Redux state. You cannot trigger or call reducer functions with it. It is  READ only 

  const dispatch = useDispatch();
  //  useDispatch : Hey Redux, I want to change the state!. You dispatch actions to trigger reducers and change the store. dispatch() is how you send an action to Redux

  const handleIncrementAmount = () => {

    dispatch(incrementByAmount(Number(inputValue)));   // Convert the inputValue to Number as i set the input type to number but inputValue is still string.
    setInputValue(0); // reset the value for increment by amount
  }

  return (

    <div className='counter-bg'>
      <div className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-md h-screen bg-black bg-opacity-50">
        <div className="px-4 py-2 text-xl text-white font-semibold border-solid border border-white w-1/2 text-center rounded  bg-black bg-opacity-50">{count}</div>
        <div className='w-1/2 flex gap-2'>
          <button
            className="px-4 py-2 text-white rounded hover:bg-cyan-900 transition border-solid border border-white text-lg bg-black bg-opacity-50 w-1/2"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            className="px-4 py-2 text-white rounded hover:bg-red-900 transition border-solid border border-white text-lg bg-black bg-opacity-50 w-1/2"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <div className='px-4 py-2 text-lg text-white border-solid border border-white w-1/2 text-center rounded  bg-black bg-opacity-50'>
          <div className='flex gap-2'>
            <input
              className='focus:outline-none text-black px-2 py-1 rounded w-1/2'
              type='number'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className='px-2 py-1 text-white rounded hover:bg-cyan-900 transition border-solid border border-white text-lg bg-black bg-opacity-50 w-1/2'
              onClick={handleIncrementAmount}
            >
              Click to Add Amount
            </button>

          </div>
        </div>
      </div>
    </div>



  )
}

export default App
