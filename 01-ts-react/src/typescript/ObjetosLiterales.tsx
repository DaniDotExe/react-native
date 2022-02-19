import React from 'react'
interface Persona{
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    ciudad: string;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Oscar',
        edad: 23,
        direccion: {
            pais: 'Colombia',
            ciudad: 'Bucaramanga'
        }
    }

  return (
    <>
        <h3>Objetos Literales</h3>
        {/*JSON.stringify(persona)*/}
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
                {/*JSON.stringify(persona, ['nombre'], 2)*/}
            </pre>
        </code>
    </>
  )
}
