import { useState } from "react";

const Movies = () => {
    const [movies, setMovies] = useState([
        {id: 1, title: "Spider Man", ratings: 3},
        {id: 2, title: "Superman", ratings: 6},
    ])

    const handleClick = () => {
        setMovies(movies.map(m => m.id === 1 ? {...movies, title: "John wick 5"}: m))
    }    

    return <section>
        { movies.map(m => {
            <li key={Math.random()}>{m.title}</li>
        })}

        <button onClick={handleClick}>Change Name</button>
    </section>
}

export default Movies;