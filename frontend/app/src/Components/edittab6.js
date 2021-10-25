import React from 'react';
import DatePickerBD from './datepickerBD.js';
import $ from 'jquery';
import Cropper from 'react-cropper';
import cookie from 'react-cookies';

class Edittab6 extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.state = ({
            statusUpload6: "",
            imgStatus6: ""
        });
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        var jobedit = this;
        //alert("อย่าเพิ่ง add edit delete");
        var token6 = cookie.load('login-token');
        var choose_function = -1; //default
        var id_list_job;
        var tabId;
        var list_of_job = []; //list of job
        console.log("edittab6!!!!:", this.props.myjob_data);
        const myjob2 = this.props.myjob_data ? this.props.myjob_data : [];
        list_of_job = [...myjob2];
        $(".step-marks").remove();
        $(".step-labels").remove();
        $("#input_mySlider1").remove();
        $("#input_mySlider2").remove();
        $("#input_mySlider3").remove();
        show_all_job();

        $(document).on('click', '.tabs_pop li', function () {
            $('.tabs_pop li').removeClass('current2');
            $('.tab-pane_pop').removeClass('current2');
            tabId = $(this).attr('data-tab1');
            //console.log(`tabId:`, tabId);
            //console.log(`this is!!:`, this);
            $(this).addClass('current2');
            $('#' + tabId).addClass('current2');
        });


        function get_job_id(list_of_job, x) {
            //var x = 1;
            list_of_job.forEach(ele => {
                ele["Job_Pos"] = x;
                //console.log("x:", x);
                x++;
            });
            return list_of_job;
        }

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
                grid_Job2 = grid_Job2.replace("{no_list}", ele["InterestedJob_id"]);
                grid_Job1 = grid_Job1.replace("{no_job}", ele["Job_Pos"]);
                grid_Job1 = grid_Job1.replace("{name_job}", ele["Job_JobName"]);
                if (ele["Job_SkillName1"] == "none" && ele["Job_SkillName2"] == "none" && ele["Job_SkillName3"] == "none") {
                    grid_Job1 = grid_Job1.replace(`<h1 id="mySkil-job">ทักษะของฉัน</h1>`, "");
                }
                if (ele["Job_SkillName1"] != "none") {
                    if (ele["Job_SkillName1"].length > 12) {
                        grid_Job_skill1 = grid_Job_skill1.replace("{skill1}", ele["Job_SkillName1"].slice(0, 11) + "...");
                    }
                    else {
                        grid_Job_skill1 = grid_Job_skill1.replace("{skill1}", ele["Job_SkillName1"]);
                    }
                }
                else {
                    grid_Job_skill1 = "";
                }
                if (ele["Job_SkillName2"] != "none") {
                    if (ele["Job_SkillName2"].length > 12) {
                        grid_Job_skill2 = grid_Job_skill2.replace("{skill2}", ele["Job_SkillName2"].slice(0, 11) + "...");
                    }
                    else {
                        grid_Job_skill2 = grid_Job_skill2.replace("{skill2}", ele["Job_SkillName2"]);
                    }
                }
                else {
                    grid_Job_skill2 = "";
                }
                if (ele["Job_SkillName3"] != "none") {
                    if (ele["Job_SkillName3"].length > 12) {
                        grid_Job_skill3 = grid_Job_skill3.replace("{skill3}", ele["Job_SkillName3"].slice(0, 11) + "...");
                    }
                    else {
                        grid_Job_skill3 = grid_Job_skill3.replace("{skill3}", ele["Job_SkillName3"]);
                    }
                }
                else {
                    grid_Job_skill3 = "";
                }
                if (list_of_job.length < 3) {
                    $(".limit-job-pos-3").removeClass("limit-job-pos-3-red");
                    $('.limit-job-pos-3').text('ท่านสามารถเพิ่มตำแหน่งงานที่สนใจได้สูงสุด 3 อัน');
                }
                else {
                    $(".frame_add_job_interest").hide();
                    $(".limit-job-pos-3").addClass("limit-job-pos-3-red");
                    $('.limit-job-pos-3').text('*ท่านเพิ่มตำแหน่งงานที่สนใจครบจำนวนแล้ว');
                }

                $(".list-of-job-edit").append(grid_Job1 + grid_Job_skill1 + grid_Job_skill2 + grid_Job_skill3 + grid_Job2);
            });
            console.log(`list_of_job:`, list_of_job);
        }

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
                $("#each_skill1").prop('selectedIndex', 0);
                $("#each_skill2").prop('selectedIndex', 0);
                $("#each_skill3").prop('selectedIndex', 0);
                removeOptionsJob(document.getElementById("each_skill1"));
                removeOptionsJob(document.getElementById("each_skill2"));
                removeOptionsJob(document.getElementById("each_skill3"));
                GetSkill(tomapjobeng);
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
                if (post.InterestedJob_id == id_list_job_edit)
                    return true;
            });
            $('#each_skill1').prop("disabled", false);
            $('#each_skill1').removeClass("dis_input3");
            $('#each_skill2').prop("disabled", false);
            $('#each_skill2').removeClass("dis_input3");
            $('#each_skill3').prop("disabled", false);
            $('#each_skill3').removeClass("dis_input3");
            //document.getElementById("nm_job").selectedIndex = for_edit["Job_JobName_select"];
            $("#nm_job").val(for_edit.Job_JobName);
            let tomapjobeng = mapEngNameJob[document.getElementById("nm_job").value];
            GetSkill(tomapjobeng);
            set_slider_range1(for_edit["Job_Score1"]);
            set_slider_range2(for_edit["Job_Score2"]);
            set_slider_range3(for_edit["Job_Score3"]);
            choose_function = 1;
            $('#submit-job11').text('ยืนยัน');
            $('#obj-job-01').prop("disabled", false);
            $("#obj-job-01").removeClass("dis_input3");

            $("#obj-job-01").val(for_edit["Job_Objective1"]);
            $("#obj-job-02").val(for_edit["Job_Objective2"]);
            $("#obj-job-03").val(for_edit["Job_Objective3"]);

            if (for_edit["Job_Objective1"] == "") {
                $("#pos-del-obj-button1").hide();
            }
            else {
                $("#pos-del-obj-button1").show();
            }
            if (for_edit["Job_Objective2"] == "") {
                $("#pos-del-obj-button2").hide();
            }
            else {
                $("#pos-del-obj-button2").show();
            }
            if (for_edit["Job_Objective3"] == "") {
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
                if (for_edit["Job_SkillName1"] == "none") {
                    //set_slider_range1(2.5);
                    //document.getElementById("input_mySlider1").disabled = true;
                    //$('#each_skill1 :selected').text('เลือกทักษะของคุณที่เหมาะกับงาน');
                    //document.getElementById("each_skill1").selectedIndex = 0;
                }
                else {
                    $("#each_skill1").val(for_edit["Job_SkillName1"]);
                    document.getElementById("input_mySlider1").disabled = false;
                }
                if (for_edit["Job_SkillName2"] == "none") {
                    //set_slider_range2(2.5);
                    //document.getElementById("input_mySlider2").disabled = true;
                    //$('#each_skill2 :selected').text('เลือกทักษะของคุณที่เหมาะกับงาน');
                    //document.getElementById("each_skill2").selectedIndex = 0;
                }
                else {
                    $("#each_skill2").val(for_edit["Job_SkillName2"]);
                    document.getElementById("input_mySlider2").disabled = false;
                }
                if (for_edit["Job_SkillName3"] == "none") {
                    //set_slider_range3(2.5);
                    //document.getElementById("input_mySlider3").disabled = true;
                    ///$('#each_skill3 :selected').text('เลือกทักษะของคุณที่เหมาะกับงาน');
                    // document.getElementsByClassName("x3").style.background = "linear-gradient(to right,#c98a11 0%,#f0a143 50%, #c98a11 50%, #c4c4c4 100%)";
                    //document.getElementById("each_skill3").selectedIndex = 0;
                }
                else {
                    $("#each_skill3").val(for_edit["Job_SkillName3"]);
                    document.getElementById("input_mySlider3").disabled = false;
                }
            }, 600);
        });

        document.getElementById("submit-job11").addEventListener("click", function () {
            jobedit.setState({ statusUpload6: "Saving...", imgStatus6: "assets/images/outline_cached_black_24dp.png" });
            $("#for-error-dgd6").removeClass("status-saving5555-red");
            var name_job = document.getElementById("nm_job").value;
            var skill_job_1 = document.getElementById("each_skill1").value;
            var skill_job_2 = document.getElementById("each_skill2").value;
            var skill_job_3 = document.getElementById("each_skill3").value;
            var obj_job_1 = document.getElementById("obj-job-01").value;
            var obj_job_2 = document.getElementById("obj-job-02").value;
            var obj_job_3 = document.getElementById("obj-job-03").value;
            var score_slider11 = document.getElementById("input_mySlider1").value;
            var score_slider12 = document.getElementById("input_mySlider2").value;
            var score_slider13 = document.getElementById("input_mySlider3").value;
            var push2list = {};
            if (document.getElementById("nm_job").value == '') {
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
                let last_jobskill = [], last_jobscore = [], last_jobobj = [];
                if (skill_job_1 == "none" && skill_job_2 == "none" && skill_job_3 != "none") {
                    skill_job_1 = skill_job_3;
                    score_slider11 = score_slider13;
                    skill_job_3 = "none";
                    score_slider13 = "2.5";
                }
                else if (skill_job_1 == "none" && skill_job_2 != "none" && skill_job_3 == "none") {
                    skill_job_1 = skill_job_2;
                    score_slider11 = score_slider12;
                    skill_job_2 = "none";
                    score_slider12 = "2.5";
                }
                else if (skill_job_1 == "none" && skill_job_2 != "none" && skill_job_3 != "none") {
                    skill_job_1 = skill_job_2;
                    score_slider11 = score_slider12;
                    skill_job_2 = skill_job_3;
                    score_slider12 = score_slider13;
                    skill_job_3 = "none";
                    score_slider13 = "2.5";
                }
                else if (skill_job_1 != "none" && skill_job_2 == "none" && skill_job_3 != "none") {
                    skill_job_2 = skill_job_3;
                    score_slider12 = score_slider13;
                    skill_job_3 = "none";
                    score_slider13 = "2.5";
                }
                last_jobskill.push(skill_job_1);
                last_jobskill.push(skill_job_2);
                last_jobskill.push(skill_job_3);
                if (skill_job_1 != "none") {
                    last_jobscore.push(parseFloat(score_slider11));
                }
                else {
                    last_jobscore.push(0);
                }
                if (skill_job_2 != "none") {
                    last_jobscore.push(parseFloat(score_slider12));
                }
                else {
                    last_jobscore.push(0);
                }
                if (skill_job_3 != "none") {
                    last_jobscore.push(parseFloat(score_slider13));
                }
                else {
                    last_jobscore.push(0);
                }
                if (obj_job_1 == "" && obj_job_2 == "" && obj_job_3 != "") {
                    obj_job_1 = obj_job_3;
                    obj_job_3 = "";
                }
                else if (obj_job_1 == "" && obj_job_2 != "" && obj_job_3 == "") {
                    obj_job_1 = obj_job_2;
                    obj_job_2 = "";
                }
                else if (obj_job_1 == "" && obj_job_2 != "" && obj_job_3 != "") {
                    obj_job_1 = obj_job_2;
                    obj_job_2 = obj_job_3;
                    obj_job_3 = "";
                }
                else if (obj_job_1 != "" && obj_job_2 == "" && obj_job_3 != "") {
                    obj_job_2 = obj_job_3;
                    obj_job_3 = "";
                }
                if (obj_job_1 == "") {
                    obj_job_1 = "none";
                }
                if (obj_job_2 == "") {
                    obj_job_2 = "none";
                }
                if (obj_job_3 == "") {
                    obj_job_3 = "none";
                }
                last_jobobj.push(obj_job_1);
                last_jobobj.push(obj_job_2);
                last_jobobj.push(obj_job_3);
                let sendinterestJob2back = {
                    "Job_JobName": name_job,
                    "Job_SkillName": last_jobskill,
                    "Job_Score": last_jobscore,
                    "Job_Objective": last_jobobj
                };
                if (choose_function == 1) { //edit job after add
                    console.log("edit!!!!!!");
                    fetch("http://localhost:2000/register/interestedJob/" + id_list_job_edit, {
                        method: "PATCH",
                        headers: {
                            'Authorization': 'Bearer ' + token6,
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(sendinterestJob2back)
                    })
                        .then(response => response.json())
                        .then((raws) => {
                            console.log(raws);
                            for_edit["Job_JobName"] = name_job;
                            //for_edit["Job_JobName_select"] = $("#nm_job").prop('selectedIndex');
                            for_edit["Job_SkillName1"] = skill_job_1;
                            //for_edit["Job_SkillName1_select"] = document.getElementById("each_skill1").selectedIndex;
                            for_edit["Job_Score1"] = parseFloat(score_slider11).toFixed(1);
                            for_edit["Job_SkillName2"] = skill_job_2;
                            //for_edit["Job_SkillName2_select"] = document.getElementById("each_skill2").selectedIndex;
                            for_edit["Job_Score2"] = parseFloat(score_slider12).toFixed(1);
                            for_edit["Job_SkillName3"] = skill_job_3;
                            //for_edit["Job_SkillName3_select"] = document.getElementById("each_skill3").selectedIndex;
                            for_edit["Job_Score3"] = parseFloat(score_slider13).toFixed(1);
                            for_edit["Job_Objective1"] = obj_job_1;
                            for_edit["Job_Objective2"] = obj_job_2;
                            for_edit["Job_Objective3"] = obj_job_3;
                            $('#nm_job').prop('selectedIndex', 0);
                            $("#obj-job-01").val('');
                            $("#pos-del-obj-button1").hide();
                            $("#obj-job-02").val('');
                            $("#pos-del-obj-button2").hide();
                            $("#obj-job-03").val('');
                            $("#pos-del-obj-button3").hide();
                            $('#exampleModalJob').modal('hide');
                            $(".list-of-job-edit").empty();
                            show_all_job()
                            $(".step-marks").remove();
                            $(".step-labels").remove();
                            $("#input_mySlider1").remove();
                            $("#input_mySlider2").remove();
                            $("#input_mySlider3").remove();
                            jobedit.setState({ statusUpload6: "", imgStatus6: "" });
                        }).catch((error) => {
                            console.log(error);
                            jobedit.setState({ statusUpload6: "Save Failed", imgStatus6: "assets/images/baseline_error_black_24dp.png" });
                            $("#for-error-dgd6").addClass("status-saving5555-red");
                        });
                }
                else if (choose_function == 2) { //add job in list
                    fetch("http://localhost:2000/register/addinterestedJob", {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + token6,
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(sendinterestJob2back)
                    })
                        .then(response => response.json())
                        .then((raws) => {
                            console.log(raws)
                            push2list = {
                                InterestedJob_id: raws.id,
                                Job_Pos: 0,
                                Job_JobName: name_job,
                                //Job_JobName_select: $("#nm_job").prop('selectedIndex'),
                                Job_SkillName1: skill_job_1,
                                //Job_SkillName1_select: document.getElementById("each_skill1").selectedIndex,
                                Job_Score1: parseFloat(score_slider11).toFixed(1),
                                Job_SkillName2: skill_job_2,
                                //Job_SkillName2_select: document.getElementById("each_skill2").selectedIndex,
                                Job_Score2: parseFloat(score_slider12).toFixed(1),
                                Job_SkillName3: skill_job_3,
                                //Job_SkillName3_select: document.getElementById("each_skill3").selectedIndex,
                                Job_Score3: parseFloat(score_slider13).toFixed(1),
                                Job_Objective1: obj_job_1,
                                Job_Objective2: obj_job_2,
                                Job_Objective3: obj_job_3
                            }
                            list_of_job.push(push2list);
                            get_job_id(list_of_job, 1);
                            console.log(list_of_job);
                            $('#nm_job').prop('selectedIndex', 0);
                            $("#obj-job-01").val('');
                            $("#pos-del-obj-button1").hide();
                            $("#obj-job-02").val('');
                            $("#pos-del-obj-button2").hide();
                            $("#obj-job-03").val('');
                            $("#pos-del-obj-button3").hide();
                            $('#exampleModalJob').modal('hide');
                            $(".list-of-job-edit").empty();
                            show_all_job()
                            $(".step-marks").remove();
                            $(".step-labels").remove();
                            $("#input_mySlider1").remove();
                            $("#input_mySlider2").remove();
                            $("#input_mySlider3").remove();
                            jobedit.setState({ statusUpload6: "", imgStatus6: "" });
                        }).catch((error) => {
                            console.log(error);
                            jobedit.setState({ statusUpload6: "Save Failed", imgStatus6: "assets/images/baseline_error_black_24dp.png" });
                            $("#for-error-dgd6").addClass("status-saving5555-red");
                        });
                }
                /*if (list_of_job.length < 3) {
                    $(".limit-job-pos-3").removeClass("limit-job-pos-3-red");
                    $('.limit-job-pos-3').text('ท่านสามารถเพิ่มตำแหน่งงานที่สนใจได้สูงสุด 3 อัน');
                }
                else {
                    $(".frame_add_job_interest").hide();
                    $(".limit-job-pos-3").addClass("limit-job-pos-3-red");
                    $('.limit-job-pos-3').text('*ท่านเพิ่มตำแหน่งงานที่สนใจครบจำนวนแล้ว');
                }*/
            }
        });

        var id_list_job_del;

        $(document).on("click", "#del-job", function () {
            id_list_job_del = $(this).parents().parents().attr('id');
            console.log("id_list_job111:", id_list_job_del);
            $('#exampleModal_remove_job').modal('toggle');
        });

        $(document).on('click', "#summit-to-delete", function () {
            var removeIndex = list_of_job.findIndex(function (post, index_del) {
                if (post.InterestedJob_id === id_list_job_del)
                    return true;
            });
            console.log("removeIndex:", removeIndex);
            if (list_of_job[removeIndex].isFetch === true) {
                fetch("http://localhost:2000/register/interestedJob/" + list_of_job[removeIndex].InterestedJob_id, {
                    method: "DELETE",
                    headers: {
                        'Authorization': 'Bearer ' + token6,
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "*",
                        "Access-Control-Allow-Credentials": true,
                        "Content-Type": "application/json"
                    },
                })
                    .then(response => response.json())
                    .then((raws) => {
                        console.log(raws);
                        list_of_job.splice(removeIndex, 1);
                        //console.log(`delete job id:`, removeIndex);
                        $('#exampleModal_remove_job').modal('hide');
                        $(".list-of-job-edit").empty();
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
                    }).catch((error) => {
                        console.log(error);
                    });
            }
            else {
                list_of_job.splice(removeIndex, 1);
                //console.log(`delete job id:`, removeIndex);
                $('#exampleModal_remove_job').modal('hide');
                $(".list-of-job-edit").empty();
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
            jobedit.setState({ statusUpload6: "", imgStatus6: "" });
            $("#for-error-dgd6").removeClass("status-saving5555-red");
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
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
        $(document).unbind();
    }

    handleLoad() {
        console.log("YEAH!");
    }

    render() {
        return (
            <div className="Registab6">
                <div class="regis-box-content1">
                    <h1 id="text-add-name-my-job11">เพิ่มตำแหน่งงานที่สนใจ</h1>
                    <div class="list-of-job-edit" id="in-list-of-job"></div>

                    <div class="frame_add_job_interest">
                        <div className="button_add_job_interest">
                            <button id="add-job" type="button" class="btn">
                                <img src="assets/images/+.png" width="57" height="57" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img>
                            </button>
                        </div>
                    </div>


                    <div class="modal fade" id="exampleModal_remove_job" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content minisize">
                                <h4 class="del-b">คุณต้องการลบเป้าหมายในการทำงานนี้ ?</h4>
                                <div class="centerverify">
                                    <a id="hide-modal-delete" type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" >ยกเลิก</a>
                                    <a id="summit-to-delete" type="button" class="btn btn-cta-primary-yellowshort profile-button round" >ลบ</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModalJob" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-xl">
                            <div class="modal-content popup_JOB" >
                                <div class="row head_modal_job">
                                    <div class="col-md-5">
                                        <h1 class="inline" id="topic_pop">เพิ่มตำแหน่งงานที่สนใจ</h1>
                                        <img class="status-img-saving-3r3r6" src={this.state.imgStatus6} height="36"></img>
                                        <h5 class="inline status-saving6666" id="for-error-dgd6">{this.state.statusUpload6}</h5>
                                    </div>
                                    <div class="col-md-5 select-job4">
                                        <select id="nm_job" class="form-select dropbtn-job4 margin-bottom-job4 fff" required>
                                            <option selected disabled value="">เลือกหรือพิมพ์ตำแหน่งงานที่คุณสนใจ*</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="tabPOP">
                                    <ul class="tabs_pop">
                                        <li class="tab-link_pop current2" id="prayut-nha-hee" data-toggle="tab" data-tab1="tab01" type="button">ทักษะของฉัน</li>
                                        <li class="tab-link_pop" data-tab1="tab02" type="button">เป้าหมายในการทำงาน</li>
                                    </ul>
                                    <div class="underline-tabJob1"></div>
                                </div>

                                <div className="contentOfModalJop">
                                    <div class="tab-contents_pop">
                                        <div class="tab-pane_pop current2" id="tab01">
                                            <div class="row list-job-skill1">
                                                <div class="col-md-5">
                                                    <select id="each_skill1" class="form-select dropbtn_skillP margin-bottom1 fff"  >
                                                        <option selected disabled value="none">เลือกหรือพิมพ์ทักษะของคุณที่เหมาะกับงาน</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="box-slider1">
                                                        <div class="sliderWithLabels" id="mySlider1"></div>
                                                    </div>
                                                    <div class="reset-button11" id="reset-skill1"><img src="assets/images/reset.png" width="25" height="25" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img></div>
                                                </div>
                                            </div>

                                            <div class="row list-job-skill1">
                                                <div class="col-md-5">
                                                    <select id="each_skill2" class="form-select dropbtn_skillP margin-bottom1 fff" >
                                                        <option selected disabled value="none">เลือกหรือพิมพ์ทักษะของคุณที่เหมาะกับงาน</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="box-slider2">
                                                        <div class="sliderWithLabels" id="mySlider2"></div>
                                                    </div>
                                                    <div class="reset-button11" id="reset-skill2"><img src="assets/images/reset.png" width="25" height="25" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img></div>
                                                </div>
                                            </div>

                                            <div class="row list-job-skill1">
                                                <div class="col-md-5">
                                                    <select id="each_skill3" class="form-select dropbtn_skillP margin-bottom1 fff">
                                                        <option selected disabled value="none">เลือกหรือพิมพ์ทักษะของคุณที่เหมาะกับงาน</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="box-slider3">
                                                        <div class="sliderWithLabels" id="mySlider3"></div>
                                                    </div>
                                                    <div class="reset-button11" id="reset-skill3"><img src="assets/images/reset.png" width="25" height="25" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tab-pane_pop" id="tab02">
                                            <div class="row">
                                                <div class="col-2">
                                                    <h1 id="number-obj-job">1</h1>
                                                </div>
                                                <div class="col-4">
                                                    <div class="contend-of-obj" >
                                                        <div class="pos-del-obj-button" id="pos-del-obj-button1">
                                                            <button type="button" class="btn del-obj-icon"><img src="assets/images/bin.png" width="25" height="25" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img></button>
                                                        </div>
                                                        <textarea maxlength="280" type="text" class="form-control dropbtn margin-bottom1 height-job1" id="obj-job-01" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-2">
                                                    <h1 id="number-obj-job">2</h1>
                                                </div>
                                                <div class="col-4">
                                                    <div class="contend-of-obj" >
                                                        <div class="pos-del-obj-button" id="pos-del-obj-button2">
                                                            <button type="button" class="btn del-obj-icon"><img src="assets/images/bin.png" width="25" height="25" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img></button>
                                                        </div>
                                                        <textarea maxlength="280" type="text" class="form-control dropbtn margin-bottom1 height-job2" id="obj-job-02" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-2">
                                                    <h1 id="number-obj-job">3</h1>
                                                </div>
                                                <div class="col-4">
                                                    <div class="contend-of-obj" >
                                                        <div class="pos-del-obj-button" id="pos-del-obj-button3">
                                                            <button type="button" class="btn del-obj-icon"><img src="assets/images/bin.png" width="25" height="25" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img></button>
                                                        </div>
                                                        <textarea maxlength="280" type="text" class="form-control dropbtn margin-bottom1 height-job3" id="obj-job-03" placeholder="พิมพ์เป้าหมายในการทำงานของคุณเพิ่ม" required></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="button-add-job1">
                                    <button id="hide-modal-tab6" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" >ยกเลิก</button>
                                    <button id="submit-job11" type="submit" class="btn btn-cta-primary-yellowshort profile-button round" ></button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <h1 class="limit-job-pos-3 normalformzonet3">ท่านสามารถเพิ่มตำแหน่งงานที่สนใจได้สูงสุด 3 อัน</h1>
                </div>
            </div >
        );
    }
}

export default Edittab6;