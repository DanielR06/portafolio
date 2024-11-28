import React from 'react'
import personaje from '../../assets/Perfil-light-Theme.svg'
import './Presentacion.css'
function Presentcion() {
  return (
    <div className='container_presentacion'>
        <div className='presentacion'>
          <div className="container_icono_sociales">
            <img src={personaje} alt="" />
            <div className="botones_redes">
              <button>Twitter</button>
              <button>Github</button>
              <button>Linkedin</button>
            </div>
          </div>
          <div className="texto_presentacion">
            <h1>Daniel Rodriguez</h1>
            <p>Hola un gusto, soy Daniel un programador e ingeniero de software en proceso, aqui conoceras mis proyectos y el stack que manejo. Si quieres contactarme <span>Enviame un correo</span></p>
          </div>
        </div>
      </div>
  )
}

export default Presentcion