import { useEffect, useState } from 'react';
import { reqRestApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


export const Usuarios = () => {
  
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    // llamado al API
    reqRestApi.get<ReqResListado>('/users')
      .then( resp => {
        setUsuarios( resp.data.data)
      })
      .catch( console.log );

  }, [])

  //dos formas de hacerlo
  //const renderItem = ( usuario: Usuario)  => {
  //  return (
  //    <tr key= { usuario.id.toString() }>
  //        <th> </th>
  //        <th>{ usuario.first_name }</th>
  //        <th>email</th>
  //    </tr>
  //  )
  //}
  
  const renderItem = ( {id, first_name, last_name, email, avatar}: Usuario)  => {
    return (
      <tr key= { id.toString() }>
          <th>
              <img src={avatar } 
              //en caso de que no exista la imagen se usa alt para colocar algo por defecto
              alt={ first_name } 
              style={{
                width: 60,
                borderRadius: 100,
              }}
              
              />
          </th>
          <th> { first_name } { last_name } </th>
          <th> { email }</th>
      </tr>
    )
  }

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
              {
                //Dos formas de escribirlo
                //usuarios.map( usuario => renderItem(usuario) )
                usuarios.map(renderItem)
              }
            </tbody>
        </table>
        <button
          className='btn btn-primary'
        >   
          Siguientes
        </button>
    </>
  )
}
