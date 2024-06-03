import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import Header from './components/Header'
import Counter from './components/Counter'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const sidebarRef = useRef(null)
  
  function showSidebar() {
    setOpenSidebar(!openSidebar)
  }

  function closeSidebar() {
    setOpenSidebar(false)
  }

  useEffect(() => {
    function clickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target.className !== 'hello-button'
      ) {
        closeSidebar()
      }
    }

    document.addEventListener('click', clickOutside)

    return () => {
      document.removeEventListener('click', clickOutside)
    }
  }, [])

  return (
    <div className='App'>
      <Header showSidebar = {showSidebar} />
      {openSidebar && (
        <div className = 'sidebar' ref={sidebarRef}>
          <button className='close' onClick={closeSidebar}>x</button>
          <h1 className='sideText'>Hello World!</h1>
        </div>
      )}
      <Counter />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
