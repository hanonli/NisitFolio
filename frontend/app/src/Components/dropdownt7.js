import React, { Component } from 'react'
import Select, { NonceProvider } from 'react-select'
import AsyncSelectP from 'react-select-async-paginate'
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';

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
  
  class dropdownt7 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: '',     
      opT7 : [
        { value: 'Computer_Technology', label: 'ทักษะคอมพิวเตอร์' },
        { value: 'Hard_Communication%20Skills', label: 'ทักษะการสื่อสาร' },
        { value: 'Data_Analysis', label: 'ทักษะการวิเคราะห์ดาต้า' },
        { value: 'Certifications_and_Licenses', label: 'ทักษะที่ใช้ใบประกอบวิชาชีพ' },
        { value: 'Marketing', label: 'ทักษะการตลาด' },
        { value: 'Project_Management', label: 'ทักษะการบริหารโปรเจค' },
        { value: 'Design', label: 'ทักษะการออกแบบ' },
        { value: 'Cloud_Computing', label: 'ทักษะเกี่ยวกับ Cloud_Computing' },
        { value: 'Mobile_&_Web_Development', label: 'การพัฒนาเว็ปแอปพลิเคชั่นและ Mobile App' },
        { value: 'Network_Structure_&_Security', label: 'เน็ตเวิร์คและซีเคียวริตี้' },
        
      ],
      checkddt7: false
          }
  }

  async getOptions(typeC){
    const res = await axios.get("http://localhost:2000/register/" + typeC +"/hardskill")
    const data = res.data
    console.log(res);
    const options = data.map(d => ({
      "value" : d.Name,
      "label" : d.THName

    }))
    console.log(options);
    this.setState({opT7: options,checkddt7: false})

  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
   var neww='';
   neww = e.label;
   console.log(neww);
   console.log("http://localhost:2000/register/" + e.value +"/hardskill");
   this.getOptions(e.value);
   const inputText = e.label;
    this.setState({
      value: inputText
    });
    this.props.onChange(inputText);
  }

  componentDidMount(){
      
  }

  render() {
    console.log(this.state.opT7)
    return (
      <div>
        <Select styles={customStyles} options={this.state.opT7} onChange={this.handleChange.bind(this)} placeholder='เลือกหมวดทักษะเสริมที่ถนัด'  closeMenuOnSelect={false} id='ddt7s'/>
    <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
      </div>
    )
  }
}
export default dropdownt7;