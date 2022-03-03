import { useState } from 'react';

export const useForm = ( formulario any ) => {
    const [state, setState] = useState({
        email: 'test@gmail.com',
        password: '1717'

    })

    const onChange = ( value:string, campo: string ) => {
        setState({
            ...formulario,
            //las llaves [] son para entrar al valor de la variable y esa es la propiedad que se quiere establecer
            [campo]:value
        });
    }

    return{
        ...state,
        onChange,
        state,
    }
}

