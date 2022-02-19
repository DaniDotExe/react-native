import React from 'react'

export const TiposBasicos = () => {

  const nombre: string = 'Oscar'; 
  const edad: number = 23;
  let estaActivo: boolean = true;

  const poderes:any[] = [];

  poderes.push('1717');
  

  return (
    <>
        <h3>Tipos básicos</h3>
        {nombre}, {edad}, { (estaActivo) ? 'estamos True' : 'Estamos no True'}
        <br />
        {poderes.join(', ')}
    </>
  )
}
