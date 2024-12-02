import React from 'react'
import './Conocimientos.css'
import PythonIconos from '../../assets/python-svgrepo-com.svg'
function Conocimientos() {
  return (
    <div className='container_conocimientos'>
      <div className="conocimientos">
        <div className="habilidades">
          <h2>Habilidades</h2>
          <div className="container_habilidades">
            <div className="habilidad">
              <img src={PythonIconos} alt="" className='icono'/>
              <p>Python</p>
            </div>
            <div className="habilidad">
              <img src={PythonIconos} alt="" className='icono'/>
              <p>Python</p>
            </div>
            <div className="habilidad">
              <img src={PythonIconos} alt="" className='icono'/>
              <p>Python</p>
            </div>
            <div className="habilidad">
              <img src={PythonIconos} alt="" className='icono'/>
              <p>Python</p>
            </div>
          </div>
        </div>
        <div className="educaciones">
          <h2>Educación</h2>
          <div className="container_educaciones">
            <div className="educacion">
              <p>2020 - 2023</p>
              <h3>Técnico en informática</h3>
              <p>Unidad educativa Fiscal Manta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conocimientos