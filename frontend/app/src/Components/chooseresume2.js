import React, { useState } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';
import './register.css';
import './registab5.css';
import './chooseresume3.css';

const workdata = [
    {
        "id": "61388f7c34f592a9d7f788e7",
        "UserId": "613881e534f592a9d7f788cf",
        "Work_JobName": "FUll time Pro Duel list",
        "Work_JobType": "Mainjob",
        "Company": "none",
        "Work_Start_Month": 7,
        "Work_End_Month": 6,
        "Work_Start_Year": 2013,
        "Work_End_Year": 2021,
        "Salary": 35000,
        "Infomation": "Duel"
    },
    {
        "id": "61388f7c34f592a9d7f788e7",
        "UserId": "613881e534f592a9d7f788cf",
        "Work_JobName": "Pro Duel list",
        "Work_JobType": "partime",
        "Company": "kaiba crop",
        "Work_Start_Month": 7,
        "Work_End_Month": 9,
        "Work_Start_Year": 2013,
        "Work_End_Year": 2021,
        "Salary": 35000,
        "Infomation": "Duel"
    },
    {
        "id": "61388f7c34f592a9d7f788e7",
        "UserId": "613881e534f592a9d7f788cf",
        "Work_JobName": "Slave Engineer",
        "Work_JobType": "partime",
        "Company": "1024 crop",
        "Work_Start_Month": 7,
        "Work_End_Month": 99,
        "Work_Start_Year": 2021,
        "Work_End_Year": 9999,
        "Salary": 35000,
        "Infomation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt, neque vitae eleifend ornare, leo sem hendrerit lorem, vel hendrerit elit elit et libero. Pellentesque auctor ornare sapien sit amet imperdiet. Nam at justo nibh. Aenean mollis ornare lacus, in ornare odio."
    }
];



function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }
        var varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        var varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

var list_of_year_certi = {}; //check year
var year_before_certi = -1;
var choose_certi = [];
var isCheck_certi = {};

class Chooseresume2 extends React.Component {

    constructor(props) {
        super(props);
        /* this.state = {
             isChecked: false,
         };*/
    }

    handleChange = e => {

    };

    componentDidMount() {

    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad)
    }

    render() {
        let result = [];

        return (
            <div className="Registab4">
                <div class="regis-box-content1">
                    ประวัติการทำงาน
                </div>
            </div>
        );
    }
}

export default Chooseresume2;