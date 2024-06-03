import { useState } from 'react'

function Counter() {
    const [state, setState] = useState(0)

    function add() {
        const newValue = state + 1
        const max = 50
        if (newValue <= max) {
            setState(newValue)
        }
    }

    function remove() {
        const newValue = state -1
        const min = 0
        if (newValue >= min) {
            setState(newValue)
        }
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
        </div>
    )
}

// function Counter() {
    
//     const [state, setState] = useState(0)

//     function add() {
//         setState(state + 1)
//     }

//     function remove() {
//         setState(state - 1)
//     }

//     return (
//         <div>
//             <h1>{state}</h1>
//             <button onClick={add}>+</button>
//             <button onClick={remove}>-</button>
//         </div>
//     )
// }

export default Counter