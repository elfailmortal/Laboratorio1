import React from 'react'

const Segundo = () => {
    const saludo = "Hola Mundo TEC";
    const mostrarSaludo = () => {
        return("Saludo desde la función mostrarSaludo: ")
    }
  return (
    <div>
        Segundo
        <br/>
        {saludo}
        <br />
        {mostrarSaludo()}
    </div>
  )
}

export default Segundo