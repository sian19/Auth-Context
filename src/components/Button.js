import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development';

import { AuthContext } from '../Providers/Auth';

import Modal from './Modal';

import './modal.css';

const Button = () => {

    const [open, setOpen] = useState(false);

    const aluno = useContext(AuthContext);

    function add(e) {
        e.preventDefault();
        if (aluno.curso == null) {
            alert("Favor selecione um curso!");
        }

        else {
            setOpen(true);
            let i = true;
            while (i) {
                aluno.matricula = Math.floor(Math.random() * (100 - 1) + 1);
                if (aluno.ids == null) {
                    aluno.ids.push(aluno.matricula);
                    i = false;
                }

                else {
                    let repeat = false
                    for (let x of aluno.ids) {
                        if (aluno.matricula == x) {
                            repeat = true;
                        }
                    }

                    if (!repeat) {
                        aluno.ids.push(aluno.matricula);
                        i = false;
                    }

                }
            }
        }
    }

    return (
        <>
            <Modal open={open} setOpen={setOpen} />
            <button onClick={add}>Enviar</button>
        </>
    )
}

export default Button;

