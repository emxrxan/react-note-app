import React from 'react'
import './NoteItem.css'

export default function NoteItem(props) {
  return (
    <div className='noteItem-Container'>
        <div>
            <h2 className='noteItem-date'>{props.date}</h2>
            <h1 className='noteItem-title'>{props.title}</h1>
        </div>

        <div>
            <p className='noteItem-action' onClick={props.onRemove}>Löschen</p>
            <p className='noteItem-action' onClick={props.onModalOpen}>Infomartion</p>
        </div>
    </div>
  )
}
