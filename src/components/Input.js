import React from 'react';
import { useContext } from 'react/cjs/react.development';

import { AuthContext } from '../Providers/Auth';

const Input = () => {

    const aluno = useContext(AuthContext);

    return (
        <>
            <h2>Nome:</h2>
            <input type="text" required onChange={(e) => {
                aluno.nome = e.target.value;
            }} />

            <h2>Idade</h2>
            <input type="number" min={18} required onChange={(e) => {
                aluno.idade = e.target.value;
            }} />
        </>
    )

}

export default Input;

