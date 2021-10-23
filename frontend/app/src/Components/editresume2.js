import React, { useState } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';
import './register.css';
import './registab5.css';
import './chooseresume3.css';


class Editresume2 extends React.Component {

    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        var list_of_year_work = {}; //check year
        var year_before_work = -1;
        var choose_work = [];
        var isCheck_work = {};
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
        setTimeout(() => {
            const mywork2 = this.props.mywork_data ? this.props.mywork_data : [];
            var tmp2 = [...mywork2];
            tmp2.sort(compareValues('Work_Start_Year', 'desc'));
            tmp2.forEach(ele => {
                //isCheck_work[ele.WorkHistory_id] = false;
                let grid_work2 = `<div id="{ele.WorkHistory_id}">\
                                        <input\
                                            class="input-choose-work1"\
                                            id="{yyyele.WorkHistory_id}"\
                                            type="checkbox"\
                                            value="{ele.WorkHistory_id}"\
                                            {ischeck}\
                                            hidden\
                                        />\
                                        <label class="t4-content" id="list-work-22" for="{yyyxxcxele.WorkHistory_id}">\
                                            <h5 class="col font-titlet4 font-boldt31">{ele.Work_JobName}</h5>\
                                            <div class="row">\
                                                <div class="col font-titlet4_1">\
                                                    <div class="font-titlet4_1 font-boldt3">{company_work}</div>\
                                                    <div class="font-titlet4_1">เริ่มต้น {ele.Work_Start_Month}/{ele.Work_Start_Year}</div>\
                                                    <div class="font-titlet4_1">สิ้นสุด {month_endwork}/{year_endwork}</div>\
                                                </div>\
                                                <div class="col-2 newline-text123">{ele.Infomation}</div>\
                                            </div>\
                                            <div class="row">\
                                                <div class="col-3 font-salary font-boldt3">{ele.Salary_type}</div>\
                                                <div class="col font-titlet4_2">{salary_work} บาท</div>\
                                            </div>\
                                            <img class="icon-checkbox1112" height="110" src="assets/images/check_black.png" oncontextmenu="return false;" ondragstart="return false;"></img>\
                                        </label>\
                                    </div>`;
                let headyearworkkk1 = `<div id="{show-year25}">\
                                            <h1 id="textOfyear_certi">{ele.Work_Start_Year}</h1>\
                                       </div>\
                                       <div class="content-work1111" id="{contentYear}">`;
                grid_work2 = grid_work2.replace("{ele.WorkHistory_id}", ele.WorkHistory_id);
                grid_work2 = grid_work2.replace("{yyyele.WorkHistory_id}", "yyy" + ele.WorkHistory_id);
                grid_work2 = grid_work2.replace("{ele.WorkHistory_id}", ele.WorkHistory_id);
                grid_work2 = grid_work2.replace("{ischeck}", ele.isCheckWork ? "checked" : "");
                grid_work2 = grid_work2.replace("{yyyxxcxele.WorkHistory_id}", "yyy" + ele.WorkHistory_id);
                grid_work2 = grid_work2.replace("{ele.Work_JobName}", ele.Work_JobName);
                if (ele.Company == "none" || ele.Company == "") {
                    grid_work2 = grid_work2.replace("{company_work}", "-");
                }
                else {
                    grid_work2 = grid_work2.replace("{company_work}", ele.Company);
                }
                if (ele.Work_Start_Month < 10) {
                    grid_work2 = grid_work2.replace("{ele.Work_Start_Month}", `0` + ele.Work_Start_Month);
                }
                else {
                    grid_work2 = grid_work2.replace("{ele.Work_Start_Month}", ele.Work_Start_Month);
                }
                grid_work2 = grid_work2.replace("{ele.Work_Start_Year}", ele.Work_Start_Year);
                if (ele.Work_End_Month === 99 && ele.Work_End_Year === 9999) {
                    grid_work2 = grid_work2.replace("สิ้นสุด {month_endwork}/{year_endwork}", "ยังอยู่ในงาน");
                }
                else if ((ele.Work_End_Month === 0 && ele.Work_End_Year === 0) || (ele.Work_End_Month === null && ele.Work_End_Year === null)) {
                    grid_work2 = grid_work2.replace("สิ้นสุด {month_endwork}/{year_endwork}", "");
                }
                else if (ele.Work_End_Month === 0 && ele.Work_End_Year != 0) {
                    grid_work2 = grid_work2.replace("{month_endwork}", "-");
                    grid_work2 = grid_work2.replace("{year_endwork}", ele.Work_End_Year);
                }
                else if (ele.Work_End_Month != 0 && ele.Work_End_Year === 0) {
                    if (ele.Work_End_Month <= 9) {
                        grid_work2 = grid_work2.replace("{month_endwork}", "0" + ele.Work_End_Month);
                    }
                    else {
                        grid_work2 = grid_work2.replace("{month_endwork}", ele.Work_End_Month);
                    }
                    grid_work2 = grid_work2.replace("{year_endwork}", "-");
                }
                else {
                    if (ele.Work_End_Month <= 9) {
                        grid_work2 = grid_work2.replace("{month_endwork}", "0" + ele.Work_End_Month);
                    }
                    else {
                        grid_work2 = grid_work2.replace("{month_endwork}", ele.Work_End_Month);
                    }
                    grid_work2 = grid_work2.replace("{year_endwork}", ele.Work_End_Year);
                }
                grid_work2 = grid_work2.replace("{ele.Salary_type}", ele.SalaryType);
                if ((ele.SalaryType === "ไม่ระบุ" || ele.SalaryType === "") && (ele.Salary === 0 || ele.Salary === null)) {
                    grid_work2 = grid_work2.replace("{salary_work} บาท", "");
                }
                else if (ele.SalaryType != "ไม่ระบุ" && ele.Salary === 0 && (ele.Salary === 0 || ele.Salary === null)) {
                    grid_work2 = grid_work2.replace("{salary_work}", "-");
                }
                else {
                    grid_work2 = grid_work2.replace("{salary_work}", ele.Salary);
                }
                grid_work2 = grid_work2.replace("{ele.Infomation}", ele.Infomation);
                if (year_before_work != ele.Work_Start_Year) {
                    list_of_year_work[ele.Work_Start_Year] = 1;
                    year_before_work = ele.Work_Start_Year;
                    headyearworkkk1 = headyearworkkk1.replace("{show-year25}", `fhshsmhm_` + String(ele.Work_Start_Year));
                    headyearworkkk1 = headyearworkkk1.replace("{ele.Work_Start_Year}", String(ele.Work_Start_Year));
                    headyearworkkk1 = headyearworkkk1.replace("{contentYear}", `contentYear-workresume_` + String(ele.Work_Start_Year));
                    $(".myresume-choose-work11").append(headyearworkkk1);
                }
                else {
                    list_of_year_work[ele.Work_Start_Year] += 1;
                }
                $(`#contentYear-workresume_` + String(ele.Work_Start_Year)).append(grid_work2);
            });
        }, 9000);
        /*$(document).on("click", ".input-choose-work1", function () {
            choose_work = $('.input-choose-work1:input[type=checkbox]:checked').map(function (_, el) {
                return $(el).val();
            }).get();
            console.log("susss:", choose_work);
        });*/
        $(document).on("click", ".input-choose-work1:input:checkbox", function () {
            var bol = $(".input-choose-work1:input:checkbox:checked").length >= 3;
            $(".input-choose-work1:input:checkbox").not(":checked").attr("disabled", bol);
        });
        /*$(document).on("change", ".input-choose-work1", function () {
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
        });*/
    }

    componentWillReceiveProps(props) {
        console.log("Gsgsfw");
        console.log(props.mywork_data);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
        //$(window).unbind('scroll');
    }

    handleLoad() {
        console.log("YEAH!");
    }

    render() {
        return (
            <div className="Registab4">
                <h2 class="head-of-choose-resume-tab2">คุณสามารถเลือกประวัติการทำงานที่สอดคล้องกับตำแหน่งงานที่สนใจได้สูงสุด 3 รายการ</h2>
                <div class="Editresume-box-content1">
                    <div class="myresume-choose-work11">
                    </div>
                </div>
                <h5 class="you-choose-list-resume" id="you-choose-list-resume-work11"></h5>
            </div>
        );
    }
}

export default Editresume2;