import React, { useContext } from 'react'
import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import AlertInhalt from '../ModalInhalt/modalInhalt';
import './Modal.css'

import NoteContext from '../../Context/NoteContext';

export default function Modal(props) {

    const {modal} = useContext(NoteContext);

  return (
    <Fragment>
        {createPortal(

            <div className='modalContainer'>
                <button type='button' className='btn-close closePosition' aria-label='Close' onClick={props.onClose}></button>
                <AlertInhalt Inhalt={modal.text}/>
            </div>

        ,document.getElementById("alerts"))}
    </Fragment>
  )
}
