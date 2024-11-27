import React from 'react'
import './Header.css'
function Header() {
  return (
    <nav className='border'>
      <div id='icono'>
        <div id='cuadro'></div>
      </div>
      <div className='botones_navegacion'>
        <ul>
          <li>Inicio</li>
          <li>Proyectos</li>
          <li>Habilidades</li>
        </ul>
        <button>Menu</button>
      </div>
    </nav>
  )
}

export default Header
