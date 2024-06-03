import React from 'react'

function Header({ showSidebar }) {
    return (
        <header className='header'>
            <nav>
                <div>LOGO</div>
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
                <button className='hello-button' onClick = {showSidebar}>Hello</button>
            </nav>
        </header>
    )
}

export default Header