import React, { Component } from 'react'
import Select, { NonceProvider } from 'react-select'
import AsyncSelect from 'react-select-async-paginate'

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

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'black' : 'black',
        /*padding: 10,*/
        borderColor: 'transparent',
        fontSize: 20,
        backgroundColor: state.isSelected ? 'rgba(249,220,92,1)' : 'transparent'
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
  
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }


function CustomSelect(props){
	return <div>
		<Select styles={customStyles} options={options} placeholder="เลือกทักษะเสริมที่ถนัด"/>
	</div>
}

export default CustomSelect;