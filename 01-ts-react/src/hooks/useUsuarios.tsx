import { useState, useRef, useEffect } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqRestApi } from '../api/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);
  
    useEffect(() => {
      cargarUsuarios();
    }, [])
  
  
    const cargarUsuarios = async() => {
      // llamado al API
  
      const resp = await reqRestApi.get<ReqResListado>('/users', {
        params: {
          //.current es el objeto que tiene actulamente paginaRef (el numero)
          page: paginaRef.current
        }
      })
  
      if( resp.data.data.length > 0){
        setUsuarios( resp.data.data );
        paginaRef.current ++;
      } else{
        alert("No hay mas registros");
      }
  
    }

    return {
        usuarios,
        cargarUsuarios
    }
}
