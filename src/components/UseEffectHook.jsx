// setup useEffect hook to run some code when

// component renders for the first time

// whenever it re-renders

// some data in our component changed

import {useState, useEffect} from 'react';




const UseEffectHook = () => {
    const [ value, setValue] = useState(0);
    const [something, setSomething] = useState(0)

    const [ data, setData ] = useState([])

    useEffect(() => {
        async function getData(params) {
            await fetch()
        }
    }, [])

    useEffect(() => {
        console.log('call useEffect')
        document.title = `Increment ${value}`
    }, [value]);


  return (
    <div>UseEffectHook

        <div>
            {value}
        </div>
        <button onClick={() => setValue(value +1)} >Click me</button>
        <button oncClick={() => setSomething( value +1) }>Increment by something</button>
    </div>
  )
}

export default UseEffectHook