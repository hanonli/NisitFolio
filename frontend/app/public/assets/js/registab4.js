/*---- generate code ID ----*/
function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

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

var backup_year_endwork = 0, backup_month_endwork = 0, backup_salary = "";
var list_of_work = []; //list of work
var list_of_year_work = {}; //check year
var year_before_work;
var choose_function = -1; //default stutus before add(2) or edit(1)
var for_edit;

function show_work() {
    year_before_work = -1;
    list_of_year_work = {};
    list_of_work.sort(compareValues('year_startwork', 'desc'));
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
                              <div class="content-work1111" id="{contentYear}"></div>`;
        grid_work1 = grid_work1.replace("{no_work}", ele["id"]);
        grid_work1 = grid_work1.replace("{pos_work}", ele["pos_work"]);
        if (ele["company_work"] != "") {
            grid_work1 = grid_work1.replace("{company_work}", ele["company_work"]);
        }
        else {
            grid_work1 = grid_work1.replace("{company_work}", "-");
        }
        if (ele["month_startwork"] < 10) {
            grid_work1 = grid_work1.replace("{month_startwork}", `0` + ele["month_startwork"]);
        }
        else {
            grid_work1 = grid_work1.replace("{month_startwork}", ele["month_startwork"]);
        }
        grid_work1 = grid_work1.replace("{year_startwork}", ele["year_startwork"]);
        if (ele["regist4_cb"] == true) {
            grid_work2 = grid_work2.replace("สิ้นสุด {month_endwork}/{year_endwork}", `ยังอยู่ในงาน`);
        }
        else {
            if (Number.isNaN(ele["month_endwork"]) == true && Number.isNaN(ele["year_endwork"]) == true) {
                grid_work2 = "";
            }
            else if (Number.isNaN(ele["month_endwork"]) == true && Number.isNaN(ele["year_endwork"]) == false) {
                grid_work2 = grid_work2.replace("{month_endwork}", `-`);
                grid_work2 = grid_work2.replace("{year_endwork}", ele["year_endwork"]);
            }
            else if (Number.isNaN(ele["year_endwork"]) == true && Number.isNaN(ele["month_endwork"]) == false) {
                grid_work2 = grid_work2.replace("{year_endwork}", `-`);
                if (ele["month_endwork"] < 10) {
                    grid_work2 = grid_work2.replace("{month_endwork}", `0` + ele["month_endwork"]);
                }
                else {
                    grid_work2 = grid_work2.replace("{month_endwork}", ele["month_endwork"]);
                }
            }
            else {
                if (ele["month_endwork"] < 10) {
                    grid_work2 = grid_work2.replace("{month_endwork}", `0` + ele["month_endwork"]);
                }
                else {
                    grid_work2 = grid_work2.replace("{month_endwork}", ele["month_endwork"]);
                }
                grid_work2 = grid_work2.replace("{year_endwork}", ele["year_endwork"]);
            }
        }
        grid_work3 = grid_work3.replace("{type_salary}", ele["type_salary_work"]);
        if (ele["type_salary_work"] != "ไม่ระบุ" && ele["type_salary_work_select"] != 0) {
            if (Number.isNaN(ele["salary_work"]) == false) {
                grid_work3 = grid_work3.replace("{salary_work}", ele["salary_work"]);
            }
            else {
                grid_work3 = grid_work3.replace("{salary_work}", "-");
            }
        }
        else {
            grid_work3 = grid_work3.replace("{salary_work} บาท", "");
        }
        grid_work3 = grid_work3.replace("{inform_work}", ele["inform_work"]);
        if (year_before_work != ele["year_startwork"]) {
            //console.log(`change year!!!!`);
            list_of_year_work[ele["year_startwork"]] = 1;
            year_before_work = ele["year_startwork"];
            headOfyear1234 = headOfyear1234.replace("{show-year}", `yearOf_` + String(ele["year_startwork"]));
            headOfyear1234 = headOfyear1234.replace("{head-year}", String(ele["year_startwork"]));
            headOfyear1234 = headOfyear1234.replace("{contentYear}", `contentYear-work_` + String(ele["year_startwork"]));
            $(".box-box-box-work1").append(headOfyear1234);
        }
        else {
            list_of_year_work[ele["year_startwork"]] += 1;
        }
        $("#contentYear-work_" + String(ele["year_startwork"])).append(grid_work1 + grid_work2 + grid_work3);
    });
}

//open modal to add work
$(document).on("click", ".registab4_formbox", function () {
    choose_function = 2;
    $('#registab4Modal').modal('toggle');
    $("#salary_work").prop("disabled", true);
    document.querySelector('#submit-work').innerText = 'เพิ่ม';
});

var id_list_work_edit;

//open modal to edit work
$(document).on("click", "#edit-work", function () {
    choose_function = 1;
    id_list_work_edit = $(this).parents().parents().parents().attr('id');
    console.log("id_list_work111:", id_list_work_edit);
    $('#registab4Modal').modal('toggle');
    document.querySelector('#submit-work').innerText = 'ตกลง';
    for_edit = list_of_work.find(function (post, index_del) {
        if (post.id == id_list_work_edit)
            return true;
    });
    //document.getElementById("jobtype_work").value = for_edit.type_work;
    document.getElementById("jobtype_work").selectedIndex = for_edit.type_work_select;
    document.getElementById("jobname_work").value = for_edit.pos_work;
    document.getElementById("company_work").value = for_edit.company_work;
    //document.getElementById("salarytype_work").value = for_edit.type_salary_work;
    document.getElementById("salarytype_work").selectedIndex = for_edit.type_salary_work_select;
    if (Number.isNaN(for_edit.salary_work) == false) {
        document.getElementById("salary_work").value = for_edit.salary_work;
    }
    else {
        document.getElementById("salary_work").value = '';
    }
    if (for_edit.type_salary_work == "ไม่ระบุ" || for_edit.type_salary_work_select == 0) {
        $("#salary_work").prop("disabled", true);
        document.getElementById("salary_work").value = "";
    }
    else {
        $("#salary_work").prop("disabled", false);
    }
    //document.getElementById("year_startwork").value = for_edit.year_startwork;
    document.getElementById("year_startwork").selectedIndex = for_edit.year_startwork_select;
    //document.getElementById("month_startwork").value = for_edit.month_startwork;
    document.getElementById("month_startwork").selectedIndex = for_edit.month_startwork_select;
    //document.getElementById("year_endwork").value = for_edit.year_endwork;
    document.getElementById("year_endwork").selectedIndex = for_edit.year_endwork_select;
    //document.getElementById("month_endwork").value = for_edit.month_endwork;
    document.getElementById("month_endwork").selectedIndex = for_edit.month_endwork_select;
    backup_year_endwork = for_edit["backup_year_endwork"];
    backup_month_endwork = for_edit["backup_month_endwork"];
    //backup_salary = for_edit["backup_salary"];
    $('#regist4_cb').prop('checked', for_edit.regist4_cb);
    if (for_edit.regist4_cb == true) {
        $("#year_endwork").prop("disabled", true);
        $("#month_endwork").prop("disabled", true);
    }
    document.getElementById("inform_work").value = for_edit.inform_work;
});

//open modal to delete certi (uncomplete!!!!!!!!!!!!!!!!!!!)
var id_list_work_del;
$(document).on("click", "#del-work", function () {
    id_list_work_del = $(this).parents().parents().parents().attr('id');
    $('#Modal_remove_work').modal('toggle');
});

$(document).on("click", "#sub_del_work", function () {
    var removeIndex = list_of_work.findIndex(function (post, index_del) {
        if (post.id == id_list_work_del)
            return true;
    });
    list_of_year_work[list_of_work[removeIndex]["year_startwork"]] -= 1;
    if (list_of_year_work[list_of_work[removeIndex]["year_startwork"]] == 0) {
        $(`#yearOf_` + String(list_of_work[removeIndex]["year_startwork"])).remove();
    }
    list_of_work.splice(removeIndex, 1);
    $(`#` + id_list_work_del).remove();
    $('#Modal_remove_work').modal('hide');
});

$(document).on("click", "#can_del_work", function () {
    $('#Modal_remove_work').modal('hide');
});

//change status 
$(document).on('change', "#regist4_cb", function () {
    if ($('#regist4_cb').prop('checked') == true) {
        /*$("#year_endwork").addClass("dis_input444");
        $("#month_endwork").addClass("dis_input444");*/
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
        //backup_salary = document.getElementById("salary_work").value;
        $("#salary_work").prop("disabled", true);
        document.getElementById("salary_work").value = "";
    }
    else {
        $("#salary_work").prop("disabled", false);
        //document.getElementById("salary_work").value = backup_salary;
    }
});

//submit data to list 
$(document).on('click', "#submit-work", function () {
    var type_work = document.getElementById("jobtype_work").value;
    //var type_work_select = document.getElementById("jobtype_work").selectedIndex;
    var pos_work = document.getElementById("jobname_work").value;
    var company_work = document.getElementById("company_work").value;
    var type_salary_work = document.getElementById("salarytype_work").value;
    // var type_salary_work_select = document.getElementById("salarytype_work").selectedIndex;
    var salary_work = document.getElementById("salary_work").value;
    var year_startwork = document.getElementById("year_startwork").value;
    //var year_startwork_select = document.getElementById("year_startwork").selectedIndex;
    var month_startwork = document.getElementById("month_startwork").value;
    //var month_startwork_select = document.getElementById("month_startwork").selectedIndex;
    var year_endwork = document.getElementById("year_endwork").value;
    //var year_endwork_select = document.getElementById("year_endwork").selectedIndex;
    var month_endwork = document.getElementById("month_endwork").value;
    //var month_endwork_select = document.getElementById("month_endwork").selectedIndex;
    var regist4_cb = $('#regist4_cb').prop('checked');
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
        if (choose_function == 1) {
            for_edit["type_workt"] = type_work;
            for_edit["type_work_select"] = document.getElementById("jobtype_work").selectedIndex;
            for_edit["pos_work"] = pos_work;
            for_edit["company_work"] = company_work;
            for_edit["type_salary_work"] = type_salary_work;
            for_edit["type_salary_work_select"] = document.getElementById("salarytype_work").selectedIndex;
            for_edit["salary_work"] = parseInt(salary_work);
            for_edit["year_startwork"] = parseInt(year_startwork);
            for_edit["year_startwork_select"] = document.getElementById("year_startwork").selectedIndex;
            for_edit["month_startwork"] = parseInt(month_startwork);
            for_edit["month_startwork_select"] = document.getElementById("month_startwork").selectedIndex;
            for_edit["year_endwork"] = parseInt(year_endwork);
            for_edit["year_endwork_select"] = document.getElementById("year_endwork").selectedIndex;
            for_edit["month_endwork"] = parseInt(month_endwork);
            for_edit["month_endwork_select"] = document.getElementById("month_endwork").selectedIndex;
            for_edit["regist4_cb"] = regist4_cb;
            for_edit["inform_work"] = inform_work;
            for_edit["backup_year_endwork"] = backup_year_endwork;
            for_edit["backup_month_endwork"] = backup_month_endwork;
            //for_edit["backup_salary"] = backup_salary;
        }
        else if (choose_function == 2) {
            //console.log(`add!!!!!`);
            list_of_work.push({
                id: create_UUID(),
                type_work: type_work,
                type_work_select: document.getElementById("jobtype_work").selectedIndex,
                pos_work: pos_work,
                company_work: company_work,
                type_salary_work: type_salary_work,
                type_salary_work_select: document.getElementById("salarytype_work").selectedIndex,
                salary_work: parseInt(salary_work),
                year_startwork: parseInt(year_startwork),
                year_startwork_select: document.getElementById("year_startwork").selectedIndex,
                month_startwork: parseInt(month_startwork),
                month_startwork_select: document.getElementById("month_startwork").selectedIndex,
                year_endwork: parseInt(year_endwork),
                year_endwork_select: document.getElementById("year_endwork").selectedIndex,
                month_endwork: parseInt(month_endwork),
                month_endwork_select: document.getElementById("month_endwork").selectedIndex,
                regist4_cb: regist4_cb,
                inform_work: inform_work,
                backup_year_endwork: backup_year_endwork,
                backup_month_endwork: backup_month_endwork,
            });
        }
        console.log(`list_of_work:`, list_of_work);
        $("#registab4Modal").modal("hide"); //success!!!!!
        $(".box-box-box-work1").empty();
        show_work();
    }
});

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
    $("#salary_work").prop("disabled", true);
    document.getElementById("inform_work").value = "";
    backup_year_endwork = 0, backup_month_endwork = 0;
    //backup_salary = "";
});

/*
            list_of_work = [{
                id: create_UUID(),
                type_work: type_work, //use Work_JobType
                type_work_select: type_work_select,
                pos_work: pos_work, //use Work_JobName
                company_work: company_work, //use Company
                type_salary_work: type_salary_work, //use SalaryType
                type_salary_work_select: type_salary_work_select,
                salary_work: salary_work, //use Salary
                year_startwork: year_startwork, //use Work_Start_Year
                year_startwork_select: year_startwork_select,
                month_startwork: month_startwork, //use Work_Start_Month
                month_startwork_select: month_startwork_select,
                year_endwork: year_endwork, //use Work_End_Year
                year_endwork_select: year_endwork_select,
                month_endwork: month_endwork, //use Work_End_Month
                month_endwork_select: month_endwork_select,
                regist4_cb: regist4_cb, 
                inform_work: inform_work //use Information
            }];

*/