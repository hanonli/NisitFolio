import React, { useState } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';
import './register.css';
import './registab5.css';
import './chooseresume3.css';

var certdata = [{
    "certi_id": "xx01",
    "id": "6135805ad633f137e4559260",
    "UserId": "61358059d633f137e455925c",
    "ResumeId": "6135805ad633f137e4559260",
    "CertName": "การแข่งขันการ์ดยูกิ",
    "CertPic": "assets/images/certi_ex.jpeg",
    "CertYear": 1999
},
{
    "certi_id": "xx02",
    "id": "6135805bd633f137e4559261",
    "UserId": "61358059d633f137e455925c",
    "ResumeId": "6135805bd633f137e4559261",
    "CertName": "การแข่งขันเอกอิเอ้กเอ้กก",
    "CertPic": "assets/images/certi_ex3.jpeg",
    "CertYear": 2002
},
{
    "certi_id": "xx03",
    "id": "6135805bd633f137e4559261",
    "UserId": "61358059d633f137e455925c",
    "ResumeId": "6135805bd633f137e4559261",
    "CertName": "การแข่งขันนอนกลางวัน",
    "CertPic": "assets/images/certi_ex2.jpeg",
    "CertYear": 2003
},
{
    "certi_id": "xx04",
    "id": "6135805bd633f137e4559261",
    "UserId": "61358059d633f137e455925c",
    "ResumeId": "6135805bd633f137e4559261",
    "CertName": "การแข่งขันนอนกลางวัน",
    "CertPic": "assets/images/trylargesizeimg.jpg",
    "CertYear": 2003
}];

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

class Chooseresume3 extends React.Component {

    handleChange = e => {
        isCheck_certi[e.target.value] = !isCheck_certi[e.target.value];
        if (isCheck_certi[e.target.value] === true) {
            choose_certi.push(e.target.value);
            console.log(`add ${e.target.value} !!!!!!!!!`);
            //$("#list-certi33" + e.target.value).addClass("choose-certi1111");
        }
        else {
            var removeIndex = choose_certi.findIndex(function (post, index_del) {
                if (post == e.target.value)
                    return true;
            });
            choose_certi.splice(removeIndex, 1);
            console.log(`delete ${e.target.value} !!!!!!!!!`);
            //$("#list-certi33" + e.target.value).removeClass("choose-certi1111");
        }
        console.log(choose_certi);
        console.log(isCheck_certi);
    };

    componentDidMount() {
        /*let head_year_certi = (<div id="year-choose-tem-2003"><h1 id="textOfyear_certi">2003</h1></div>);
        let content_certi = (
            <div class="content-certi1">
                {listcerti}
            </div>
        );
        let list_of_certi = (
            <div id="xx05">
                <input id="xxx112" type="checkbox" name="vehicle1" value="xx05" hidden></input>
                <label id="list-certi33" class="card_certi" for="xxx112">
                    <h1 id="name-of-certi">กNullam eu erat nec turpis dictum augue.</h1>
                    <h1 id="year-of-certi">2003</h1>
                    <div class="pos-pic-of-certi">
                        <img height="142" src="assets/images/certi_ex2.jpeg" id="border_certi"></img>
                    </div>
                    <div class="icon-checkbox1111"><img height="110" src="assets/images/check_black.png"></img></div>
                </label>
            </div>
        );*/
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad)
    }

    render() {
        console.log("tu3", this.props.mycerti_data);
        let result = [];
        let listcerti = [];
        certdata.sort(compareValues('CertYear', 'desc'));
        certdata.forEach(ele => {
            isCheck_certi[ele.certi_id] = false;
            if (year_before_certi != ele.CertYear) {
                if (listcerti.length != 0) {
                    result.push(
                        <div class="content-certi1">
                            {listcerti}
                        </div>
                    );
                    listcerti = [];
                }
                list_of_year_certi[ele.CertYear] = 1;
                year_before_certi = ele.CertYear;
                result.push(<div id="year-choose-tem-2003"><h1 id="textOfyear_certi">{ele.CertYear}</h1></div>);
                listcerti.push(
                    <div id={ele.certi_id}>
                        <input
                            id={`xxx` + ele.certi_id}
                            type="checkbox"
                            name="vehicle1"
                            value={ele.certi_id}
                            defaultchecked={isCheck_certi[ele.certi_id]}
                            onChange={this.handleChange}
                            hidden
                        />
                        <label id="list-certi33" class="card_certi" for={`xxx` + ele.certi_id}>
                            <h1 id="name-of-certi">{ele.CertName}</h1>
                            <h1 id="year-of-certi">{ele.CertYear}</h1>
                            <div class="pos-pic-of-certi">
                                <img height="142" src={ele.CertPic} id="border_certi"></img>
                            </div>
                            <div class="icon-checkbox1111"><img height="110" src="assets/images/check_black.png"></img></div>
                        </label>
                    </div >
                );
            }
            else {
                listcerti.push(
                    <div id={ele.certi_id}>
                        <input
                            id={`xxx` + ele.certi_id}
                            type="checkbox"
                            name="vehicle1"
                            value={ele.certi_id}
                            defaultchecked={isCheck_certi[ele.certi_id]}
                            onChange={this.handleChange}
                            hidden
                        />
                        <label id="list-certi33" class="card_certi" for={`xxx` + ele.certi_id}>
                            <h1 id="name-of-certi">{ele.CertName}</h1>
                            <h1 id="year-of-certi">{ele.CertYear}</h1>
                            <div class="pos-pic-of-certi">
                                <img height="142" src={ele.CertPic} id="border_certi"></img>
                            </div>
                            <div class="icon-checkbox1111"><img height="110" src="assets/images/check_black.png"></img></div>
                        </label>
                    </div>
                );
                list_of_year_certi[ele.CertYear] += 1;
            }
        });
        result.push(
            <div class="content-certi1">
                {listcerti}
            </div>
        ); // push last year
        listcerti = [];

        return (
            <div className="Registab5">
                <div class="regis-box-content1">
                    <div class="myresume-choose-certi11">
                        {result}
                    </div>
                </div>
            </div>
        );
    }
}

export default Chooseresume3;