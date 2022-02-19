import React from 'react'
import { TiposBasicos } from './typescript/TiposBasicos';
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Funciones } from './typescript/Funciones';


const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a ts-react</h1>
      <hr/>
      {/*<TiposBasicos />*/}
      {/*<ObjetosLiterales /> */}
      <Funciones />
    </div>
  )
}

export default App;

