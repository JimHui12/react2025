import { useState } from "react";

const Counter = () => {
    const counter = useState(0)
    const [count, setCount] = useState(0)
    
    const [friends, setFriends] = useState(['Alex' , 'Jim'])


    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    const addOneFriend = () => setFriends([...friends, 'ha'])
    const removeOneFriend = () => setFriends(friends.filter(f => f !== 'ha'))
    const updateOneFriend = () => setFriends(friends.map(f => f === 'Alex' ? 'Ale x' : f))



    return (
        <div>
       
         <h1>{count} </h1>
         <button onClick={increment}>+</button>
         <button onClick={decrement}>－</button>
         <div>
            {friends.map((f)=> (
                <li key={Math.random()}>{f}</li>
            ))}
         </div>
         <button onClick={addOneFriend}> Add new friends</button>
         <button onClick={removeOneFriend}> remove friends</button>
         <button onClick={updateOneFriend}> update friends</button>
        </div>
    )
}

export default Counter;
