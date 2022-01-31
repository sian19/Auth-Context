import React from 'react';
import { useContext } from 'react/cjs/react.development';

import { AuthContext } from '../Providers/Auth';

const Select = () => {

    const aluno = useContext(AuthContext);

    function add(e) {
        aluno.curso = e.target.value;
    }

    return (
        <>
            <select name="cursos" onChange={add}>
                <option disabled selected>Curso</option>
                <option >Sistemas de Informação</option>
                <option >Direito</option>
                <option >Medicina</option>
                <option >Contabilidade</option>
            </select>
        </>
    )
}

export default Select;