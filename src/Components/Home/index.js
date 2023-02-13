import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/action';
import { multiply,divide } from '../../redux/action/mulDivideAction';
import Button from '../Buttons';
import CounterFunc from '../Counter';

const Home = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <CounterFunc />
            <div className='button-div'>
            <Button onClick={()=> { dispatch(increment()) }} name={"+"}></Button>
            <Button onClick={() => { dispatch(decrement()) }} name={"-"}></Button>
            <Button onClick={()=> { dispatch(multiply()) }} name={"*"}></Button>
            <Button onClick={()=> { dispatch(divide()) }} name={"/"}></Button>
            </div>
        </div>
    )
}

export default Home;
