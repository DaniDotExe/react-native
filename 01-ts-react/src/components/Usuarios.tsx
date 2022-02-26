import { useEffect } from 'react';
import { reqRestApi } from '../api/reqRes';


export const Usuarios = () => {

  useEffect(() => {
    // llamado al API
    reqRestApi.get('/users')
      .then( resp => {
        console.log(resp.data.data[0].first_name)
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
