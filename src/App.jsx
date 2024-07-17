
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decriment, increment } from './redux/futures/counter/counterSlices'

function App() {
 
  //  const [count, setCount]=useState(0)
   const count=useSelector((state)=>state.counters.value)
   const dispatch=useDispatch()

    const handleIncriment=()=>{
      dispatch(increment())
    }
   const handleDecriment=()=>{
    dispatch(decriment())
   }
   

  return (
    <>
       <span> {count} </span> <br />
       <button style={{marginRight:10}} onClick={handleIncriment}> INCRIMENT</button>
   
       <button onClick={handleDecriment}>DECRIMENT</button>
    </>
  )
}

export default App
