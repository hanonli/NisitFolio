/*------------------------ REGISTER TAB 6 ------------------------*/

/*---------------- TAB IN MODAL ---------------*/
var tabId;
$(document).on('click', '.tabs_pop li', function () {
    $('.tabs_pop li').removeClass('current2');
    $('.tab-pane_pop').removeClass('current2');
    tabId = $(this).attr('data-tab1');
    //console.log(`tabId:`, tabId);
    //console.log(`this is!!:`, this);
    $(this).addClass('current2');
    $('#' + tabId).addClass('current2');
});

/*---------------- list item job interest ----------------*/
var list_of_job = []; //list of job

function get_job_id(list_of_job, x) {
    //var x = 1;
    list_of_job.forEach(ele => {
        ele["job_pos"] = x;
        //console.log("x:", x);
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

        var grid_Job_skill1 = `	    <p id="skill1-job">{skill1}</p>`;

        var grid_Job_skill2 = `	    <p id="skill2-job">{skill2}</p>`;

        var grid_Job_skill3 = `     <p id="skill3-job">{skill3}</p>`;

        var grid_Job2 = `	    </div>\
                            </div>\
                            <div class="layer_icon" id="{no_list}">\
                                <div class="set-layer-button-job">\
								    <button type="button" class="btn" id="edit-job"><img src="assets/images/blackedit.png" width="35" height="35" oncontextmenu="return false;" ondragstart="return false;"></img></button>\
								    <button type="button" class="btn" id="del-job"><img src="assets/images/bin.png" width="50" height="50" oncontextmenu="return false;" ondragstart="return false;"></img></button>\
                                </div>\
                            </div>\
                        </div>\
                        </div>\
                    </div>`;
        grid_Job2 = grid_Job2.replace("{no_list}", ele["id"]);
        grid_Job1 = grid_Job1.replace("{no_job}", ele["job_pos"]);
        grid_Job1 = grid_Job1.replace("{name_job}", ele["name_job"]);
        if (ele["skill1"] == "none" && ele["skill2"] == "none" && ele["skill3"] == "none") {
            grid_Job1 = grid_Job1.replace(`<h1 id="mySkil-job">ทักษะของฉัน</h1>`, "");
        }
        if (ele["skill1"] != "none") {
            if (ele["skill1"].length > 12) {
                grid_Job_skill1 = grid_Job_skill1.replace("{skill1}", ele["skill1"].slice(0, 11) + "...");
            }
            else {
                grid_Job_skill1 = grid_Job_skill1.replace("{skill1}", ele["skill1"]);
            }
        }
        else {
            grid_Job_skill1 = "";
        }
        if (ele["skill2"] != "none") {
            if (ele["skill2"].length > 12) {
                grid_Job_skill2 = grid_Job_skill2.replace("{skill2}", ele["skill2"].slice(0, 11) + "...");
            }
            else {
                grid_Job_skill2 = grid_Job_skill2.replace("{skill2}", ele["skill2"]);
            }
        }
        else {
            grid_Job_skill2 = "";
        }
        if (ele["skill3"] != "none") {
            if (ele["skill3"].length > 12) {
                grid_Job_skill3 = grid_Job_skill3.replace("{skill3}", ele["skill3"].slice(0, 11) + "...");
            }
            else {
                grid_Job_skill3 = grid_Job_skill3.replace("{skill3}", ele["skill3"]);
            }
        }
        else {
            grid_Job_skill3 = "";
        }

        $(".list-of-job").append(grid_Job1 + grid_Job_skill1 + grid_Job_skill2 + grid_Job_skill3 + grid_Job2);
    });
    console.log(`list_of_job:`, list_of_job);
}

$(document).ready(function () {
    show_all_job();
    $(".step-marks").remove();
    $(".step-labels").remove();
    $("#input_mySlider1").remove();
    $("#input_mySlider2").remove();
    $("#input_mySlider3").remove();
});

// setup slider HTML, then call the following method with the values
function setupSlider(id, vals, initialVal) {
    $(`#${id}`).append($('<div>').addClass('step-marks'));
    $(`#${id}`).append($('<div>').addClass('step-labels'));
    $(`#${id}`).append($('<input type="range" step="0.1" id="' + 'input_' + id + '">'));

    var min = 2.5;
    var max = 10;

    // initialise slider vals
    $(`#${id} input[type=range]`).attr({ min: min, max: max }).val(initialVal);

    vals.forEach((x, i) => {
        if (i < vals.length - 1) {
            $(`#${id} .step-marks`).append($("<div>"));
        }
        var label = $("<span>").text(x).on('click', () => $(`#${id} input[type=range]`).val(i));
        $(`#${id} .step-labels`).append(label);
    });

    var length = vals.length;
    var multiply = length / (length - 1);
    var widthVal = `calc(100% * ${multiply} - 25px)`;
    var marginVal = `calc(${widthVal} / ${length * -2} + 10px)`;

    $(`#${id} .step-labels`).css("width", widthVal);
    $(`#${id} .step-labels`).css("margin-left", marginVal);
    $(`#${id}`).show();
}

/*---slider range----*/
var score_slider1, score_slider2, score_slider3, pre_click_slider1 = -1, pre_click_slider2 = -1, pre_click_slider3 = -1;

function set_slider_range1(value1) {
    pre_click_slider1 = -1;
    setupSlider('mySlider1', ["พอได้เล็กน้อย", "พื้นฐาน", "ดี", "ยอดเยี่ยม"], value1);
    if (document.getElementById("each_skill1").value == 'none') {
        document.getElementById("input_mySlider1").disabled = true;
    }
    else {
        document.getElementById("input_mySlider1").disabled = false;
    }
    document.getElementById("each_skill1").addEventListener("click", function () {
        var skill_job_1 = document.getElementById("each_skill1").value;
        if (skill_job_1 != 'none' && skill_job_1 != pre_click_slider1) {
            document.getElementById("input_mySlider1").disabled = false;
            document.getElementById("input_mySlider1").value = "6.25";
            document.getElementById("input_mySlider1").style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + 50 + '%, #c4c4c4 ' + 50 + '%, #c4c4c4 100%)';
            pre_click_slider1 = skill_job_1;
            score_slider1 = "6.25";
        }
        else if (skill_job_1 == 'none') {
            document.getElementById("input_mySlider1").disabled = true;
            document.getElementById("input_mySlider1").value = "2.5";
            document.getElementById("input_mySlider1").style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
            pre_click_slider1 = -1;
            score_slider1 = "2.5";
        }
    });
    $(document).on("click", "#reset-skill1", function () {
        $("#each_skill1").prop('selectedIndex', 0);
        document.getElementById("input_mySlider1").value = "2.5";
        document.getElementById("input_mySlider1").disabled = true;
        document.getElementById("input_mySlider1").style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
        pre_click_slider1 = -1;
        score_slider1 = "2.5";
    });
    var slider1 = document.getElementById("input_mySlider1");
    slider1.style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + (slider1.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider1.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';

    slider1.oninput = function (event) {
        //console.log('skill1:', slider1.value);
        score_slider1 = parseFloat(slider1.value).toFixed(1);
        //score_slider1 = slider1.value;
        slider1.style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + (slider1.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider1.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';
    }
}

function set_slider_range2(value2) {
    pre_click_slider2 = -1;
    setupSlider('mySlider2', ["พอได้เล็กน้อย", "พื้นฐาน", "ดี", "ยอดเยี่ยม"], value2);
    if (document.getElementById("each_skill2").value == 'none') {
        document.getElementById("input_mySlider2").disabled = true;
    }
    else {
        document.getElementById("input_mySlider2").disabled = false;
    }
    document.getElementById("each_skill2").addEventListener("click", function () {
        var skill_job_2 = document.getElementById("each_skill2").value;
        if (skill_job_2 != 'none' && skill_job_2 != pre_click_slider2) {
            document.getElementById("input_mySlider2").disabled = false;
            document.getElementById("input_mySlider2").value = "6.25";
            document.getElementById("input_mySlider2").style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + 50 + '%, #c4c4c4 ' + 50 + '%, #c4c4c4 100%)';
            pre_click_slider2 = skill_job_2;
            score_slider2 = "6.25";
        }
        else if (skill_job_2 == 'none') {
            document.getElementById("input_mySlider2").disabled = true;
            document.getElementById("input_mySlider2").value = "2.5";
            document.getElementById("input_mySlider2").style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
            pre_click_slider2 = -1;
            score_slider2 = "2.5";
        }
    });
    $(document).on("click", "#reset-skill2", function () {
        $("#each_skill2").prop('selectedIndex', 0);
        document.getElementById("input_mySlider2").disabled = true;
        document.getElementById("input_mySlider2").value = "2.5";
        document.getElementById("input_mySlider2").style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
        pre_click_slider2 = -1;
        score_slider2 = "2.5";
    });
    var slider2 = document.getElementById("input_mySlider2");
    slider2.style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + (slider2.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider2.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';
    slider2.oninput = function (event) {
        //console.log('skill2:', slider2.value);
        //score_slider2 = slider2.value;
        score_slider2 = parseFloat(slider2.value).toFixed(1);
        slider2.style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + (slider2.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider2.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';
    }
}

function set_slider_range3(value3) {
    pre_click_slider3 = -1;
    setupSlider('mySlider3', ["พอได้เล็กน้อย", "พื้นฐาน", "ดี", "ยอดเยี่ยม"], value3);
    if (document.getElementById("each_skill3").value == 'none') {
        document.getElementById("input_mySlider3").disabled = true;
    }
    else {
        document.getElementById("input_mySlider3").disabled = false;
    }
    document.getElementById("each_skill3").addEventListener("click", function () {
        var skill_job_3 = document.getElementById("each_skill3").value;
        if (skill_job_3 != 'none' && skill_job_3 != pre_click_slider3) {
            document.getElementById("input_mySlider3").disabled = false;
            document.getElementById("input_mySlider3").value = "6.25";
            document.getElementById("input_mySlider3").style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + 50 + '%, #c4c4c4 ' + 50 + '%, #c4c4c4 100%)';
            pre_click_slider3 = skill_job_3;
            score_slider3 = "6.25";
        }
        else if (skill_job_3 == 'none') {
            document.getElementById("input_mySlider3").disabled = true;
            document.getElementById("input_mySlider3").value = "2.5";
            document.getElementById("input_mySlider3").style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
            pre_click_slider3 = -1;
            score_slider3 = "2.5";
        }
    });
    $(document).on("click", "#reset-skill3", function () {
        $("#each_skill3").prop('selectedIndex', 0);
        document.getElementById("input_mySlider3").disabled = true;
        document.getElementById("input_mySlider3").value = "2.5";
        document.getElementById("input_mySlider3").style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + 0 + '%, #c4c4c4 ' + 0 + '%, #c4c4c4 100%)';
        pre_click_slider3 = -1;
        score_slider3 = "2.5";
    });
    var slider3 = document.getElementById("input_mySlider3");
    slider3.style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + (slider3.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider3.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';
    slider3.oninput = function (event) {
        //console.log('skill3:', slider3.value);
        //score_slider3 = slider3.value;
        score_slider3 = parseFloat(slider3.value).toFixed(1);
        slider3.style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + (slider3.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 ' + (slider3.value - 2.5) / 7.5 * 100 + '%, #c4c4c4 100%)';
    }
}

function removeOptionsJob(selectElement) {
    var i, L = selectElement.options.length - 1;
    for (let i = L; i >= 1; i--) {
        selectElement.remove(i);
    }
}

var mapEngNameJob = {};

function GetJob(text) {
    fetch("http://localhost:2000/register/jobtitle",
        { method: "GET", })
        .then(response => response.json())
        //.then(response => response.result)
        .then((raws) => {
            //console.log(raws);
            raws.forEach((eleJob) => {
                var job_now = eleJob.THName;
                var job_now_eng = eleJob.Name;
                //console.log(job_now);
                $('#nm_job').append($('<option />').val(job_now).html(job_now));
                mapEngNameJob[job_now] = job_now_eng;
            });

        }).catch((error) => {
            console.log(error);
        });
}

GetJob();

function GetSkill(jobname2findskill) {
    fetch(`http://localhost:2000/register/` + jobname2findskill + `/skill`,
        { method: "GET", })
        .then(response => response.json())
        //.then(response => response.result)
        .then((raws) => {
            //console.log(raws);
            raws.forEach((eleSkill, index) => {
                var skill_now = eleSkill.skill;
                //var job_now_eng = eleSkill.Name;
                $('#each_skill1').append($('<option />').val(skill_now).html(skill_now));
                $('#each_skill2').append($('<option />').val(skill_now).html(skill_now));
                $('#each_skill3').append($('<option />').val(skill_now).html(skill_now));
            });
        }).catch((error) => {
            console.log(error);
        });
}


$(document).on("change", "#each_skill2", function () {
    if (document.getElementById("each_skill2").value == document.getElementById("each_skill1").value) {
        $("#each_skill2").addClass("is-invalid");
    }
    else {
        $("#each_skill2").removeClass("is-invalid");
    }
});

$(document).on("change", "#each_skill3", function () {
    if (document.getElementById("each_skill3").value == document.getElementById("each_skill1").value || document.getElementById("each_skill3").value == document.getElementById("each_skill2").value) {
        $("#each_skill3").addClass("is-invalid");
    }
    else {
        $("#each_skill3").removeClass("is-invalid");
    }
});

$(document).on("change", "#nm_job", function () {
    if (document.getElementById("nm_job").selectedIndex != 0) {
        $("#nm_job").removeClass("is-invalid");
        $('#each_skill1').prop("disabled", false);
        $('#each_skill1').removeClass("dis_input3");
        $('#each_skill2').prop("disabled", false);
        $('#each_skill2').removeClass("dis_input3");
        $('#each_skill3').prop("disabled", false);
        $('#each_skill3').removeClass("dis_input3");
        $('#obj-job-01').prop("disabled", false);
        $("#obj-job-01").removeClass("dis_input3");
        let tomapjobeng = mapEngNameJob[document.getElementById("nm_job").value];
        //console.log("mapEngNameJob:", mapEngNameJob);
        //console.log("tomapjobeng:", tomapjobeng);
        $("#each_skill1").prop('selectedIndex', 0);
        $("#each_skill2").prop('selectedIndex', 0);
        $("#each_skill3").prop('selectedIndex', 0);
        removeOptionsJob(document.getElementById("each_skill1"));
        removeOptionsJob(document.getElementById("each_skill2"));
        removeOptionsJob(document.getElementById("each_skill3"));
        GetSkill(jobname2findskill = tomapjobeng);

    }
    $(".step-marks").remove();
    $(".step-labels").remove();
    $("#input_mySlider1").remove();
    $("#input_mySlider2").remove();
    $("#input_mySlider3").remove();
    set_slider_range1(2.5);
    set_slider_range2(2.5);
    set_slider_range3(2.5);
});

$(document).on("click", ".frame_add_job_interest", function () {
    /*$('#tab01').addClass('current2');
    $('.tabs_pop li').addClass('current2');
    $('.tab-pane_pop').addClass('current2');*/
    $('#each_skill1').prop("disabled", true);
    $('#each_skill1').addClass("dis_input3");
    $('#each_skill2').prop("disabled", true);
    $('#each_skill2').addClass("dis_input3");
    $('#each_skill3').prop("disabled", true);
    $('#each_skill3').addClass("dis_input3");
    $("#nm_job").removeClass("is-invalid");
    choose_function = 2;
    if (list_of_job.length < 3) {
        $('#exampleModalJob').modal('toggle');
    }
    /*else {
        $(".frame_add_job_interest").hide();
    }*/
    set_slider_range1(2.5);
    set_slider_range2(2.5);
    set_slider_range3(2.5);
    $('#submit-job11').text('เพิ่ม');
    $("#obj-job-01").val('');
    $("#pos-del-obj-button1").hide();
    $("#obj-job-02").val('');
    $("#pos-del-obj-button2").hide();
    $("#obj-job-03").val('');
    $("#pos-del-obj-button3").hide();
    $('#obj-job-01').prop("disabled", true);
    $("#obj-job-01").addClass("dis_input3");
    $('#obj-job-02').prop("disabled", true);
    $("#obj-job-02").addClass("dis_input3");
    $('#obj-job-03').prop("disabled", true);
    $("#obj-job-03").addClass("dis_input3");
});

var for_edit, id_list_job_edit;
$(document).on("click", "#edit-job", function () {
    $("#nm_job").removeClass("is-invalid");
    id_list_job_edit = $(this).parents().parents().attr('id');
    //console.log(`edit:`, id_list_job_edit);
    for_edit = list_of_job.find(function (post, index_del) {
        if (post.id == id_list_job_edit)
            return true;
    });
    $('#each_skill1').prop("disabled", false);
    $('#each_skill1').removeClass("dis_input3");
    $('#each_skill2').prop("disabled", false);
    $('#each_skill2').removeClass("dis_input3");
    $('#each_skill3').prop("disabled", false);
    $('#each_skill3').removeClass("dis_input3");
    document.getElementById("nm_job").selectedIndex = for_edit["name_job_select"];
    let tomapjobeng = mapEngNameJob[document.getElementById("nm_job").value];
    GetSkill(jobname2findskill = tomapjobeng);
    set_slider_range1(for_edit["score_skill1"]);
    set_slider_range2(for_edit["score_skill2"]);
    set_slider_range3(for_edit["score_skill3"]);
    choose_function = 1;
    $('#submit-job11').text('ยืนยัน');
    $('#obj-job-01').prop("disabled", false);
    $("#obj-job-01").removeClass("dis_input3");
    /*if (for_edit["obj1"] == "none") {
        for_edit["obj1"] = "";
    }
    else {
        $('#obj-job-02').prop("disabled", false);
        $("#obj-job-02").removeClass("dis_input3");
        if (for_edit["obj2"] != "none") {
            $('#obj-job-03').prop("disabled", false);
            $("#obj-job-03").removeClass("dis_input3");
        }
        else {
            $('#obj-job-03').prop("disabled", true);
            $("#obj-job-03").addClass("dis_input3");
        }
    }
    if (for_edit["obj2"] == "none") {
        for_edit["obj2"] = "";
        $('#obj-job-03').prop("disabled", true);
        $("#obj-job-03").addClass("dis_input3");
    }
    else {
        $('#obj-job-02').prop("disabled", false);
        $("#obj-job-02").removeClass("dis_input3");
        $('#obj-job-03').prop("disabled", false);
        $("#obj-job-03").removeClass("dis_input3");
    }
    if (for_edit["obj3"] == "none") {
        for_edit["obj3"] = "";
    }
    else {
        $('#obj-job-03').prop("disabled", false);
        $("#obj-job-03").removeClass("dis_input3");
    }*/
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

    if ($("#obj-job-01").val() != "") {
        $('#obj-job-02').prop("disabled", false);
        $("#obj-job-02").removeClass("dis_input3");
        if ($("#obj-job-02").val() != "") {
            $('#obj-job-03').prop("disabled", false);
            $("#obj-job-03").removeClass("dis_input3");
        }
        else {
            $('#obj-job-03').prop("disabled", true);
            $("#obj-job-03").addClass("dis_input3");
        }
    }

    $('#exampleModalJob').modal('toggle');
    setTimeout(function () {
        if (for_edit["skill1"] == "none") {
            //set_slider_range1(2.5);
            //document.getElementById("input_mySlider1").disabled = true;
            //$('#each_skill1 :selected').text('เลือกทักษะของคุณที่เหมาะกับงาน');
            //document.getElementById("each_skill1").selectedIndex = 0;
        }
        else {
            $("#each_skill1").prop('selectedIndex', for_edit["skill1_select"]);
            document.getElementById("input_mySlider1").disabled = false;
        }
        if (for_edit["skill2"] == "none") {
            //set_slider_range2(2.5);
            //document.getElementById("input_mySlider2").disabled = true;
            //$('#each_skill2 :selected').text('เลือกทักษะของคุณที่เหมาะกับงาน');
            //document.getElementById("each_skill2").selectedIndex = 0;
        }
        else {
            $("#each_skill2").prop('selectedIndex', for_edit["skill2_select"]);
            document.getElementById("input_mySlider2").disabled = false;
        }
        if (for_edit["skill3"] == "none") {
            //set_slider_range3(2.5);
            //document.getElementById("input_mySlider3").disabled = true;
            ///$('#each_skill3 :selected').text('เลือกทักษะของคุณที่เหมาะกับงาน');
            // document.getElementsByClassName("x3").style.background = "linear-gradient(to right,#c98a11 0%,#f0a143 50%, #c98a11 50%, #c4c4c4 100%)";
            //document.getElementById("each_skill3").selectedIndex = 0;
        }
        else {
            $("#each_skill3").prop('selectedIndex', for_edit["skill3_select"]);
            document.getElementById("input_mySlider3").disabled = false;
        }
    }, 280);
});

document.getElementById("submit-job11").addEventListener("click", function () {
    name_job = document.getElementById("nm_job").value;
    skill_job_1 = document.getElementById("each_skill1").value;
    skill_job_2 = document.getElementById("each_skill2").value;
    skill_job_3 = document.getElementById("each_skill3").value;
    obj_job_1 = document.getElementById("obj-job-01").value;
    obj_job_2 = document.getElementById("obj-job-02").value;
    obj_job_3 = document.getElementById("obj-job-03").value;
    score_slider11 = document.getElementById("input_mySlider1").value;
    score_slider12 = document.getElementById("input_mySlider2").value;
    score_slider13 = document.getElementById("input_mySlider3").value;
    var push2list = {};
    if (document.getElementById("nm_job").value == '') {
        //alert("kuay");
        $("#nm_job").addClass("is-invalid");
    }
    else if ((skill_job_2 == skill_job_1 || skill_job_3 == skill_job_1 || skill_job_2 == skill_job_3) && skill_job_1 != 'none' && skill_job_2 != 'none' && skill_job_3 != 'none') {
        //$("#each_skill2").addClass("is-invalid");
        //can't submit
    }
    else if (list_of_job.findIndex(e => e.name_job === document.getElementById("nm_job").value) != -1 && choose_function == 2) {
        $("#nm_job").addClass("is-invalid");
    }
    else {
        if (skill_job_1 == 'none') {
            //skill_job_1 = 'none';
            score_slider11 = "2.5";
        }
        if (skill_job_2 == 'none') {
            //skill_job_2 = 'none';
            score_slider12 = "2.5";
        }
        if (skill_job_3 == 'none') {
            //skill_job_3 = 'none';
            score_slider13 = "2.5";
        }
        if (choose_function == 1) { //edit job after add
            console.log("edit!!!!!!");
            for_edit["name_job"] = name_job;
            for_edit["name_job_select"] = $("#nm_job").prop('selectedIndex');
            for_edit["skill1"] = skill_job_1;
            for_edit["skill1_select"] = document.getElementById("each_skill1").selectedIndex;
            for_edit["score_skill1"] = parseFloat(score_slider11).toFixed(1);
            for_edit["skill2"] = skill_job_2;
            for_edit["skill2_select"] = document.getElementById("each_skill2").selectedIndex;
            for_edit["score_skill2"] = parseFloat(score_slider12).toFixed(1);
            for_edit["skill3"] = skill_job_3;
            for_edit["skill3_select"] = document.getElementById("each_skill3").selectedIndex;
            for_edit["score_skill3"] = parseFloat(score_slider13).toFixed(1);
            for_edit["obj1"] = obj_job_1;
            for_edit["obj2"] = obj_job_2;
            for_edit["obj3"] = obj_job_3;
        }
        else if (choose_function == 2) { //add job in list
            push2list = {
                id: create_UUID(),
                job_pos: 0,
                name_job: name_job,
                name_job_select: $("#nm_job").prop('selectedIndex'),
                skill1: skill_job_1,
                skill1_select: document.getElementById("each_skill1").selectedIndex,
                score_skill1: parseFloat(score_slider11).toFixed(1),
                skill2: skill_job_2,
                skill2_select: document.getElementById("each_skill2").selectedIndex,
                score_skill2: parseFloat(score_slider12).toFixed(1),
                skill3: skill_job_3,
                skill3_select: document.getElementById("each_skill3").selectedIndex,
                score_skill3: parseFloat(score_slider13).toFixed(1),
                obj1: obj_job_1,
                obj2: obj_job_2,
                obj3: obj_job_3
            }
            list_of_job.push(push2list);
            get_job_id(list_of_job, 1);
            console.log(list_of_job);
        }
        $('#nm_job').prop('selectedIndex', 0);
        $("#obj-job-01").val('');
        $("#pos-del-obj-button1").hide();
        $("#obj-job-02").val('');
        $("#pos-del-obj-button2").hide();
        $("#obj-job-03").val('');
        $("#pos-del-obj-button3").hide();
        $('#exampleModalJob').modal('hide');
        $(".list-of-job").empty();
        show_all_job()
        $(".step-marks").remove();
        $(".step-labels").remove();
        $("#input_mySlider1").remove();
        $("#input_mySlider2").remove();
        $("#input_mySlider3").remove();
        if (list_of_job.length < 3) {
            $(".limit-job-pos-3").removeClass("limit-job-pos-3-red");
            $('.limit-job-pos-3').text('ท่านสามารถเพิ่มตำแหน่งงานที่สนใจได้สูงสุด 3 อัน');
        }
        else {
            $(".frame_add_job_interest").hide();
            $(".limit-job-pos-3").addClass("limit-job-pos-3-red");
            $('.limit-job-pos-3').text('*ท่านเพิ่มตำแหน่งงานที่สนใจครบจำนวนแล้ว');
        }
    }
});

var id_list_job_del;

$(document).on("click", "#del-job", function () {
    id_list_job_del = $(this).parents().parents().attr('id');
    //console.log("id_list_job111:", id_list_job_del);
    $('#exampleModal_remove_job').modal('toggle');
});

$(document).on('click', "#summit-to-delete", function () {
    var removeIndex = list_of_job.findIndex(function (post, index_del) {
        if (post.id == id_list_job_del)
            return true;
    });
    //console.log("id_list_job:", id_list_job_del);
    list_of_job.splice(removeIndex, 1);
    //console.log(`delete job id:`, removeIndex);
    $('#exampleModal_remove_job').modal('hide');
    $(".list-of-job").empty();
    //console.log(list_of_job);
    get_job_id(list_of_job, 1);
    show_all_job()
    $(".step-marks").remove();
    $(".step-labels").remove();
    $("#input_mySlider1").remove();
    $("#input_mySlider2").remove();
    $("#input_mySlider3").remove();
    if (list_of_job.length < 3) {
        $(".frame_add_job_interest").show();
        $(".limit-job-pos-3").removeClass("limit-job-pos-3-red");
        $('.limit-job-pos-3').text('ท่านสามารถเพิ่มตำแหน่งงานที่สนใจได้สูงสุด 3 อัน');
    }
});

$(document).on('click', "#hide-modal-tab6", function () {
    $('#exampleModalJob').modal('hide');
});

$(document).on('hide.bs.modal', "#exampleModalJob", function () {
    $("#obj-job-01").val('');
    $("#obj-job-02").val('');
    $("#obj-job-03").val('');
    $('#nm_job').prop('selectedIndex', 0);
    $(".step-marks").remove();
    $(".step-labels").remove();
    $("#input_mySlider1").remove();
    $("#input_mySlider2").remove();
    $("#input_mySlider3").remove();
    $("#each_skill1").prop('selectedIndex', 0);
    $("#each_skill2").prop('selectedIndex', 0);
    $("#each_skill3").prop('selectedIndex', 0);
    removeOptionsJob(document.getElementById("each_skill1"));
    removeOptionsJob(document.getElementById("each_skill2"));
    removeOptionsJob(document.getElementById("each_skill3"));

    if (tabId == "tab02") {
        $('.tabs_pop li').removeClass('current2');
        $('.tab-pane_pop').removeClass('current2');
        $('#prayut-nha-hee').addClass('current2');
        $('#tab01').addClass('current2');
    }
});

$(document).on('click', "#hide-modal-delete", function () {
    $('#exampleModal_remove_job').modal('hide');
});


/*--- textarea obj ----*/

$("#pos-del-obj-button1").hide();
$("#pos-del-obj-button2").hide();
$("#pos-del-obj-button3").hide();


$(document).on("click", "#pos-del-obj-button1", function () {
    if ($("#obj-job-02").val() == "" && $("#obj-job-03").val() == "") {
        $("#obj-job-01").val('');
        $("#pos-del-obj-button1").hide();
        $('#obj-job-02').prop("disabled", true);
        $("#obj-job-02").addClass("dis_input3");
    }
    else {
        if ($("#obj-job-02").val() != "" && $("#obj-job-03").val() != "") {
            $("#obj-job-01").val($("#obj-job-02").val());
            $("#obj-job-02").val($("#obj-job-03").val());
            $("#obj-job-03").val('');
            $("#pos-del-obj-button3").hide();
            $('#obj-job-03').prop("disabled", true);
            $("#obj-job-03").addClass("dis_input3");
        }
        else if ($("#obj-job-02").val() != "" && $("#obj-job-03").val() == "") {
            $("#obj-job-01").val($("#obj-job-02").val());
            $("#obj-job-02").val('');
            $("#pos-del-obj-button2").hide();
            $('#obj-job-03').prop("disabled", true);
            $("#obj-job-03").addClass("dis_input3");
        }
    }
});

$(document).on("click", "#pos-del-obj-button2", function () {
    if ($("#obj-job-01").val() != "" && $("#obj-job-03").val() != "") {
        $("#obj-job-02").val($("#obj-job-03").val());
        $("#obj-job-03").val('');
        $("#pos-del-obj-button3").hide();
    }
    else if ($("#obj-job-01").val() != "" && $("#obj-job-03").val() == "") {
        $("#obj-job-02").val('');
        $("#pos-del-obj-button2").hide();
        $('#obj-job-03').prop("disabled", true);
        $("#obj-job-03").addClass("dis_input3");
    }
});

$(document).on("click", "#pos-del-obj-button3", function () {
    $("#obj-job-03").val('');
    $("#pos-del-obj-button3").hide();
});

$(document).on("change", "#obj-job-01", function () {
    if ($("#obj-job-01").val() != "") {
        $("#pos-del-obj-button1").show();
        $('#obj-job-02').prop("disabled", false);
        $("#obj-job-02").removeClass("dis_input3");
    }
    else {
        $("#pos-del-obj-button1").hide();
        if ($("#obj-job-02").val() == "") {
            $('#obj-job-02').prop("disabled", true);
            $("#obj-job-02").addClass("dis_input3");
        }
    }
});
$(document).on("change", "#obj-job-02", function () {
    if ($("#obj-job-02").val() != "") {
        $("#pos-del-obj-button2").show();
        $('#obj-job-03').prop("disabled", false);
        $("#obj-job-03").removeClass("dis_input3");
    }
    else {
        $("#pos-del-obj-button2").hide();
        if ($("#obj-job-03").val() == "") {
            $('#obj-job-03').prop("disabled", true);
            $("#obj-job-03").addClass("dis_input3");
        }
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

function testPost6() {
    var Job_Score1 = [], Job_Jobname = [], Job_Objective = [], Job_SkillName = []; //variable for send to backend 
    var i = 0;
    list_of_job.forEach(ele => {
        //post job name
        Job_Jobname.push([ele["name_job"]]);
        //post skill name
        Job_SkillName.push([ele["skill1"], ele["skill2"], ele["skill3"]]);
        //post job score
        //var total_skill_score = new Float32Array(3);
        var total_skill_score = [];
        if (ele["skill1"] != "none") {
            //total_skill_score[0] = ele["score_skill1"];
            total_skill_score.push(parseFloat(ele["score_skill1"]));
        }
        else {
            //total_skill_score[0] = 0;
            total_skill_score.push(0);
        }
        if (ele["skill2"] != "none") {
            //total_skill_score[1] = ele["score_skill2"];
            total_skill_score.push(parseFloat(ele["score_skill2"]));
        }
        else {
            //total_skill_score[1] = 0;
            total_skill_score.push(0);
        }
        if (ele["skill3"] != "none") {
            //total_skill_score[2] = ele["score_skill3"];
            total_skill_score.push(parseFloat(ele["score_skill3"]));
        }
        else {
            //total_skill_score[2] = 0;
            total_skill_score.push(0);
        }
        Job_Score1.push(total_skill_score);
        //post job objective
        var listofObj = [];
        listofObj.push(ele["obj1"]);
        listofObj.push(ele["obj2"]);
        listofObj.push(ele["obj3"]);
        Job_Objective.push(listofObj);
    });
    console.log("Job_Jobname:", Job_Jobname);
    console.log("Job_SkillName:", Job_SkillName);
    console.log("Job_Score:", Job_Score1);
    console.log("Job_Objective:", Job_Objective);
}