import React,{useState} from 'react'

const HigherOrderComponent = (WrappedComponent) => {
    return(props) => {
        const [count, setCount] = useState(0);
        const incrementCount = () => {
            setCount((prevCount) => prevCount+1);
        }
        return (
            <div>
                <WrappedComponent
                    count={count}
                    incrementCount={incrementCount}
                    {...props}
                    />
            </div>
        )
    }
}

const DisplayCounter = ({count, incrementCount}) => (
    <div>
        <h1>Higher Order Component</h1>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Inc</button>
    </div>
)
const WithCounter = HigherOrderComponent(DisplayCounter)
export default WithCounter;
