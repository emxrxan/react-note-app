import React from 'react'
import './modalInhalt.css'

export default function AlertInhalt(props) {
  return (
    <div className='modalInhalt'>
      {props.Inhalt}
    </div>
  )
}
