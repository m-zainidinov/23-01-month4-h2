import React, {useState} from 'react'

const Card = ({ avatar, name, title, despretion }) => {
    const [state, setState] = useState(0)
    return (
        <div className = 'card'>
            <img src = {avatar} />
            {name}
            <div>
                <h3>{title}</h3>
                    <p>
                        {despretion}
                    </p>
            </div>
            <div>Count = {state}</div>
            <span onClick={() => setState(state + 1)}>+</span>
            <span onClick={() => setState(state - 1)}>-</span>
            <button>Add to cart</button>
        </div>
    )
}

export default Card