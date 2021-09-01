/*------------------------ REGISTER TAB 7 ------------------------*/

/*---------------- TAB IN MODAL ---------------*/

$('.tabs_pop li').on('click', function () {
    var tabId = $(this).attr('data-tab1');
    $('.tabs_pop li').removeClass('current2');
    $('.tab-pane_pop').removeClass('current2');
    $(this).addClass('current2');
    $('#' + tabId).addClass('current2');
})


/*---------------- control slider range ----------------*/


var value1, value2, value3;
document.getElementById("customRange11").oninput = function () {
    value1 = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + value1 + '%, #c4c4c4 ' + value1 + '%, #c4c4c4 100%)';
    //console.log(`skill1: ${value1 / 10}`);
};

document.getElementById("customRange12").oninput = function () {
    value2 = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + value2 + '%, #c4c4c4 ' + value2 + '%, #c4c4c4 100%)';
    //console.log(`skill2: ` + value2 / 10);
};

document.getElementById("customRange13").oninput = function () {
    value3 = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + value3 + '%, #c4c4c4 ' + value3 + '%, #c4c4c4 100%)';
    //console.log(`skill3: ` + value3 / 10);
};


/*---------------- disable slider range ----------------*/

document.getElementById("customRange11").disabled = true;
document.getElementById("customRange12").disabled = true;
document.getElementById("customRange13").disabled = true;

document.getElementById("each_skill1").addEventListener("click", function () {
    var skill_job_1 = document.getElementById("each_skill1").value;
    //console.log(`click skill_job_1: `, skill_job_1);
    if (skill_job_1 != null || skill_job_1 == 'เลือกทักษะของคุณที่เหมาะกับงาน') document.getElementById("customRange11").disabled = false;
});

document.getElementById("each_skill2").addEventListener("click", function () {
    var skill_job_2 = document.getElementById("each_skill2").value;
    //console.log(`click skill_job_2: `, skill_job_2);
    if (skill_job_2 != null || skill_job_2 == 'เลือกทักษะของคุณที่เหมาะกับงาน') document.getElementById("customRange12").disabled = false;
});

document.getElementById("each_skill3").addEventListener("click", function () {
    var skill_job_3 = document.getElementById("each_skill3").value;
    //console.log(`click skill_job_3: `, skill_job_3);
    if (skill_job_3 != null || skill_job_3 == 'เลือกทักษะของคุณที่เหมาะกับงาน') document.getElementById("customRange13").disabled = false;
});


/*---------------- list item job interest ----------------*/
/*var no_job;

$(document).ready(function () {
    console.log("kuaytu!!!");
    console.log(sample1);
    sample1.forEach((ele, index) => {
        var grid_job = `<div class="frame_job" id="{no_list}">\
                        <div class="job-column-1" >\
                            <h1 id="job-position">ตำแหน่งงานที่ {no_job}</h1>\
                            <h1 id="job-name">{name_job}</h1>\
                            </div >\
                            <div class="my-skill-content">\
                                <h1 id="mySkil-job">ทักษะของฉัน</h1>\
                                <div class="each-skill-job">\
                                    <p id="skill1-job">{skill1}</p>\
                                    <p id="skill2-job">{skill2}</p>\
                                    <p id="skill3-job">{skill3}</p>\
                                </div>\
                            </div>\
                            <div class="layer_icon">\
                                <button class="btn" id="edit-job"><img src="assets/images/blackedit.png" width="65" height="65"></img></button>\
                                <button class="btn" data-bs-target="#exampleModal_remove_job" id="del-job"><img src="assets/images/bin.png" width="90" height="90"></img></button>\
                            </div>\
                        </div>\
                    </div>`;
        console.log("ele: ", ele);
        console.log("index: ", index + 1);
        console.log("name job:", ele["Job_JobName"][0]);
        grid_job = grid_job.replace("{no_list}", index + 1);
        grid_job = grid_job.replace("{no_job}", index + 1);
        grid_job = grid_job.replace("{name_job}", ele["Job_JobName"][0]);
        listOfskill = ele["Job_SkillName"];
        for (var i = 0; i < length.listOfskill; i++) {
            console
            console.log("index2: ", i + 1);
            grid_job = grid_job.replace(`{skill` + $(i + 1) + `}`, listOfskill[i]);
            console.log(`{skill` + $(i + 1) + `}`);
        };
        console.log(ele["Job_SkillName"]);
        $(".list-of-job").append(grid_job);
    });
});*/

var list_of_job = []; //list of job

function get_job_id(list_of_job, x) {
    //var x = 1;
    list_of_job.forEach(ele => {
        ele["job_pos"] = x;
        console.log("x:", x);
        x++;
    });
    return list_of_job;
}

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

//add edit delete job list

var choose_function = -1; //default
var id_list_job;






function show_all_job() {

    list_of_job.forEach(ele => {
        var grid_Job1 = `<div class="frame_job" >\
                            <div class="job-column-1" >\
                                <h1 id="job-position">ตำแหน่งงานที่ {no_job}</h1>\
                                <h1 id="job-name">{name_job}</h1>\
                                </div >\
                                <div class="head-skill">\
                                    <h1 id="mySkil-job">ทักษะของฉัน</h1>\
                                </div>\
                                <div class="my-skill-content">\
                                    <div class="each-skill-job">`;

        var grid_Job_skill1 = `		        <p id="skill1-job">{skill1}</p>`;

        var grid_Job_skill2 = `		       	<p id="skill2-job">{skill2}</p>`;

        var grid_Job_skill3 = `		        <p id="skill3-job">{skill3}</p>`;

        var grid_Job2 = `				</div>\
                                </div>\
                                <div class="layer_icon" id="{no_list}">\
								    <button type="button" class="btn" id="edit-job"><img src="assets/images/blackedit.png" width="65" height="65"></img></button>\
								    <button type="button" class="btn" id="del-job"><img src="assets/images/bin.png" width="90" height="90"></img></button>\
                                </div>\
                            </div>\
                        </div>`;
        grid_Job2 = grid_Job2.replace("{no_list}", ele["id"]);
        grid_Job1 = grid_Job1.replace("{no_job}", ele["job_pos"]);
        grid_Job1 = grid_Job1.replace("{name_job}", ele["name_job"]);
        if (ele["skill1"] == "" && ele["skill2"] == "" && ele["skill3"] == "") {
            grid_Job1 = grid_Job1.replace(`<h1 id="mySkil-job">ทักษะของฉัน</h1>`, "");
        }
        if (ele["skill1"] != "") {
            grid_Job_skill1 = grid_Job_skill1.replace("{skill1}", ele["skill1"]);
        }
        else {
            grid_Job_skill1 = "";
        }

        if (ele["skill2"] != "") {
            grid_Job_skill2 = grid_Job_skill2.replace("{skill2}", ele["skill2"]);
        }
        else {
            grid_Job_skill2 = "";
        }

        if (ele["skill3"] != "") {
            grid_Job_skill3 = grid_Job_skill3.replace("{skill3}", ele["skill3"]);
        }
        else {
            grid_Job_skill3 = "";
        }
        $(".list-of-job").append(grid_Job1 + grid_Job_skill1 + grid_Job_skill2 + grid_Job_skill3 + grid_Job2);
    });
}


/*$('#exampleModalJob').on('shown.bs.modal', function (e) {
    const buttonId = e.relatedTarget.id;
    id_list_job = $(this).closest('.layer_icon').attr('id');
    console.log(`edit:`, id_list_job);
    if (buttonId == "edit-job") {
        $('#submit-job11').text('ยืนยัน');
        choose_function = 1;
        console.log(`chosoe: ${choose_function}`);
        var for_edit = list_of_job.find(x => { return x.id === id_list_job });
        console.log(`for_edit:`, for_edit);
        $('#nm_job').prop('selectedIndex', for_edit["name_job"]);
        $("#each_skill1").prop('selectedIndex', for_edit["skill1"]);
        $("#customRange11").val(for_edit["score_skill1"]);
        $("#each_skill2").prop('selectedIndex', for_edit["skill2"]);
        $("#customRange12").val(for_edit["score_skill2"]);
        $("#each_skill3").prop('selectedIndex', for_edit["skill3"]);
        $("#customRange13").val(for_edit["score_skill3"]);
        $("#obj-job-01").val(for_edit["obj1"]);
        $("#obj-job-02").val(for_edit["obj2"]);
        $("#obj-job-03").val(for_edit["obj3"]);
    }
    else if (buttonId == "add-job") {
        choose_function = 2;
        console.log(`chosoe: ${choose_function}`);
        $('#submit-job11').text('เพิ่ม');
    }
});*/



/*$('#exampleModal_remove_job').on('shown.bs.modal', function (e) {
    var buttonId = e.relatedTarget.id;
    if (buttonId == "del-job") {
        id_list_job = $("#" + buttonId).closest(".layer_icon").attr("id");
        console.log("id_list_job111:", id_list_job);
    }
});*/

$(document).on("click", "#add-job", function () {
    id_list_job = $('.frame_job').attr('id');
    console.log("id_list_job111:", id_list_job);
    choose_function = 2;
    $('#exampleModalJob').modal('toggle');
    $('#submit-job11').text('เพิ่ม');

});

$(document).on("click", "#edit-job", function () {
    id_list_job = $(this).closest().attr('id');
    console.log(`edit:`, id_list_job);
    choose_function = 1;
    $('#exampleModalJob').modal('toggle');
    $('#submit-job11').text('ยืนยัน');
});

$(document).on("click", "#del-job", function () {
    id_list_job = $(this).parents().attr('id');
    console.log("id_list_job111:", id_list_job);
    $('#exampleModal_remove_job').modal('toggle');
});

$("#summit-to-delete").on('click', 'button', function () {
    var removeIndex = list_of_job.findIndex(function (post, index_del) {
        if (post.id == id_list_job)
            return true;
    });
    console.log("id_list_job:", id_list_job);
    list_of_job.splice(removeIndex, 1);
    console.log(`delete job id:`, removeIndex);
    //$(`#` + removeIndex).remove();
    $(".list-of-job").empty();
    console.log(list_of_job);
    get_job_id(list_of_job, 1);
    show_all_job()
});

$("#hide-modal-tab6").on('click', 'button', function () {
    $('#nm_job').prop('selectedIndex', 0);

    $("#each_skill1").prop('selectedIndex', 0);
    $("#customRange11").val("5");

    $("#each_skill2").prop('selectedIndex', 0);
    $("#customRange12").val("5");

    $("#each_skill3").prop('selectedIndex', 0);
    $("#customRange13").val("5");

    $("#obj-job-01").val("");
    $("#obj-job-02").val("");
    $("#obj-job-03").val("");
});



document.getElementById("submit-job11").addEventListener("click", function () {
    if (choose_function == 1) { //edit job after add
        console.log("edit!!!!!!");
        name_job = document.getElementById("nm_job").value;
        skill_job_1 = document.getElementById("each_skill1").value;
        score_skill_job_1 = document.getElementById("customRange11").value;
        skill_job_2 = document.getElementById("each_skill2").value;
        score_skill_job_2 = document.getElementById("customRange12").value;
        skill_job_3 = document.getElementById("each_skill3").value;
        score_skill_job_3 = document.getElementById("customRange13").value;
        obj_job_1 = document.getElementById("obj-job-01").value;
        obj_job_2 = document.getElementById("obj-job-02").value;
        obj_job_3 = document.getElementById("obj-job-03").value;
    }
    else if (choose_function == 2) { //add job in list
        name_job = document.getElementById("nm_job").value;
        skill_job_1 = document.getElementById("each_skill1").value;
        score_skill_job_1 = document.getElementById("customRange11").value;
        skill_job_2 = document.getElementById("each_skill2").value;
        score_skill_job_2 = document.getElementById("customRange12").value;
        skill_job_3 = document.getElementById("each_skill3").value;
        score_skill_job_3 = document.getElementById("customRange13").value;
        obj_job_1 = document.getElementById("obj-job-01").value;
        obj_job_2 = document.getElementById("obj-job-02").value;
        obj_job_3 = document.getElementById("obj-job-03").value;
        if (skill_job_1 == "") {
            score_skill_job_1 = "";
        }

        if (skill_job_2 == "") {
            score_skill_job_2 = "";
        }

        if (skill_job_3 == "") {
            score_skill_job_3 = "";
        }

        list_of_job.push({
            id: create_UUID(),
            job_pos: 0,
            name_job: name_job,
            skill1: skill_job_1,
            score_skill1: score_skill_job_1,
            skill2: skill_job_2,
            score_skill2: score_skill_job_2,
            skill3: skill_job_3,
            score_skill3: score_skill_job_3,
            obj1: obj_job_1,
            obj2: obj_job_2,
            obj3: obj_job_3
        });
        get_job_id(list_of_job, 1);
        console.log(list_of_job);
    }

    $('#nm_job').prop('selectedIndex', 0);

    $("#each_skill1").prop('selectedIndex', 0);
    $("#customRange11").val("5");

    $("#each_skill2").prop('selectedIndex', 0);
    $("#customRange12").val("5");

    $("#each_skill3").prop('selectedIndex', 0);
    $("#customRange13").val("5");

    $("#obj-job-01").val("");
    $("#obj-job-02").val("");
    $("#obj-job-03").val("");

    $(".list-of-job").empty();
    show_all_job()
});

/*--- textarea obj ----*/

$("#pos-del-obj-button1").hide();
$("#pos-del-obj-button2").hide();
$("#pos-del-obj-button3").hide();
$("#obj-job-01").change(function () {
    if ($("#obj-job-01").val().length != 0) {
        $("#pos-del-obj-button1").show();
    }
    else {
        $("#pos-del-obj-button1").hide();
    }
});
$("#obj-job-02").change(function () {
    if ($("#obj-job-02").val().length != 0) {
        $("#pos-del-obj-button2").show();
    }
    else {
        $("#pos-del-obj-button2").hide();
    }
});
$("#obj-job-03").change(function () {
    if ($("#obj-job-03").val().length != 0) {
        $("#pos-del-obj-button3").show();
    }
    else {
        $("#pos-del-obj-button3").hide();
    }
});
$("#pos-del-obj-button1").click(function () {
    $("#obj-job-01").val('');
    $("#pos-del-obj-button1").hide();
});
$("#pos-del-obj-button2").click(function () {
    $("#obj-job-02").val('');
    $("#pos-del-obj-button2").hide();
});
$("#pos-del-obj-button3").click(function () {
    $("#obj-job-03").val('');
    $("#pos-del-obj-button3").hide();
});

