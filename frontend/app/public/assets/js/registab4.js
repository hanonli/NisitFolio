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

var list_of_work = []; //list of work
var list_of_year_work = {}; //check year
var year_before_work;
var choose_function = -1; //default stutus before add(2) or edit(1)
var for_edit;

function show_work() {
    year_before_work = -1;
    list_of_year_work = {};
    let grid_work = `<div class="t4-content">\
                        <h5 class="font-titlet4">{pos_work}</h5>\
                        <div class="row">\
                            <div class="col-3 font-titlet3">\
                                <div class="font-titlet3">{company_work}</div>\
                                <div class="font-titlet3">เริ่มต้น {month_startwork}/{year_startwork}</div>\
                                <div class="font-titlet3">สิ้นสุด {month_endwork}/{year_endwork}</div>\
                            </div>\
                            <div class="col-9 font-titlet3">{inform_work}</div>\
                        </div>\
                        <div class="row">\
                            <div class="col-3 font-titlet3">เงินเดือน</div>\
                            <div class="col-9 font-titlet3">{salary_work} บาท</div>\
                        </div>\
                        <div class="layer_icon2">\
                            <div class="set-layer_icon2">\
                                <button type="button" class="btn" id="edit-work"><img src="assets/images/blackedit.png" width="35" height="35"></img></button>\
                                <button type="button" class="btn" id="del-work"><img src="assets/images/bin.png" width="50" height="50"></img></button>\                               
                            </div>\
                        </div>\
                    </div>`;
}

//open modal to add work
$(document).on("click", ".registab4_formbox", function () {
    choose_function = 2;
    $('#registab4Modal').modal('toggle');
    document.querySelector('#submit-work').innerText = 'เพิ่ม';
});

//open modal to edit work
$(document).on("click", "#edit-work", function () {
    choose_function = 1;
    $('#registab4Modal').modal('toggle');
    document.querySelector('#submit-work').innerText = 'ตกลง';
});

//change status 
$(document).on('change', "#regist4_cb", function () {
    if($('#regist4_cb').prop('checked')==true){
        $("#year_endwork").addClass("dis_input4");
        $("#month_endwork").addClass("dis_input4");
        document.getElementById("year_endwork").selectedIndex = "0";
        document.getElementById("month_endwork").selectedIndex = "0";
    }
    else{
        $("#year_endwork").removeClass("dis_input4");
        $("#month_endwork").removeClass("dis_input4");
    }
});

$(document).on('change', "#jobtype_work", function () {
    if(document.getElementById("jobtype_work").selectedIndex != 0){
        $("#jobtype_work").removeClass("error_select_work");
    }
});

$(document).on('change', "#jobname_work", function () {
    if(document.getElementById("jobname_work").selectedIndex != 0){
        $("#jobname_work").removeClass("error_select_work");
    }
});

$(document).on('change', "#year_startwork", function () {
    if(document.getElementById("year_startwork").selectedIndex != 0){
        $("#year_startwork").removeClass("error_select_work");
    }
});

$(document).on('change', "#month_startwork", function () {
    if(document.getElementById("month_startwork").selectedIndex != 0){
        $("#month_startwork").removeClass("error_select_work");
    }
});

//submit data to list 
$(document).on('click', "#submit-work", function () {
    var type_work = document.getElementById("jobtype_work").value;
    var type_work_select = document.getElementById("jobtype_work").selectedIndex;
    var pos_work = document.getElementById("jobname_work").value;
    var company_work = document.getElementById("company_work").value;
    var type_salary_work = document.getElementById("salarytype_work").value;
    var type_salary_work_select = document.getElementById("salarytype_work").selectedIndex;
    var salary_work = document.getElementById("salary_work").value;
    var year_startwork = document.getElementById("year_startwork").value;
    var year_startwork_select = document.getElementById("year_startwork").selectedIndex;
    var month_startwork = document.getElementById("month_startwork").value;
    var month_startwork_select = document.getElementById("month_startwork").selectedIndex;
    var year_endwork = document.getElementById("year_endwork").value;
    var year_endwork_select = document.getElementById("year_endwork").selectedIndex;
    var month_endwork = document.getElementById("month_endwork").value;
    var month_endwork_select = document.getElementById("month_endwork").selectedIndex;
    var regist4_cb = $('#regist4_cb').prop('checked');
    var inform_work = document.getElementById("inform_work").value;
    console.log(`type_work:`,type_work);
    console.log(`type_work_select:`,type_work_select);
    console.log(`pos_work:`,pos_work);
    console.log(`company_work:`,company_work);
    console.log(`type_salary_work:`,type_salary_work);
    console.log(`type_salary_work_select:`,type_salary_work_select);
    console.log(`salary_work:`,salary_work);
    console.log(`year_startwork:`,year_startwork);
    console.log(`year_startwork_select:`,year_startwork_select);
    console.log(`month_startwork:`,month_startwork);
    console.log(`month_startwork_select:`,month_startwork_select);
    console.log(`year_endwork:`,year_endwork);
    console.log(`year_endwork_select:`,year_endwork_select);
    console.log(`month_endwork:`,month_endwork);
    console.log(`month_endwork_select:`,month_endwork_select);
    console.log(`regist4_cb:`,regist4_cb);
    console.log(`inform_work:`,inform_work);
    if(document.getElementById("jobtype_work").selectedIndex == 0){
        $("#jobtype_work").addClass("error_select_work");
    }
    else if(document.getElementById("jobname_work").value == ""){
        $("#jobname_work").addClass("error_select_work");
    }
    else if(document.getElementById("year_startwork").value == "0"){
        $("#year_startwork").addClass("error_select_work");
    }
    else if(document.getElementById("month_startwork").value == "0"){
        $("#month_startwork").addClass("error_select_work");
    }
    else{
        if (choose_function == 1) {
        
        }
        else if (choose_function == 2) {
            console.log(`add!!!!!`);
            list_of_work.push({
                id: create_UUID(),
                type_work_select: type_work_select,
                pos_work: pos_work,
                company_work: company_work,
                type_salary_work: type_salary_work,
                type_salary_work_select: type_salary_work_select,
                salary_work: salary_work,
                year_startwork: year_startwork,
                year_startwork_select: year_startwork_select,
                month_startwork: month_startwork,
                month_startwork_select: month_startwork_select,
                year_endwork: year_endwork,
                year_endwork_select: year_endwork_select,
                month_endwork: month_endwork,
                month_endwork_select: month_endwork_select,
                regist4_cb: regist4_cb,
                inform_work: inform_work
            });
        }
        console.log(`list_of_work:`,list_of_work);
        $("#registab4Modal").modal("hide"); //success!!!!!
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
    $('#regist4_cb').prop('checked',false);
    document.getElementById("inform_work").value = "";
});