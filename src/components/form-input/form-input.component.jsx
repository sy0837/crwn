import React from 'react'
import './form-input.styles.scss'

const FormInput = ({handleChange , label, ...otherPropitems}) =>(
    <div className='group'>
    <input
    className='form-input'
        onChange={handleChange}
        {...otherPropitems}
    />
    {label?(
        <label className={`${otherPropitems.value.lenght ? 'shrink': null} form-input-label`} >
        {label}
        </label>): null}
    </div>
)
export default FormInput