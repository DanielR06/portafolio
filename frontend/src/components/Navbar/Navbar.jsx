import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav className='navbar'>
      <div id='icono'>
        <div id='cuadrado'></div>
      </div>
      <div className='Navegacion'>
        <ul className='secciones'>
          <li>Inicio</li>
          <li>Proyectos</li>
          <li>Habilidades</li>
        </ul>
        <button className='menu'>Menu</button>
      </div>
    </nav>
  )
}

export default Navbar
