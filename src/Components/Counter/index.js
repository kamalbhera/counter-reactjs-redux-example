import React from 'react'
import { useSelector } from 'react-redux'

const CounterFunc = () => {
    const counter = useSelector(state => state.counter);
    const multi = useSelector(state=>state.multi);
    return (
        <div className='content-counter'>
            <h4 className='head-css'>{counter}</h4>
            <h5 className='head-css'>{multi}</h5>
        </div>
    )
}

export default CounterFunc;
