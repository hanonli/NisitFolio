/*------------------------ REGISTER TAB 6 ------------------------*/

/*---------------- TAB IN MODAL ---------------*/

$(document).on('click', '.tabs_pop li', function () {
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

//document.getElementById("customRange11").disabled = true;
//document.getElementById("customRange12").disabled = true;
//document.getElementById("customRange13").disabled = true;

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

$(document).on("click", "#add-job", function () {
    $("#nm_job").removeClass("error_select_job");
    choose_function = 2;
    $('#exampleModalJob').modal('toggle');
    document.getElementById("customRange11").disabled = true;
    document.getElementById("customRange12").disabled = true;
    document.getElementById("customRange13").disabled = true;
    $('#submit-job11').text('เพิ่ม');
    $("#customRange11").val(5);
    document.getElementsByClassName("x1").style.background = "linear-gradient(to right,#f0a143 0%,#f0a143 50%, #c4c4c4 50%, #c4c4c4 100%)";
    $("#customRange12").val(5);
    document.getElementsByClassName("x2").style.background = "linear-gradient(to right,#0fe17c 0%,#0fe17c 50%, #c4c4c4 50%, #c4c4c4 100%)";
    $("#customRange13").val(5);
    document.getElementsByClassName("x3").style.background = "linear-gradient(to right,#c98a11 0%,#f0a143 50%, #c98a11 50%, #c4c4c4 100%)";
    $("#obj-job-01").val('');
    $("#pos-del-obj-button1").hide();
    $("#obj-job-02").val('');
    $("#pos-del-obj-button2").hide();
    $("#obj-job-03").val('');
    $("#pos-del-obj-button3").hide();
});
var for_edit;
$(document).on("click", "#edit-job", function () {
    $("#nm_job").removeClass("error_select_job");
    id_list_job_edit = $(this).parents().attr('id');
    console.log(`edit:`, id_list_job_edit);
    choose_function = 1;
    $('#exampleModalJob').modal('toggle');
    $('#submit-job11').text('ยืนยัน');
    console.log(`chosoe: ${choose_function}`);
    for_edit = list_of_job.find(function (post, index_del) {
        if (post.id == id_list_job_edit)
            return true;
    });
    if (for_edit["skill1"] == "") {
        document.getElementById("customRange11").disabled = true;
        //document.getElementsByClassName("x1").style.background = "linear-gradient(to right,#f0a143 0%,#f0a143 50%, #c4c4c4 50%, #c4c4c4 100%)";
    }
    else {
        document.getElementById("each_skill1").selectedIndex = for_edit["skill1_select"];
        $("#customRange11").val(for_edit["score_skill1"]);
    }
    if (for_edit["skill2"] == "") {
        document.getElementById("customRange12").disabled = true;
        //document.getElementsByClassName("x2").style.background = "linear-gradient(to right,#0fe17c 0%,#0fe17c 50%, #c4c4c4 50%, #c4c4c4 100%)";
    }
    else {
        document.getElementById("each_skill2").selectedIndex = for_edit["skill2_select"];
        $("#customRange12").val(for_edit["score_skill2"]);
    }
    if (for_edit["skill3"] == "") {
        document.getElementById("customRange13").disabled = true;
        // document.getElementsByClassName("x3").style.background = "linear-gradient(to right,#c98a11 0%,#f0a143 50%, #c98a11 50%, #c4c4c4 100%)";
    }
    else {
        document.getElementById("each_skill3").selectedIndex = for_edit["skill3_select"];
        $("#customRange13").val(for_edit["score_skill3"]);
    }
    console.log(`for_edit:`, for_edit);
    document.getElementById("nm_job").selectedIndex = for_edit["name_job_select"];
    $("#obj-job-01").val(for_edit["obj1"]);
    $("#obj-job-02").val(for_edit["obj2"]);
    $("#obj-job-03").val(for_edit["obj3"]);
    if (for_edit["obj1"] == "") {
        $("#pos-del-obj-button1").hide();
    }
    else {
        $("#pos-del-obj-button1").show();
    }
    if (for_edit["obj2"] == "") {
        $("#pos-del-obj-button2").hide();
    }
    else {
        $("#pos-del-obj-button2").show();
    }
    if (for_edit["obj3"] == "") {
        $("#pos-del-obj-button3").hide();
    }
    else {
        $("#pos-del-obj-button3").show();
    }
});

$(document).on("click", "#del-job", function () {
    id_list_job_del = $(this).parents().attr('id');
    console.log("id_list_job111:", id_list_job_del);
    $('#exampleModal_remove_job').modal('toggle');
});

$(document).on('click', "#summit-to-delete", function () {
    var removeIndex = list_of_job.findIndex(function (post, index_del) {
        if (post.id == id_list_job_del)
            return true;
    });
    console.log("id_list_job:", id_list_job_del);
    list_of_job.splice(removeIndex, 1);
    console.log(`delete job id:`, removeIndex);
    //$(`#` + removeIndex).remove();
    $('#exampleModal_remove_job').modal('hide');
    $(".list-of-job").empty();
    console.log(list_of_job);
    get_job_id(list_of_job, 1);
    show_all_job()
});

$(document).on('click', "#hide-modal-tab6", function () {
    $('#exampleModalJob').modal('hide');
    $("#obj-job-01").val('');
    //$("#pos-del-obj-button1").hide();
    $("#obj-job-02").val('');
    //$("#pos-del-obj-button2").hide();
    $("#obj-job-03").val('');
    //$("#pos-del-obj-button3").hide();
    $('#nm_job').prop('selectedIndex', 0);
    $("#each_skill1").prop('selectedIndex', 0);
    $("#customRange11").val(5);
    //document.getElementsByClassName("x1").style.background = "linear-gradient(to right,#f0a143 0%,#f0a143 50%, #c4c4c4 50%, #c4c4c4 100%)";
    $("#each_skill2").prop('selectedIndex', 0);
    $("#customRange12").val(5);
    //document.getElementsByClassName("x2").style.background = "linear-gradient(to right,#0fe17c 0%,#0fe17c 50%, #c4c4c4 50%, #c4c4c4 100%)";
    $("#each_skill3").prop('selectedIndex', 0);
    $("#customRange13").val(5);
    //document.getElementsByClassName("x3").style.background = "linear-gradient(to right,#c98a11 0%,#f0a143 50%, #c98a11 50%, #c4c4c4 100%)";
    //document.getElementById("customRange11").disabled = true;
    //document.getElementById("customRange12").disabled = true;
    //document.getElementById("customRange13").disabled = true;
});

$(document).on("change", "#nm_job", function () {
    if (document.getElementById("nm_job").selectedIndex != 0) {
        $("#nm_job").removeClass("error_select_job");
    }
});

document.getElementById("submit-job11").addEventListener("click", function () {
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

    if (document.getElementById("nm_job").value == '') {
        //alert("kuay");
        $("#nm_job").addClass("error_select_job");
    }
    else {
        if (skill_job_1 == 'เลือกทักษะของคุณที่เหมาะกับงาน' || skill_job_1 == "") {
            skill_job_1 = "";
            score_skill_job_1 = 0;
        }
        if (skill_job_2 == 'เลือกทักษะของคุณที่เหมาะกับงาน' || skill_job_2 == "") {
            skill_job_2 = "";
            score_skill_job_2 = 0;
        }
        if (skill_job_3 == 'เลือกทักษะของคุณที่เหมาะกับงาน' || skill_job_3 == "") {
            skill_job_3 = "";
            score_skill_job_3 = 0;
        }
        if (choose_function == 1) { //edit job after add
            console.log("edit!!!!!!");
            for_edit["name_job"] = name_job;
            for_edit["name_job_select"] = $("#nm_job").prop('selectedIndex');
            for_edit["skill1"] = skill_job_1;
            for_edit["skill1_select"] = $("#each_skill1").prop('selectedIndex');
            for_edit["score_skill1"] = score_skill_job_1;
            for_edit["skill2"] = skill_job_2;
            for_edit["skill2_select"] = $("#each_skill2").prop('selectedIndex');
            for_edit["score_skill2"] = score_skill_job_2;
            for_edit["skill3"] = skill_job_3;
            for_edit["skill3_select"] = $("#each_skill3").prop('selectedIndex');
            for_edit["score_skill3"] = score_skill_job_3;
            for_edit["obj1"] = obj_job_1;
            for_edit["obj2"] = obj_job_2;
            for_edit["obj3"] = obj_job_3;
        }
        else if (choose_function == 2) { //add job in list
            list_of_job.push({
                id: create_UUID(),
                job_pos: 0,
                name_job: name_job,
                name_job_select: $("#nm_job").prop('selectedIndex'),
                skill1: skill_job_1,
                skill1_select: $("#each_skill1").prop('selectedIndex'),
                score_skill1: score_skill_job_1,
                skill2: skill_job_2,
                skill2_select: $("#each_skill2").prop('selectedIndex'),
                score_skill2: score_skill_job_2,
                skill3: skill_job_3,
                skill3_select: $("#each_skill3").prop('selectedIndex'),
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
        $("#customRange11").val(5);
        //document.getElementsByClassName("x1").style.background = "background: linear-gradient(to right,#f0a143 0%,#f0a143 50%, #c4c4c4 50%, #c4c4c4 100%)";
        $("#each_skill2").prop('selectedIndex', 0);
        $("#customRange12").val(5);
        //document.getElementsByClassName("x2").style.background = "background: linear-gradient(to right,#0fe17c 0%,#0fe17c 50%, #c4c4c4 50%, #c4c4c4 100%)";
        $("#each_skill3").prop('selectedIndex', 0);
        $("#customRange13").val(5);
        //document.getElementsByClassName("x3").style.background = "background: linear-gradient(to right,#c98a11 0%,#f0a143 50%, #c98a11 50%, #c4c4c4 100%)";
        $("#obj-job-01").val('');
        $("#pos-del-obj-button1").hide();
        $("#obj-job-02").val('');
        $("#pos-del-obj-button2").hide();
        $("#obj-job-03").val('');
        $("#pos-del-obj-button3").hide();
        $('#exampleModalJob').modal('hide');
        $(".list-of-job").empty();
        show_all_job()
    }
});

/*--- textarea obj ----*/

$("#pos-del-obj-button1").hide();
$("#pos-del-obj-button2").hide();
$("#pos-del-obj-button3").hide();
$(document).on("change", "#obj-job-01", function () {
    if ($("#obj-job-01").val() != "") {
        $("#pos-del-obj-button1").show();
    }
    else {
        $("#pos-del-obj-button1").hide();
    }
});
$(document).on("change", "#obj-job-02", function () {
    if ($("#obj-job-02").val() != "") {
        $("#pos-del-obj-button2").show();
    }
    else {
        $("#pos-del-obj-button2").hide();
    }
});
$(document).on("change", "#obj-job-03", function () {
    if ($("#obj-job-03").val() != "") {
        $("#pos-del-obj-button3").show();
    }
    else {
        $("#pos-del-obj-button3").hide();
    }
});
$(document).on("click", "#pos-del-obj-button1", function () {
    $("#obj-job-01").val('');
    $("#pos-del-obj-button1").hide();
});
$(document).on("click", "#pos-del-obj-button2", function () {
    $("#obj-job-02").val('');
    $("#pos-del-obj-button2").hide();
});
$(document).on("click", "#pos-del-obj-button3", function () {
    $("#obj-job-03").val('');
    $("#pos-del-obj-button3").hide();
});

function GetJob(text){
	fetch("http://localhost:2000/register/jobtitle",
		{ method: "GET", })
		.then(response => response.json())
		//.then(response => response.result)
		.then((raws) => {
			console.log(raws);
            for(var i=0;i<165;i++){
                var job_now = raws[i].THName;
                console.log(job_now);
                $('#nm_job').append($('<option />').val(job_now).html(job_now));
            };

        }).catch((error) => {
			  console.log(error);
			});
		
}

GetJob();