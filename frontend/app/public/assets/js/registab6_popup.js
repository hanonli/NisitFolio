$(document).ready(function () {
    $('.tabs_pop li').on('click', function () {
        var tabId = $(this).attr('data-tab1');
        $('.tabs_pop li').removeClass('current2');
        $('.tab-pane_pop').removeClass('current2');
        $(this).addClass('current2');
        $('#' + tabId).addClass('current2');
    })
});

/*----control slider range----*/

$(document).ready(function () {
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
});

var sample1 = [
    {
        "id": 1,
        "Job_Objective": ["อยากรวย"],
        "Job_Score": [7.88],
        "Job_JobName": ["ล้างรถที่ junkyardz"],
        "Job_SkillName": ["เต้นเซ็กซี่", "โชว์กล้าม"]
    },
    {
        "id": 2,
        "Job_Objective": ["อยากรวย"],
        "Job_Score": [7.88],
        "Job_JobName": ["นายกรัฐมนตรี"],
        "Job_SkillName": ["เต้นเซ็กซี่"]
    }
];

function get_Data() {
    var test;
}

function post_Data() {
    /*fetch("http://localhost:2000/register/", {
        method: 'POST',
        body: JSON.stringify({

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => completeModal());*/
}


/*----disable slider range----*/
$(document).ready(function () {
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
});

/*---- list item job interest ----*/
var no_job;


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
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModalJob" id="edit-job"><img src="assets/images/blackedit.png" width="65" height="65"></img></button>\
								<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal_remove_job" id="del-job"><img src="assets/images/bin.png" width="90" height="90"></img></button>\
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
});

//get and post data
$(document).ready(function () {
    var choose_function = -1; //default
    $("#edit-job").click(function () {
        choose_function = 1;
        console.log(`chosoe: ${choose_function}`);
        $('#exampleModalJob').modal('show');
        document.querySelector('#submit-job11').innerText = 'ยืนยัน';
    });

    $("#add-job").click(function () {
        choose_function = 2;
        console.log(`chosoe: ${choose_function}`);
        $('#exampleModalJob').modal('show');
        document.querySelector('#submit-job11').innerText = 'เพิ่ม';
    });

    document.getElementById("submit-job11").addEventListener("click", function () {
        if (choose_function == 2) {
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
            list_obj = [];
            list_score_job = [];
            job_nm = [name_job];
            list_obj.append(obj_job_1);
            list_obj.append(obj_job_2);
            list_obj.append(obj_job_3);
            list_score_job.append(score_skill_job_1.toFixed(2));
            list_score_job.append(score_skill_job_2.toFixed(2));
            list_score_job.append(score_skill_job_3.toFixed(2));
            console.log(`name job: `, name_job);
            console.log(`skill_job_1: `, skill_job_1);
            console.log(`score_skill_job_1: `, score_skill_job_1);
            console.log(`skill_job_2: `, skill_job_2);
            console.log(`score_skill_job_2: `, score_skill_job_2);
            console.log(`skill_job_3: `, skill_job_3);
            console.log(`score_skill_job_3: `, score_skill_job_3);
            console.log(`obj_job_1: `, obj_job_1);
            console.log(`obj_job_2: `, obj_job_2);
            console.log(`obj_job_3: `, obj_job_3);
        }
        else if (choose_function == 1) {
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
            list_obj = [];
            list_score_job = [];
            job_nm = [name_job];
            list_obj.append(obj_job_1);
            list_obj.append(obj_job_2);
            list_obj.append(obj_job_3);
            list_score_job.append(score_skill_job_1.toFixed(2));
            list_score_job.append(score_skill_job_2.toFixed(2));
            list_score_job.append(score_skill_job_3.toFixed(2));
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
    });

});

/*----remove job----*/
/*$('#del-job').click(function () {
    $("#no-2").remove();
});*/

/*--- textarea obj ----*/

$(document).ready(function () {
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
});
