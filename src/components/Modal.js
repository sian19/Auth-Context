import React, { useContext } from 'react';

import { AuthContext } from '../Providers/Auth';

function Modal(props) {

    let aluno = useContext(AuthContext);

    return (
        <div id="modal" className={props.open ? 'modal' : 'off-modal'}>

            <button title='fechar' className='closed' onClick={() => {
                props.setOpen(false);
            }}><p>X</p></button>

            <h2>Dados</h2>
            <h3>{`Nome: ${aluno.nome}`}</h3>
            <h3>{`Idade: ${aluno.idade}`}</h3>
            <h3>{`Curso: ${aluno.curso}`}</h3>
            <h3>{`Matrícula: ${aluno.matricula}`}</h3>
        </div>
    )
}

export default Modal;