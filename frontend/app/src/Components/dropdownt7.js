import React, { Component } from 'react'
import Select, { NonceProvider } from 'react-select'
import AsyncSelectP from 'react-select-async-paginate'
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios'

const options = [
  { value: 'Technical', label: 'Technical' },
  { value: 'Computer', label: 'Computer' },
  { value: 'Analytical', label: 'Analytical' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Presentation', label: 'Presentation' },
  { value: 'Management', label: 'Management' },
  { value: 'Writing', label: 'Writing' },
  { value: 'Language', label: 'Language' },
  { value: 'Design', label: 'Design' }
]

const opT7 = [
  { value: 'Computer_Technology', label: 'Computer_Technology' },
  { value: 'Hard_Communication%20Skills', label: 'Hard_Communication Skills' },
  { value: 'Data_Analysis', label: 'Data_Analysis' },
  { value: 'Certifications_and_Licenses', label: 'Certifications_and_Licenses' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Project_Management', label: 'Project_Management' },
  { value: 'Design', label: 'Design' },
  { value: 'Cloud_Computing', label: 'Cloud_Computing' },
  { value: 'Mobile_&_Web_Development', label: 'Mobile_&_Web_Development' },
  { value: 'Network_Structure&_Security', label: 'Network_Structure&_Security' },
  
]
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'black' : 'black',
        /*padding: 10,*/
        borderColor: 'transparent',
        fontSize: 20,
        backgroundColor: state.isSelected ? 'rgba(249,220,92,1)' : 'transparent',
        ':hover': {
            borderColor: 'transparent',
            backgroundColor: 'rgba(205,205,205,1)',
        }
      }),

    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      color: state.isSelected ? 'red' : 'rgba(205,205,205,1)',
      padding: 20,
      backgroundColor: 'rgba(234,234,234,1)',
      borderColor: 'transparent',
      borderRadius: '24px',
    }),

    container: (provided, state) => ({
        ...provided,
        borderColor: 'transparent',
    }),
    indicatorSeparator : base => ({ ...base, display: 'none' }),
    dropdownIndicator: base => ({ 
        ...base, 
            color: 'rgba(78, 82, 100,1)',
    }),
    placeholder: base => ({ ...base, fontWeight: '400' }),
    valueContainer: base => ({ ...base, borderRadius: 0,}),
    control: (provided, state) => ({
        ...provided,
      padding: 5,
      paddingLeft: 20,
      fontSize: 20,
      backgroundColor: 'rgba(234,234,234,1)',
      borderRadius: '24px',
      borderColor: 'transparent',
      boxShadow: "none",
      ':hover': {
        borderColor: 'transparent',
        backgroundColor: 'rgba(205,205,205,1)',
      }
    }),
  }
  
function dropdownt7 (props){
  
	return <div>
		<Select styles={customStyles} id='selectT7' placeholder="เลือกหมวดทักษะเสริมที่ถนัด" options={opT7}>
        </Select>
	</div>
}

export default dropdownt7;