import React, { Component } from 'react'
import Select, { NonceProvider } from 'react-select'
import selectEvent from 'react-select-event'
import AsyncSelect from 'react-select-async-paginate'
import $ from 'jquery'

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
  
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }


  class dropsideskill extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
		this.state = {
            selectedOption: [{ value: 'none', label: 'เลือกหมวดทักษะเสริมที่ถนัด' }],
            opT7 : [
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
                
              ],
			render: false, //Set render state to false
			redirect: null
		}
        var newT = [];
        this.handleChange = (selectedOption) => {
            this.setState({ selectedOption }, () =>
              console.log(`Option selected:`, this.state.selectedOption),
              console.log(`Option:`, this.state.selectedOption[0].value),
            /*fetch("http://localhost:2000/register/" + this.state.selectedOption.value +"/hardskill",
		    { method: "GET", })
		    .then(response => response.json())
		    //.then(response => response.result)
		    .then((raws) => {
                console.log("http://localhost:2000/register/" + this.state.selectedOption.value +"/hardskill");
                //console.log(raws);
                raws.forEach((entryss) => {
                    console.log(entryss);
                    console.log(entryss.THName);
                    var temp = {value: entryss.THName, label: entryss.Name};
                    console.log(temp);
                    newT.push(temp);
			});
            this.setState({ opT7: newT});
        }).catch((error) => {
			  console.log(error);
			})
            );
        }
        this.setState({ opT7: newT});*/
            )};
}
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
        var newT = [];
        if(this.state.selectedOption.value!='none'){
            fetch("http://localhost:2000/register/" + this.state.selectedOption.value +"/hardskill",
                { method: "GET", })
                .then(response => response.json())
                //.then(response => response.result)
                .then((raws) => {
                    console.log("http://localhost:2000/register/" + this.state.selectedOption.value +"/hardskill");
                    //console.log(raws);
                    raws.forEach((entryss) => {
                        console.log(entryss);
                        console.log(entryss.THName);
                        var temp = {value: entryss.THName, label: entryss.Name};
                        console.log(temp);
                        newT.push(temp);
                });
                this.setState({ opT7: newT});
            }).catch((error) => {
                console.log(error);
                })
            }
        }
	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
	}
	
	handleLoad() {
		console.log("YEAH!");
	}
	render (){
        const { selectedOption } = this.state;
		return ( <div>
		<Select styles={customStyles} options={this.state.opT7} id='selectT7' value={selectedOption}
        onChange={this.handleChange} placeholder="เลือกหมวดทักษะเสริมที่ถนัด"></Select>
	</div>
        )};
}

export default dropsideskill;