import React from 'react'
import { bancos } from './assets/bancos'
const Tercero = () => {
  return (
    <div>
        <h1> Lista de Bancos</h1>
        <ul>
        {bancos.map((banco) => (
            <li key={banco.id}>
                {banco.id} - {banco.name} - {banco.country}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Tercero