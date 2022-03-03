import { useState } from 'react';

export const useForm = <T extends Object > ( formulario: T) => {

    const [state, setState] = useState( formulario )

    const onChange = ( value:string, campo: keyof T ) => {
        setState({
            ...state,
            //las llaves [] son para entrar al valor de la variable y esa es la propiedad que se quiere establecer
            [campo]:value
        });
    }

    return{
        ...state,
        formulario: state,
        onChange,
    }
}

