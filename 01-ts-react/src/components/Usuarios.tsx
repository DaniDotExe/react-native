import { useEffect, useState } from 'react';
import { reqRestApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


export const Usuarios = () => {
  
  const [Usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    // llamado al API
    reqRestApi.get<ReqResListado>('/users')
      .then( resp => {
        console.log( resp.data.data );
      })
      .catch( console.log );

  }, [])
  

  return (
    <>
        <h3>Usuarios: </h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>email</th>
                </tr>
            </thead>

            <tbody>

            </tbody>
        </table>
    </>
  )
}
