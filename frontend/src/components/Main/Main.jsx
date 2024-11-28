import React from 'react'
import './Main.css'
import Presentacion from '../Presentacion/Presentcion'
import Proyectos from '../Proyectos/Proyectos'
function Main() {
  return (
    <main>
      <Presentacion></Presentacion>
      <Proyectos></Proyectos>
      <div id="container_habilidades_y_educacion">
        <div className="habilidades">
          <h3>Habilidades</h3>
          <div className="tarjetas_habilidades">
            <div className="tarjeta">
              <img src="" alt="" />
              <p>Python</p>
            </div>
            <div className="tarjeta">
              <img src="" alt="" />
              <p>Python</p>
            </div>
            <div className="tarjeta">
              <img src="" alt="" />
              <p>Python</p>
            </div>
            <div className="tarjeta">
              <img src="" alt="" />
              <p>Python</p>
            </div>
            <div className="tarjeta">
              <img src="" alt="" />
              <p>Python</p>
            </div>
            <div className="tarjeta">
              <img src="" alt="" />
              <p></p>
            </div>
            <div className="tarjeta">
              <img src="" alt="" />
              <p>Python</p>
            </div>
            <div className="tarjeta">
              <img src="" alt="" />
              <p>Python</p>
            </div>
            <div className="tarjeta">
              <img src="" alt="" />
              <p>Python</p>
            </div>
            <div className="tarjeta">
              <img src="" alt="" />
              <p>Python</p>
            </div>
            <div className="tarjeta">
              <img src="" alt="" />
              <p>Python</p>
            </div>
            <div className="tarjeta">
              <img src="" alt="" />
              <p>Python</p>
            </div>
          </div>
        </div>
        <div className="educacion">
          <h2>Educacion</h2>
          <div className="container_tarjetas">
            <div className="tarjeta_educacion">
              <p className="date">2020-2023</p>
              <h3>Tecnico en informatica</h3>
              <p className="institucion">Unidad Educativa Fiscal Manta</p>
            </div>
            <div className="tarjeta_educacion">
            <p className="date">2020-2023</p>
              <h3>Tecnico en informatica</h3>
              <p className="institucion">Unidad Educativa Fiscal Manta</p>
            </div>
            <div className="tarjeta_educacion">
              <p className="date">2020-2023</p>
              <h3>Tecnico en informatica</h3>
              <p className="institucion">Unidad Educativa Fiscal Manta</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
//Spell rigth
export default Main