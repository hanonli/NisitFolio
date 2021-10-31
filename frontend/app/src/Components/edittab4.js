import React from 'react';
import $ from 'jquery';
import "./registab4.css";
import cookie from 'react-cookies';

class Edittab4 extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.state = ({
            statusUpload4: "",
            imgStatus4: ""
        });
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        var workedit = this;
        //alert("อย่าเพิ่ง add edit delete");
        var token4 = cookie.load('login-token');
        var backup_year_endwork = 0, backup_month_endwork = 0, backup_salary = "";
        var list_of_work = []; //list of work
        var list_of_year_work = {}; //check year
        var year_before_work;
        var choose_function = -1; //default stutus before add(2) or edit(1)
        var for_edit;
        var id_list_work_edit;
        var id_list_work_del;
        //console.log("edittab4!!!!:", this.props.mywork_data);
        var mywork2 = this.props.mywork_data ? this.props.mywork_data : [];
        list_of_work = [...mywork2];
        show_work();

        /*------order list------*/
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

        function isNumberTab4(n) {
            return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
        }

        function show_work() {
            year_before_work = -1;
            list_of_year_work = {};
            list_of_work.sort(compareValues('Work_Start_Year', 'desc'));
            list_of_work.forEach(ele => {
                let grid_work1 = `<div class="t4-content" id="{no_work}">\
                            <h5 class="col font-titlet4 font-boldt31">{pos_work}</h5>\
                            <div class="row">\
                                <div class="col font-titlet4_1">\
                                    <div class="font-titlet4_1 font-boldt3">{company_work}</div>\
                                    <div class="font-titlet4_1">เริ่มต้น {month_startwork}/{year_startwork}</div>`;

                let grid_work2 = `<div class="font-titlet4_1">สิ้นสุด {month_endwork}/{year_endwork}</div>`;

                let grid_work3 = `</div>\
                                <div class="col-2 newline-text123">{inform_work}</div>\
                            </div>\
                            <div class="row">\
                                <div class="col-3 font-salary font-boldt3">{type_salary}</div>\
                                <div class="col font-titlet4_2">{salary_work} บาท</div>\
                            </div>\
                            <div class="layer_icon2">\
                                <div class="set-layer_icon2">\
                                    <button type="button" class="btn" id="edit-work"><img src="assets/images/blackedit.png" width="35" height="35"></img></button>\
                                    <button type="button" class="btn" id="del-work"><img src="assets/images/bin.png" width="50" height="50"></img></button>\                               
                                </div>\
                            </div>\
                        </div>`;
                let headOfyear1234 = `<div id="{show-year}" >\
                                <h1 id="textOfyear_work">{head-year}</h1>\
                              </div>\
                              <div class="content-work1111-edit" id="{contentYear}"></div>`;
                grid_work1 = grid_work1.replace("{no_work}", ele["WorkHistory_id"]);
                grid_work1 = grid_work1.replace("{pos_work}", ele["Work_JobName"]);
                if (ele["Company"] != "") {
                    grid_work1 = grid_work1.replace("{company_work}", ele["Company"]);
                }
                else {
                    grid_work1 = grid_work1.replace("{company_work}", "");
                }
                if (ele["Work_Start_Month"] < 10) {
                    grid_work1 = grid_work1.replace("{month_startwork}", `0` + ele["Work_Start_Month"]);
                }
                else {
                    grid_work1 = grid_work1.replace("{month_startwork}", ele["Work_Start_Month"]);
                }
                grid_work1 = grid_work1.replace("{year_startwork}", ele["Work_Start_Year"]);
                if (ele["reeggiist4_cb"] == true) {
                    grid_work2 = grid_work2.replace("สิ้นสุด {month_endwork}/{year_endwork}", `ยังอยู่ในงาน`);
                }
                else {
                    if ((Number.isNaN(ele["Work_End_Month"]) === true && Number.isNaN(ele["Work_End_Year"]) === true) || (ele["Work_End_Month"] === 0 && ele["Work_End_Year"] === 0) || (ele.Work_End_Month === null && ele.Work_End_Year === null)) {
                        grid_work2 = "";
                    }
                    else if ((Number.isNaN(ele["Work_End_Month"]) === true && Number.isNaN(ele["Work_End_Year"]) === false) || (ele["Work_End_Month"] === 0 && ele["Work_End_Year"] !== 0)) {
                        grid_work2 = grid_work2.replace("{month_endwork}", `-`);
                        grid_work2 = grid_work2.replace("{year_endwork}", ele["Work_End_Year"]);
                    }
                    else if ((Number.isNaN(ele["Work_End_Year"]) === true && Number.isNaN(ele["Work_End_Month"]) === false) || (ele["Work_End_Month"] !== 0 && ele["Work_End_Year"] === 0)) {
                        grid_work2 = grid_work2.replace("{year_endwork}", `-`);
                        if (ele["Work_End_Month"] < 10) {
                            grid_work2 = grid_work2.replace("{month_endwork}", `0` + ele["Work_End_Month"]);
                        }
                        else {
                            grid_work2 = grid_work2.replace("{month_endwork}", ele["Work_End_Month"]);
                        }
                    }
                    else {
                        if (ele["Work_End_Month"] < 10) {
                            grid_work2 = grid_work2.replace("{month_endwork}", `0` + ele["Work_End_Month"]);
                        }
                        else {
                            grid_work2 = grid_work2.replace("{month_endwork}", ele["Work_End_Month"]);
                        }
                        grid_work2 = grid_work2.replace("{year_endwork}", ele["Work_End_Year"]);
                    }
                }
                grid_work3 = grid_work3.replace("{type_salary}", ele["SalaryType"]);

                if ((ele.SalaryType === "ไม่ระบุ" || ele.SalaryType === "") && (ele.Salary === 0 || ele.Salary === null)) {
                    grid_work3 = grid_work3.replace("{salary_work} บาท", "");
                }
                else if (ele.SalaryType != "ไม่ระบุ" && ele.Salary === 0 && (ele.Salary === 0 || ele.Salary === null)) {
                    grid_work3 = grid_work3.replace("{salary_work}", "-");
                }
                else {
                    if (Number.isNaN(ele.Salary) == false) {
                        grid_work3 = grid_work3.replace("{salary_work}", ele["Salary"]);
                    }
                    else {
                        grid_work3 = grid_work3.replace("{salary_work}", "-");
                    }
                }
                grid_work3 = grid_work3.replace("{inform_work}", ele["Infomation"]);
                if (year_before_work != ele["Work_Start_Year"]) {
                    list_of_year_work[ele["Work_Start_Year"]] = 1;
                    year_before_work = ele["Work_Start_Year"];
                    headOfyear1234 = headOfyear1234.replace("{show-year}", `yearOf_` + String(ele["Work_Start_Year"]));
                    headOfyear1234 = headOfyear1234.replace("{head-year}", String(ele["Work_Start_Year"]));
                    headOfyear1234 = headOfyear1234.replace("{contentYear}", `contentYear-work_` + String(ele["Work_Start_Year"]));
                    $(".box-box-box-work1-edit").append(headOfyear1234);
                }
                else {
                    list_of_year_work[ele["Work_Start_Year"]] += 1;
                }
                $("#contentYear-work_" + String(ele["Work_Start_Year"])).append(grid_work1 + grid_work2 + grid_work3);
            });
            //console.log("list_of_work:", list_of_work);
        }

        //open modal to add work
        $(document).on("click", ".registab4_formbox", function () {
            choose_function = 2;
            $('#registab4Modal').modal('toggle');
            $("#salary_work").prop("disabled", true);
            document.querySelector('#submit-work').innerText = 'เพิ่ม';
        });

        //open modal to edit work
        $(document).on("click", "#edit-work", function () {
            choose_function = 1;
            id_list_work_edit = $(this).parents().parents().parents().attr('id');
            //console.log("id_list_work111:", id_list_work_edit);
            $('#registab4Modal').modal('toggle');
            document.querySelector('#submit-work').innerText = 'ตกลง';
            for_edit = list_of_work.find(function (post, index_del) {
                if (post.WorkHistory_id === id_list_work_edit)
                    return true;
            });
            //document.getElementById("jobtype_work").value = for_edit.type_work;
            //document.getElementById("jobtype_work").selectedIndex = for_edit.Work_JobType_select;
            $("#jobtype_work").val(for_edit.Work_JobType);
            document.getElementById("jobname_work").value = for_edit.Work_JobName;
            document.getElementById("company_work").value = for_edit.Company;
            //document.getElementById("salarytype_work").value = for_edit.type_salary_work;
            //document.getElementById("salarytype_work").selectedIndex = for_edit.SalaryType_select;
            $("#salarytype_work").val(for_edit.SalaryType);
            if (Number.isNaN(for_edit.Salary) == false) {
                document.getElementById("salary_work").value = for_edit.Salary;
            }
            else {
                document.getElementById("salary_work").value = '';
            }
            if (for_edit.SalaryType == "ไม่ระบุ" || for_edit.SalaryType_select == 0) {
                $("#salary_work").prop("disabled", true);
                document.getElementById("salary_work").value = "";
            }
            else {
                $("#salary_work").prop("disabled", false);
            }
            //document.getElementById("year_startwork").selectedIndex = for_edit.Work_Start_Year_select;
            $("#year_startwork").val(for_edit.Work_Start_Year);
            //document.getElementById("month_startwork").selectedIndex = for_edit.Work_Start_Month_select;
            $("#month_startwork").val(for_edit.Work_Start_Month);
            //document.getElementById("year_endwork").selectedIndex = for_edit.Work_End_Year_select;
            if (for_edit.Work_End_Year !== 0 && Number.isNaN(for_edit["Work_End_Year"]) !== true) {
                $("#year_endwork").val(for_edit.Work_End_Year);
            }
            else {
                $("#year_endwork").val('');
            }
            if (for_edit.Work_End_Month !== 0 && Number.isNaN(for_edit["Work_End_Month"]) !== true) {
                $("#month_endwork").val(for_edit.Work_End_Month);
            }
            else {
                $("#month_endwork").val('');
            }
            //document.getElementById("month_endwork").selectedIndex = for_edit.Work_End_Month_select;

            backup_year_endwork = for_edit["backup_year_endwork"];
            backup_month_endwork = for_edit["backup_month_endwork"];
            $('#regist4_cb').prop('checked', for_edit.reeggiist4_cb);
            if (for_edit.reeggiist4_cb == true) {
                $("#year_endwork").prop("disabled", true);
                $("#month_endwork").prop("disabled", true);
                $("#year_endwork").val('');
                $("#month_endwork").val('');
            }
            document.getElementById("inform_work").value = for_edit.Infomation;
        });

        //open modal to delete certi (uncomplete!!!!!!!!!!!!!!!!!!)
        $(document).on("click", "#del-work", function () {
            id_list_work_del = $(this).parents().parents().parents().attr('id');
            $('#Modal_remove_work').modal('toggle');
        });

        $(document).on("click", "#sub_del_work", function () {
            var removeIndex = list_of_work.findIndex(function (post, index_del) {
                if (post.WorkHistory_id === id_list_work_del)
                    return true;
            });

            fetch("http://localhost:2000/register/workHistory/" + list_of_work[removeIndex].WorkHistory_id, {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + list_of_work[removeIndex].token,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Content-Type": "application/json"
                },
            })
                .then(response => response.json())
                .then((raws) => {
                    //console.log(raws);
                    if (!("message" in raws)) {
                        list_of_year_work[list_of_work[removeIndex]["Work_Start_Year"]] -= 1;
                        if (list_of_year_work[list_of_work[removeIndex]["Work_Start_Year"]] == 0) {
                            $(`#yearOf_` + String(list_of_work[removeIndex]["Work_Start_Year"])).remove();
                        }
                        list_of_work.splice(removeIndex, 1);
                        $(`#` + id_list_work_del).remove();
                        $('#Modal_remove_work').modal('hide');
                    }

                }).catch((error) => {
                    //console.log(error);
                });

        });

        $(document).on("click", "#can_del_work", function () {
            $('#Modal_remove_work').modal('hide');
        });

        //change status 
        $(document).on('change', "#regist4_cb", function () {
            if ($('#regist4_cb').prop('checked') == true) {
                $("#year_endwork").prop("disabled", true);
                $("#month_endwork").prop("disabled", true);
                backup_year_endwork = document.getElementById("year_endwork").selectedIndex;
                backup_month_endwork = document.getElementById("month_endwork").selectedIndex;
                document.getElementById("year_endwork").selectedIndex = "0";
                document.getElementById("month_endwork").selectedIndex = "0";
            }
            else {
                /*$("#year_endwork").removeClass("dis_input444");
                $("#month_endwork").removeClass("dis_input444");*/
                $("#year_endwork").prop("disabled", false);
                $("#month_endwork").prop("disabled", false);
                $("#year_endwork").removeClass("is-invalid");
                $("#month_endwork").removeClass("is-invalid");
                document.getElementById("year_endwork").selectedIndex = backup_year_endwork;
                document.getElementById("month_endwork").selectedIndex = backup_month_endwork;
            }
        });

        $(document).on('change', "#jobtype_work", function () {
            if (document.getElementById("jobtype_work").selectedIndex != 0) {
                $("#jobtype_work").removeClass("is-invalid");
            }
        });

        $(document).on('change', "#jobname_work", function () {
            if (document.getElementById("jobname_work").selectedIndex != 0) {
                $("#jobname_work").removeClass("is-invalid");
            }
        });

        $(document).on('change', "#year_startwork", function () {
            if (document.getElementById("year_startwork").selectedIndex != 0) {
                $("#year_startwork").removeClass("is-invalid");
            }
        });

        $(document).on('change', "#month_startwork", function () {
            if (document.getElementById("month_startwork").selectedIndex != 0) {
                $("#month_startwork").removeClass("is-invalid");
            }
        });

        $(document).on('change', "#year_endwork", function () {
            if (document.getElementById("year_endwork").selectedIndex != 0) {
                $("#year_endwork").removeClass("is-invalid");
            }
        });

        $(document).on('change', "#month_endwork", function () {
            if (document.getElementById("month_endwork").selectedIndex != 0) {
                $("#month_endwork").removeClass("is-invalid");
            }
        });

        $(document).on('change', "#salary_work", function () {
            if (Number.isNaN(parseInt(document.getElementById("salary_work").value)) == false) {
                $("#salary_work").removeClass("is-invalid");
            }
        });

        $(document).on('change', "#salarytype_work", function () {
            if ($("#salarytype_work").val() == "ไม่ระบุ" || document.getElementById("salarytype_work").selectedIndex == "0") {
                $("#salary_work").prop("disabled", true);
                document.getElementById("salary_work").value = "";
            }
            else {
                $("#salary_work").prop("disabled", false);
            }
        });

        //submit data to list 
        $(document).on('click', "#submit-work", function () {
            $("#for-error-dgd").removeClass("status-saving5555-red");
            var type_work = document.getElementById("jobtype_work").value;
            var pos_work = document.getElementById("jobname_work").value;
            var company_work = document.getElementById("company_work").value;
            var type_salary_work = document.getElementById("salarytype_work").value;
            var salary_work = document.getElementById("salary_work").value;
            var year_startwork = document.getElementById("year_startwork").value;
            var month_startwork = document.getElementById("month_startwork").value;
            var year_endwork = document.getElementById("year_endwork").value;
            var month_endwork = document.getElementById("month_endwork").value;
            var reeggiist4_cb = $('#regist4_cb').prop('checked');
            var inform_work = document.getElementById("inform_work").value;
            if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("jobname_work").value == "" && document.getElementById("year_startwork").value == "" && document.getElementById("month_startwork").value == "") {
                $("#jobtype_work").addClass("is-invalid");
                $("#jobname_work").addClass("is-invalid");
                $("#year_startwork").addClass("is-invalid");
                $("#month_startwork").addClass("is-invalid");
            }
            else if (document.getElementById("jobname_work").value == "" && document.getElementById("year_startwork").value == "" && document.getElementById("month_startwork").value == "") {
                $("#jobname_work").addClass("is-invalid");
                $("#year_startwork").addClass("is-invalid");
                $("#month_startwork").addClass("is-invalid");
            }
            else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("year_startwork").value == "" && document.getElementById("month_startwork").value == "") {
                $("#jobtype_work").addClass("is-invalid");
                $("#year_startwork").addClass("is-invalid");
                $("#month_startwork").addClass("is-invalid");
            }
            else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("jobname_work").value == "" && document.getElementById("year_startwork").value == "" && document.getElementById("month_startwork").value == "") {
                $("#jobtype_work").addClass("is-invalid");
                $("#jobname_work").addClass("is-invalid");
                $("#month_startwork").addClass("is-invalid");
            }
            else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("jobname_work").value == "" && document.getElementById("year_startwork").value == "") {
                $("#jobtype_work").addClass("is-invalid");
                $("#jobname_work").addClass("is-invalid");
                $("#year_startwork").addClass("is-invalid");
            }
            else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("jobname_work").value == "") {
                $("#jobtype_work").addClass("is-invalid");
                $("#jobname_work").addClass("is-invalid");
            }
            else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("year_startwork").value == "") {
                $("#jobtype_work").addClass("is-invalid");
                $("#year_startwork").addClass("is-invalid");
            }
            else if (document.getElementById("jobtype_work").selectedIndex == 0 && document.getElementById("month_startwork").value == "") {
                $("#jobtype_work").addClass("is-invalid");
                $("#month_startwork").addClass("is-invalid");
            }
            else if (document.getElementById("jobname_work").value == "" && document.getElementById("year_startwork").value == "") {
                $("#jobname_work").addClass("is-invalid");
                $("#year_startwork").addClass("is-invalid");
            }
            else if (document.getElementById("jobname_work").value == "" && document.getElementById("month_startwork").value == "") {
                $("#jobname_work").addClass("is-invalid");
                $("#month_startwork").addClass("is-invalid");
            }
            else if (document.getElementById("year_startwork").value == "" && document.getElementById("month_startwork").value == "") {
                $("#year_startwork").addClass("is-invalid");
                $("#month_startwork").addClass("is-invalid");
            }
            else if (document.getElementById("jobtype_work").selectedIndex == 0) {
                $("#jobtype_work").addClass("is-invalid");
            }
            else if (document.getElementById("jobname_work").value == "") {
                $("#jobname_work").addClass("is-invalid");
            }
            else if (document.getElementById("year_startwork").value == "") {
                $("#year_startwork").addClass("is-invalid");
            }
            else if (document.getElementById("month_startwork").value == "") {
                $("#month_startwork").addClass("is-invalid");
            }
            else if ((document.getElementById("salary_work").value != "" && isNumberTab4(document.getElementById("salary_work").value) == false) || parseInt(document.getElementById("salary_work").value) < 0) {
                $("#salary_work").addClass("is-invalid");
            }
            else if ($('#regist4_cb').prop('checked') == false && parseInt(document.getElementById("year_endwork").value) < parseInt(document.getElementById("year_startwork").value)) {
                $("#year_endwork").addClass("is-invalid");
            }
            else if ($('#regist4_cb').prop('checked') == false && parseInt(document.getElementById("year_endwork").value) == parseInt(document.getElementById("year_startwork").value) && parseInt(document.getElementById("month_endwork").value) < parseInt(document.getElementById("month_startwork").value)) {
                $("#month_endwork").addClass("is-invalid");
            }
            else {
                workedit.setState({ statusUpload4: "Saving...", imgStatus4: "assets/images/outline_cached_black_24dp.png" });
                let sendWork2back = {
                    "Work_JobName": pos_work,
                    "Work_JobType": type_work,
                    "Company": company_work,
                    "Work_Start_Month": parseInt(month_startwork),
                    "Work_Start_Year": parseInt(year_startwork),
                    "Work_End_Month": reeggiist4_cb ? 99 : (year_endwork === "" ? 0 : parseInt(month_endwork)),
                    "Work_End_Year": reeggiist4_cb ? 9999 : (year_endwork === "" ? 0 : parseInt(year_endwork)),
                    "SalaryType": type_salary_work,
                    "Salary": parseInt(salary_work),
                    "Infomation": inform_work
                }
                if (choose_function == 1) {
                    fetch("http://localhost:2000/register/workHistory/" + id_list_work_edit, {
                        method: "PATCH",
                        headers: {
                            'Authorization': 'Bearer ' + token4,
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(sendWork2back)
                    })
                        .then(response => response.json())
                        .then((raws) => {
                            //console.log(raws);
                            if ("message" in raws) {
                                workedit.setState({ statusUpload4: "Save Failed", imgStatus4: "assets/images/baseline_error_black_24dp.png" });
                                $("#for-error-dgd").addClass("status-saving5555-red");
                            }
                            else {
                                for_edit["Work_JobType"] = type_work;
                                //for_edit["Work_JobType_select"] = document.getElementById("jobtype_work").selectedIndex;
                                for_edit["Work_JobName"] = pos_work;
                                for_edit["Company"] = company_work;
                                for_edit["SalaryType"] = type_salary_work;
                                //for_edit["SalaryType_select"] = document.getElementById("salarytype_work").selectedIndex;
                                for_edit["Salary"] = parseInt(salary_work);
                                for_edit["Work_Start_Year"] = parseInt(year_startwork);
                                //for_edit["Work_Start_Year_select"] = document.getElementById("year_startwork").selectedIndex;
                                for_edit["Work_Start_Month"] = parseInt(month_startwork);
                                //for_edit["Work_Start_Month_select"] = document.getElementById("month_startwork").selectedIndex;
                                for_edit["Work_End_Year"] = parseInt(year_endwork);
                                //for_edit["Work_End_Year_select"] = document.getElementById("year_endwork").selectedIndex;
                                for_edit["Work_End_Month"] = parseInt(month_endwork);
                                //for_edit["Work_End_Month_select"] = document.getElementById("month_endwork").selectedIndex;
                                for_edit["reeggiist4_cb"] = reeggiist4_cb;
                                for_edit["Infomation"] = inform_work;
                                for_edit["backup_year_endwork"] = backup_year_endwork;
                                for_edit["backup_month_endwork"] = backup_month_endwork;
                                //for_edit["backup_salary"] = backup_salary;        
                                $("#registab4Modal").modal("hide"); //success!!!!!
                                $(".box-box-box-work1-edit").empty();
                                workedit.setState({ statusUpload4: "", imgStatus4: "" });
                                show_work();
                            }

                        }).catch((error) => {
                            //console.log(error);
                            workedit.setState({ statusUpload4: "Save Failed", imgStatus4: "assets/images/baseline_error_black_24dp.png" });
                            $("#for-error-dgd").addClass("status-saving5555-red");
                        });
                }
                else if (choose_function == 2) {
                    //console.log(`add!!!!!`);
                    //postAddWork(sendWork2back);
                    fetch("http://localhost:2000/register/addworkHistory", {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + token4,
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(sendWork2back)
                    })
                        .then((raws) => {
                            //console.log(raws);
                            if ("message" in raws) {
                                workedit.setState({ statusUpload4: "Save Failed", imgStatus4: "assets/images/baseline_error_black_24dp.png" });
                                $("#for-error-dgd").addClass("status-saving5555-red");
                            }
                            else {
                                list_of_work.push({
                                    WorkHistory_id: raws.id,
                                    Work_JobType: type_work,
                                    //Work_JobType_select: document.getElementById("jobtype_work").selectedIndex,
                                    Work_JobName: pos_work,
                                    Company: company_work,
                                    SalaryType: type_salary_work,
                                    //SalaryType_select: document.getElementById("salarytype_work").selectedIndex,
                                    Salary: parseInt(salary_work),
                                    Work_Start_Year: parseInt(year_startwork),
                                    //Work_Start_Year_select: document.getElementById("year_startwork").selectedIndex,
                                    Work_Start_Month: parseInt(month_startwork),
                                    //Work_Start_Month_select: document.getElementById("month_startwork").selectedIndex,
                                    Work_End_Year: parseInt(year_endwork),
                                    //Work_End_Year_select: document.getElementById("year_endwork").selectedIndex,
                                    Work_End_Month: parseInt(month_endwork),
                                    //Work_End_Month_select: document.getElementById("month_endwork").selectedIndex,
                                    reeggiist4_cb: reeggiist4_cb,
                                    Infomation: inform_work,
                                    backup_year_endwork: backup_year_endwork,
                                    backup_month_endwork: backup_month_endwork,
                                    isFetch: false
                                });
                                $("#registab4Modal").modal("hide"); //success!!!!!
                                $(".box-box-box-work1-edit").empty();
                                workedit.setState({ statusUpload4: "", imgStatus4: "" });
                                show_work();
                            }

                        }).catch((error) => {
                            //console.log(error);
                            workedit.setState({ statusUpload4: "Save Failed", imgStatus4: "assets/images/baseline_error_black_24dp.png" });
                            $("#for-error-dgd").addClass("status-saving5555-red");
                        });
                }
                //console.log(`list_of_work:`, list_of_work);
            }
        });

        /*function postAddWork(data) {
            fetch("http://localhost:2000/register/addworkHistory", {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + token4,
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then((raws) => {
                    console.log(raws);
                }).catch((error) => {
                    console.log(error);
                });
        }*/

        //hide modal
        $(document).on('click', "#hide-modal-work", function () {
            $("#registab4Modal").modal("hide");
        });

        //clear modal
        $(document).on('hide.bs.modal', "#registab4Modal", function () {
            document.getElementById("jobtype_work").selectedIndex = "0";
            document.getElementById("jobname_work").value = "";
            document.getElementById("company_work").value = "";
            document.getElementById("salarytype_work").selectedIndex = "0";
            document.getElementById("salary_work").value = "";
            document.getElementById("year_startwork").selectedIndex = "0";
            document.getElementById("month_startwork").selectedIndex = "0";
            document.getElementById("year_endwork").selectedIndex = "0";
            document.getElementById("month_endwork").selectedIndex = "0";
            $('#regist4_cb').prop('checked', false);
            /*$("#year_endwork").removeClass("dis_input4");
            $("#month_endwork").removeClass("dis_input4");*/
            $("#year_endwork").prop("disabled", false);
            $("#month_endwork").prop("disabled", false);
            $("#jobtype_work").removeClass("is-invalid");
            $("#jobname_work").removeClass("is-invalid");
            $("#year_startwork").removeClass("is-invalid");
            $("#month_startwork").removeClass("is-invalid");
            $("#salary_work").removeClass("is-invalid");
            /* $("#salary_work").prop("disabled", true);*/
            document.getElementById("inform_work").value = "";
            //backup_year_endwork = 0, backup_month_endwork = 0;
            //backup_salary = "";
            workedit.setState({ statusUpload4: "", imgStatus4: "" });
            $("#for-error-dgd").removeClass("status-saving5555-red");
        });
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
        //$(window).unbind('scroll');
        $(document).unbind();
    }

    handleLoad() {
        //console.log("YEAH!");
    }

    render() {
        return (
            <div className="Registab4">
                <div class="regis-box-content1">
                    <h1 id="text-add-name-my-work11">เพิ่มประวัติการทำงาน</h1>
                    <div class="registab4_formbox">
                        <div className="registab4_btnplus">
                            <button type="button" class="btn" id="add_work" >
                                <img src="assets/images/+.png" width="57" height="57" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img>
                            </button>
                        </div>
                    </div>

                    <div class="box-box-box-work1-edit">
                        <div class="content-work1111-edit"></div>
                    </div>

                    <div class="modal fade" id="registab4Modal" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-xl">
                            <div class="modal-content modalworkhis" >
                                <div class='modal-body layoutforwork111'>
                                    <h1 class='modal-titleT4only inline' id='regisModallabelt4_1'>เพิ่มประวัติการทำงาน</h1>
                                    <img class="status-img-saving-3r3r" src={this.state.imgStatus4} height="36"></img>
                                    <h5 class="inline status-saving5555" id="for-error-dgd">{this.state.statusUpload4}</h5>
                                    <div className='addWorkHistory'>
                                        <div className="Registab4_addWorkHistory">

                                            <div class='row'>
                                                <div class="col-2 chidright">
                                                    <label class=" form-f-sex">ประเภทงาน<a class="red_markEp1">*</a></label>
                                                </div>
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff" aria-labelledby="select1" id='jobtype_work' required>
                                                        <option selected disabled value="">เลือกประเภทงาน</option>
                                                        <option value='งานประจำ' >งานประจำ</option>
                                                        <option value='งานเสริมนอกเวลา' >งานเสริมนอกเวลา</option>
                                                        <option value='ฟรีแลนซ์' >ฟรีแลนซ์</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class='row'>
                                                <div class="col-2 chidright">
                                                    <label class=" form-f-sex">ตำแหน่งงาน<a class="red_markEp1">*</a></label>
                                                </div>
                                                <div class='col-4'>
                                                    <input maxlength="42" type="text" class="form-control dropbtn margin-bottom1 jobname_work1" id="jobname_work" required></input>
                                                </div>
                                            </div>

                                            <div class='row'>
                                                <div class="col-2 chidright">
                                                    <label class=" form-f-sex">สังกัด/บริษัท</label>
                                                </div>
                                                <div class='col-4'>
                                                    <input maxlength="56" type="text" class="form-control dropbtn margin-bottom1 company_work1" id="company_work"></input>
                                                </div>
                                            </div>

                                            <div class='row'>
                                                <div class="col-2 chidright">
                                                    <label class=" form-f-sex">ประเภทรายได้</label>
                                                </div>
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff salarytype_work1" id="salarytype_work" aria-labelledby="select1" required>
                                                        <option selected disabled value="">เลือกประเภทรายได้</option>
                                                        <option value='รายได้ต่อไตรมาส' >รายได้ต่อไตรมาส</option>
                                                        <option value='รายได้ต่อเดือน'>รายได้ต่อเดือน</option>
                                                        <option value='รายได้ต่อสัปดาห์'>รายได้ต่อสัปดาห์</option>
                                                        <option value='รายได้ต่อวัน'>รายได้ต่อวัน</option>
                                                        <option value='รายได้ต่องาน'>รายได้ต่องาน</option>
                                                        <option value='รายได้ไม่แน่นอน'>รายได้ไม่แน่นอน</option>
                                                        <option value='ไม่ระบุ'>ไม่ระบุ</option>
                                                    </select>
                                                </div>
                                                <div class='col-2 chidright position-salary1'>
                                                    <label class=" form-f-sex">รายได้ (จำนวนเต็ม)</label>
                                                </div>
                                                <div class='col-4'>
                                                    <input maxlength="20" type="text" class="form-control dropbtn margin-bottom1 salary_work1" id="salary_work" placeholder='บาท'></input>
                                                </div>
                                            </div>

                                            <div class='row'>
                                                <div class='col-2 chidright'>
                                                    <label class=" form-f-sex">ปีที่เข้าทำงาน<a class="red_markEp1">*</a></label>
                                                </div>
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff year_startwork1" id='year_startwork' aria-labelledby="select1" required>
                                                        <option selected disabled value="">ค.ศ.</option>
                                                    </select>
                                                </div>
                                                <div class='col-2 chidright position-month1'>
                                                    <label class=" form-f-sex">เดือนที่เข้าทำงาน<a class="red_markEp1">*</a></label>
                                                </div>
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff month_startwork1" id='month_startwork' aria-labelledby="select1" required>
                                                        <option selected disabled value="">เดือน</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class='row'>
                                                <div class='col-2 chidright'>
                                                    <label class=" form-f-sex">ปีที่ออกจากงาน</label>
                                                </div>
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff year_startwork1 my_year_endwork" id='year_endwork' aria-labelledby="select1" required>
                                                        <option selected disabled value="">ค.ศ.</option>
                                                    </select>
                                                </div>
                                                <div class='col-2 chidright position-month1'>
                                                    <label class=" form-f-sex">เดือนที่ออกจากงาน</label>
                                                </div>
                                                <div class='col-4'>
                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff salary_work1 my_month_endwork" id='month_endwork' aria-labelledby="select1" required>
                                                        <option selected disabled value="">เดือน</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                    <h5 id='registab4_textOr' class="modaltextB"> หรือ</h5>

                                                    <div class="form-check dropbtn margin-bottom1 fff bg-checkbox-status-job" id='registab4_radiocheck'>
                                                        <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="regist4_cb" for="flexCheckDefault"></input>
                                                        <label class="form-check-label modaltextB" for="registab4_Radios1">ยังอยู่ในงาน</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <textarea maxlength="280" type="text" rows='5' class="form-control dropbtn margin-bottom1 registab4_textbox" id="inform_work" placeholder='เพิ่มรายละเอียดเกี่ยวกับตำแหน่งงานที่ทำ'></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="centerverify button-add-work1">
                                    <button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" id="hide-modal-work">ยกเลิก</button>
                                    <button type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="submit-work"></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="Modal_remove_work" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content minisize">
                                <h4 class="del-b">คุณต้องการลบประวัติการทำงานนี้ ?</h4>
                                <div class="centerverify">
                                    <a id="can_del_work" type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m">ยกเลิก</a>
                                    <a id="sub_del_work" type="button" class="btn btn-cta-primary-yellowshort profile-button round" >ลบ</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Edittab4;
