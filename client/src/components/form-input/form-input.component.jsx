import React from 'react'
// import './form-input.styles.scss'
import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles'

const FormInput = ({handleChange , label, ...otherPropitems}) =>(
    <GroupContainer>
    <FormInputContainer  onChange={handleChange}{...otherPropitems} />
    {label ? (
      <FormInputLabel className={otherPropitems.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
    </GroupContainer>
)
export default FormInput