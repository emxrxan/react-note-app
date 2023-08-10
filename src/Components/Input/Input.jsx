import './Input.css';
import { React, forwardRef } from 'react'
import { Fragment } from 'react';



export default forwardRef(function Input(props, ref) {
  return (
    <Fragment>
      <label className='input-label'>{props.label}</label>
      <input ref={ref} className='form-control w-50 h-auto overflow-auto border-3' type={props.type} name={props.name} form={props.form} placeholder={props.placeholder}/>
    </Fragment>
  )
});

