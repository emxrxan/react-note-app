import './TextArea.css';
import React, { forwardRef } from 'react'
import { Fragment } from 'react';

export default forwardRef(function TextArea(props, ref) {
  
  return (
    <Fragment>
        <label className='textarea-label'>{props.label}</label>
        <textarea ref={ref} className='form-control w-75 border-3' aria-label="With textarea" name={props.name} form={props.form} placeholder={props.placeholder}></textarea>
    </Fragment>
  )
});

