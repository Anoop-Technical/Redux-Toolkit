import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../features/counter/CounterSlice"

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>Increment By User</button>
        </div>
    )
}

export default Counter