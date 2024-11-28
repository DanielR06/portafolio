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
        <div className='menu'>
          <button className='button_menu'>Menu</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
