import { useState } from 'react';
export const Formularios = () => {

    const [formulario, setformulario] = useState({
        email: 'test@gmail.com',
        password: '1717'

    })

    const onChange = ( value:string, campo: string ) => {
        setformulario({
            ...formulario,
            //las llaves [] son para entrar al valor de la variable y esa es la propiedad que se quiere establecer
            [campo]:value
        });
    }

  return (
    <>
        <h3>Formularios</h3>
        <input
            type = "text"
            className="form-control"
            placeholder="Email"
            value = {formulario.email}
            onChange = { ( {target} ) => onChange( target.value ,'email') }
        />
        
        
        <input
            type="text"
            className="form-control mt-2 mb-2"
            placeholder="Password"
            value={formulario.password}
            onChange = { ( {target} ) => onChange( target.value ,'password') }
        />

        <code>
            <pre>{ JSON.stringify( formulario, null, 2)}</pre>
        </code>

    </>
  )
}
