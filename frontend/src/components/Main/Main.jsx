import React from 'react'
import './Main.css'
import Presentacion from '../Presentacion/Presentcion'
import Proyectos from '../Proyectos/Proyectos'
import Conocimientos from '../Conociemientos/Conocimientos'
function Main() {
  return (
    <main>
      <Presentacion></Presentacion>
      <Proyectos></Proyectos>
      <Conocimientos></Conocimientos>
    </main>
  )
}
//Spell rigth
export default Main