import { useState } from 'react'
import data from '../data/db.json'
import Card from './Card'

function Main() {
    const [users, setUsers] = useState(data)
    function AddNewObj() {
        setUsers([...users, {
            "title": "New Title",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg",
            "despretion": "New Despretion",
            "name": "New Name",
            "rate": 58,
            "id": "1"
        },])
    }
    
    console.log(users);
    return (
        <section className = 'main'>
            {
                users.map((item) =>
                    <Card
                        title = {item.title}
                        avatar = {item.avatar}
                        despretion = {item.despretion}
                        name = {item.name}
                    />)
            }
            <button onClick = {AddNewObj}>Add</button>
        </section>
    )
}

export default Main