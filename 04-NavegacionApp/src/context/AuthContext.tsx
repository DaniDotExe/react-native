import React, { createContext } from "react";

// Definir como luce, o que información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    username?: string,
    favoriteIcon?: string,
}

//Estado inicial
export const authInitialState : AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decir como luce y expone el context a sus hijos
export interface AuthContextProps {
    authState: AuthState,
    sigIn: () => void,
}


//Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ({ children }:any) => {

    return(
        <AuthContext.Provider value={{
            authState: authInitialState,
            sigIn: () => {}
        }}>
            {children}
        </AuthContext.Provider>
    )
}