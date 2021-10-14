import React, { useState } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';
import './register.css';
import './registab5.css';
import './chooseresume3.css';
/*
var workdata = [
    {
        "WorkHistory_id": "xx01",
        "id": "61388f7c34f592a9d7f788e7",
        "UserId": "613881e534f592a9d7f788cf",
        "Work_JobName": "FUll time Pro Duel list",
        "Work_JobType": "Mainjob",
        "Company": "none",
        "Work_Start_Month": 7,
        "Work_End_Month": 6,
        "Work_Start_Year": 2013,
        "Work_End_Year": 2021,
        "Salary_type": "ไม่ระบุ",
        "Salary": 0,
        "Infomation": "Duel"
    },
    {
        "WorkHistory_id": "xx02",
        "id": "61388f7c34f592a9d7f788e7",
        "UserId": "613881e534f592a9d7f788cf",
        "Work_JobName": "Pro Duel list",
        "Work_JobType": "partime",
        "Company": "kaiba crop",
        "Work_Start_Month": 7,
        "Work_End_Month": 0,
        "Work_Start_Year": 2021,
        "Work_End_Year": 0,
        "Salary_type": "รายได้ต่อเดือน",
        "Salary": 35000,
        "Infomation": "Duel"
    },
    {
        "WorkHistory_id": "xx03",
        "id": "61388f7c34f592a9d7f788e7",
        "UserId": "613881e534f592a9d7f788cf",
        "Work_JobName": "Slave Engineer",
        "Work_JobType": "partime",
        "Company": "1024 crop",
        "Work_Start_Month": 7,
        "Work_End_Month": 99,
        "Work_Start_Year": 2021,
        "Work_End_Year": 9999,
        "Salary_type": "รายได้ต่อเดือน",
        "Salary": 35000,
        "Infomation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt, neque vitae eleifend ornare, leo sem hendrerit lorem, vel hendrerit elit elit et libero. Pellentesque auctor ornare sapien sit amet imperdiet. Nam at justo nibh. Aenean mollis ornare lacus, in ornare odio."
    },
    {
        "WorkHistory_id": "xx04",
        "id": "61388f7c34f592a9d7f788e7",
        "UserId": "613881e534f592a9d7f788cf",
        "Work_JobName": "เงี่ยน",
        "Work_JobType": "partime",
        "Company": "1024 crop",
        "Work_Start_Month": 7,
        "Work_End_Month": 99,
        "Work_Start_Year": 2021,
        "Work_End_Year": 9999,
        "Salary_type": "รายได้ต่อเดือน",
        "Salary": 35000,
        "Infomation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt, neque vitae eleifend ornare, leo sem hendrerit lorem, vel hendrerit elit elit et libero. Pellentesque auctor ornare sapien sit amet imperdiet. Nam at justo nibh. Aenean mollis ornare lacus, in ornare odio."
    }
];
*/
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

var list_of_year_work = {}; //check year
var year_before_work = -1;
var choose_work = [];
var isCheck_work = {};

class Chooseresume2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            workdata : this.props.mywork_data
        }
    }

    handleChange = e => {
        isCheck_work[e.target.value] = e.target.checked;
        if (isCheck_work[e.target.value] === true) {
            choose_work.push(e.target.value);
            console.log(`add ${e.target.value} !!!!!!!!!`);
            //$("#list-certi33" + e.target.value).addClass("choose-certi1111");
        }
        else {
            var removeIndex = choose_work.findIndex(function (post, index_del) {
                if (post == e.target.value)
                    return true;
            });
            choose_work.splice(removeIndex, 1);
            console.log(`delete ${e.target.value} !!!!!!!!!`);
            //$("#list-certi33" + e.target.value).removeClass("choose-certi1111");
        }
        if (choose_work.length === 3) {
            $("#you-choose-list-resume-work11").text("คุณเลือกครบ 3 รายการแล้ว");
            $("#you-choose-list-resume-work11").addClass("you-choose-list-resume-red");
        }
        else if (choose_work.length === 0) {
            $("#you-choose-list-resume-work11").text("");
            $("#you-choose-list-resume-work11").removeClass("you-choose-list-resume-red");
        }
        else {
            $("#you-choose-list-resume-work11").text(`คุณเลือกไปแล้ว ${choose_work.length} รายการ`);
            $("#you-choose-list-resume-work11").removeClass("you-choose-list-resume-red");
        }
        console.log(choose_work);
        console.log(isCheck_work);
    };

    componentDidMount() {
        $(".input-choose-work1:input:checkbox").click(function () {
            var bol = $(".input-choose-work1:input:checkbox:checked").length >= 3;
            $(".input-choose-work1:input:checkbox").not(":checked").attr("disabled", bol);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad)
    }

    render() {
        console.log("tu2", this.props.mywork_data);
        let result = [];
        let listwork = [];
        let end_work;
        let mysalarywork;
        let mycompanywork;
        this.state.workdata.sort(compareValues('Work_Start_Year', 'desc'));
        this.state.workdata.forEach(ele => {
            isCheck_work[ele.WorkHistory_id] = false;
            end_work = [];
            if (ele.Work_End_Month === 99 && ele.Work_End_Year === 9999) {
                end_work.push(<div class="font-titlet4_1">สิ้นสุดยังอยู่ในงาน</div>);
            }
            else if (ele.Work_End_Month === 0 && ele.Work_End_Year === 0) {
                end_work.push(<div class="font-titlet4_1"></div>);
            }
            else if (ele.Work_End_Month === 0 && ele.Work_End_Year != 0) {
                end_work.push(<div class="font-titlet4_1">สิ้นสุด -/{ele.Work_End_Year}</div>);
            }
            else if (ele.Work_End_Month != 0 && ele.Work_End_Year === 0) {
                if (ele.Work_End_Month <= 9) {
                    end_work.push(<div class="font-titlet4_1">สิ้นสุด 0{ele.Work_End_Month}/-</div>);
                }
                else {
                    end_work.push(<div class="font-titlet4_1">สิ้นสุด {ele.Work_End_Month}/-</div>);
                }
            }
            else {
                if (ele.Work_End_Month <= 9) {
                    end_work.push(<div class="font-titlet4_1">สิ้นสุด 0{ele.Work_End_Month}/{ele.Work_End_Year}</div>);
                }
                else {
                    end_work.push(<div class="font-titlet4_1">สิ้นสุด {ele.Work_End_Month}/{ele.Work_End_Year}</div>);
                }
            }
            mysalarywork = [];
            if (ele.Salary_type === "ไม่ระบุ" && ele.Salary == 0) {
                mysalarywork.push(<div class="col font-titlet4_2"></div>);
            }
            else if (ele.Salary_type != "ไม่ระบุ" && ele.Salary == 0) {
                mysalarywork.push(<div class="col font-titlet4_2">- บาท</div>);
            }
            else {
                mysalarywork.push(<div class="col font-titlet4_2">{ele.Salary} บาท</div>);
            }
            mycompanywork = [];
            if (ele.Company == "none") {
                mycompanywork.push(<div class="font-titlet4_1 font-boldt3">-</div>);
            }
            else {
                mycompanywork.push(<div class="font-titlet4_1 font-boldt3">{ele.Company}</div>);
            }
            if (year_before_work != ele.Work_Start_Year) {
                if (listwork.length != 0) {
                    result.push(
                        <div class="content-work1111" id="{contentYear}">
                            {listwork}
                        </div>
                    );
                    listwork = [];
                }
                list_of_year_work[ele.Work_Start_Year] = 1;
                year_before_work = ele.Work_Start_Year;
                result.push(<div id="year-choose-tem-2003"><h1 id="textOfyear_certi">{ele.Work_Start_Year}</h1></div>);
                listwork.push(
                    <div id={ele.WorkHistory_id}>
                        <input
                            class="input-choose-work1"
                            id={'yyy' + ele.WorkHistory_id}
                            type="checkbox"
                            name="vehicle2"
                            value={ele.WorkHistory_id}
                            defaultchecked={isCheck_work[ele.WorkHistory_id]}
                            onChange={this.handleChange}
                            hidden
                        />
                        <label class="t4-content" id="list-work-22" for={'yyy' + ele.WorkHistory_id}>
                            <h5 class="col font-titlet4 font-boldt31">{ele.Work_JobName}</h5>
                            <div class="row">
                                <div class="col font-titlet4_1">
                                    {mycompanywork}
                                    <div class="font-titlet4_1">เริ่มต้น {ele.Work_Start_Month}/{ele.Work_Start_Year}</div>
                                    {end_work}
                                </div>
                                <div class="col-2 newline-text123">{ele.Infomation}</div>
                            </div>
                            <div class="row">
                                <div class="col-3 font-salary font-boldt3">{ele.Salary_type}</div>
                                {mysalarywork}
                            </div>
                            <img class="icon-checkbox1112" height="110" src="assets/images/check_black.png"></img>
                        </label>
                    </div>
                );
            }
            else {
                listwork.push(
                    <div id={ele.WorkHistory_id}>
                        <input
                            class="input-choose-work1"
                            id={'yyy' + ele.WorkHistory_id}
                            type="checkbox"
                            name="vehicle2"
                            value={ele.WorkHistory_id}
                            defaultchecked={isCheck_work[ele.WorkHistory_id]}
                            onChange={this.handleChange}
                            hidden
                        />
                        <label class="t4-content" id="list-work-22" for={'yyy' + ele.WorkHistory_id}>
                            <h5 class="col font-titlet4 font-boldt31">{ele.Work_JobName}</h5>
                            <div class="row">
                                <div class="col font-titlet4_1">
                                    {mycompanywork}
                                    <div class="font-titlet4_1">เริ่มต้น {ele.Work_Start_Month}/{ele.Work_Start_Year}</div>
                                    {end_work}
                                </div>
                                <div class="col-2 newline-text123">{ele.Infomation}</div>
                            </div>
                            <div class="row">
                                <div class="col-3 font-salary font-boldt3">{ele.Salary_type}</div>
                                {mysalarywork}
                            </div>
                            <img class="icon-checkbox1112" height="110" src="assets/images/check_black.png"></img>
                        </label>
                    </div>
                );
                list_of_year_work[ele.Work_Start_Year] += 1;
            }

        });
        result.push(
            <div class="content-work1111" id="{contentYear}">
                {listwork}
            </div>
        );
        listwork = [];
        return (
            <div className="Registab4">
                <h2 class="head-of-choose-resume-tab2">คุณสามารถเลือกประวัติการทำงานที่สอดคล้องกับตำแหน่งงานที่สนใจได้สูงสุด 3 รายการ</h2>
                <div class="regis-box-content1">
                    <div class="myresume-choose-work11">
                        {result}
                    </div>
                </div>
                <h5 class="you-choose-list-resume" id="you-choose-list-resume-work11"></h5>
            </div>

        );
    }
}

export default Chooseresume2;