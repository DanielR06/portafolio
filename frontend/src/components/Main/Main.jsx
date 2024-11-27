import React from 'react'
import './Main.css'
import personaje from '../../assets/Perfil-light-Theme.svg'
function Main() {
  return (
    <main>
      <div className='border' id="container_presentacion">
        <div id='presentacion'>
          <div className="container_icono_sociales">
            <img src={personaje} alt="" />
            <div className="botones">
              <button>Twitter X</button>
              <button>Github</button>
              <button>Linkedin</button>
            </div>
          </div>
          <div className="texto_presentacion">
            <h1>Daniel Rodriguez</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo sapiente atque ullam possimus illo quod est acc.Enviame un correo</p>
          </div>
        </div>
      </div>
      <div id="container_proyectos" className='border'>
        <div className="proyectos">
          <h2>Proyectos</h2>
          <div className="container_tarjetas_proyectos">
            <div className="tarjeta_proyecto border">
              <div className="descripcion_proyecto">
                <img src="" alt="" />
                <div className="descripcion">
                  <h3>Titulo proyecto</h3>
                  <p>este proyecto trata deee</p>
                </div>
              </div>
              <div className="stack_proyecto">
                <div><p>React</p></div>
                <div><p>Node</p></div>
                <div><p>Wheather Api</p></div>
                <div><p>css</p></div>
              </div>
            </div>
            <div className="tarjeta_proyecto border">
              <div className="descripcion_proyecto">
                <img src="" alt="" />
                <div className="descripcion">
                  <h3>Titulo proyecto</h3>
                  <p>este proyecto trata deee</p>
                </div>
              </div>
              <div className="stack_proyecto">
                <div><p>React</p></div>
                <div><p>Node</p></div>
                <div><p>Wheather Api</p></div>
                <div><p>css</p></div>
              </div>
            </div>
            <div className="tarjeta_proyecto border">
              <div className="descripcion_proyecto">
                <img src="" alt="" />
                <div className="descripcion">
                  <h3>Titulo proyecto</h3>
                  <p>este proyecto trata deee</p>
                </div>
              </div>
              <div className="stack_proyecto">
                <div><p>React</p></div>
                <div><p>Node</p></div>
                <div><p>Wheather Api</p></div>
                <div><p>css</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
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