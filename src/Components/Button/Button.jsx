import './Button.css'
import { Fragment } from 'react'
import React from 'react'

export default function Button(props) {
  return (
    <Fragment>
        <button onClick={props.onClick} type='submit' form={props.form} className='form-button btn btn-secondary'>{props.inhalt}</button>
    </Fragment>
  )
}


