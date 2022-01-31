import React, { createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {

    const aluno = {
        nome: '',
        idade: '',
        curso: '',
        matricula: '',
        ids: []
    }

    return (
        <AuthContext.Provider value={{ aluno }}>
            {props.children}
        </AuthContext.Provider>
    )
}