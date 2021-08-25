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
        console.log(`skill1: ` + value1 / 10);
    };

    document.getElementById("customRange12").oninput = function () {
        value2 = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + value2 + '%, #c4c4c4 ' + value2 + '%, #c4c4c4 100%)';
        console.log(`skill2: ` + value2 / 10);
    };

    document.getElementById("customRange13").oninput = function () {
        value3 = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + value3 + '%, #c4c4c4 ' + value3 + '%, #c4c4c4 100%)';
        console.log(`skill3: ` + value3 / 10);
    };
});

/*----disable slider range----*/
$(document).ready(function () {
    document.getElementById("customRange11").disabled = true;
    document.getElementById("customRange12").disabled = true;
    document.getElementById("customRange13").disabled = true;

    document.getElementById("each_skill1").addEventListener("click", function () {
        var skill_job_1 = document.getElementById("each_skill1").value;
        console.log(`click skill_job_1: `, skill_job_1);
        if (skill_job_1 != null || skill_job_1 == 'เลือกทักษะของคุณที่เหมาะกับงาน') document.getElementById("customRange11").disabled = false;
    });

    document.getElementById("each_skill2").addEventListener("click", function () {
        var skill_job_2 = document.getElementById("each_skill2").value;
        console.log(`click skill_job_2: `, skill_job_2);
        if (skill_job_2 != null || skill_job_2 == 'เลือกทักษะของคุณที่เหมาะกับงาน') document.getElementById("customRange12").disabled = false;
    });

    document.getElementById("each_skill3").addEventListener("click", function () {
        var skill_job_3 = document.getElementById("each_skill3").value;
        console.log(`click skill_job_3: `, skill_job_3);
        if (skill_job_3 != null || skill_job_3 == 'เลือกทักษะของคุณที่เหมาะกับงาน') document.getElementById("customRange13").disabled = false;
    });
});



/*----submit for add job----*/

document.getElementById("submit-job").addEventListener("click", function () {
    console.log('Oh nha hee');
    var name_job, skill_job_1, score_skill_job_1, skill_job_2, score_skill_job_2, skill_job_3, score_skill_job_3, obj_job_1, obj_job_2, obj_job_3;
    name_job = document.getElementById("nm_job").value;
    skill_job_1 = document.getElementById("each_skill1").value;
    score_skill_job_1 = document.getElementById("customRange11").value;
    //score_skill_job_1 = value1;
    skill_job_2 = document.getElementById("each_skill2").value;
    score_skill_job_2 = document.getElementById("customRange12").value;
    //score_skill_job_2 = value2;
    skill_job_3 = document.getElementById("each_skill3").value;
    score_skill_job_3 = document.getElementById("customRange13").value;
    //score_skill_job_3 = value3;
    obj_job_1 = document.getElementById("obj-job-01").value;
    obj_job_2 = document.getElementById("obj-job-02").value;
    obj_job_3 = document.getElementById("obj-job-03").value;
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
});

/*----submit for edit job----*/

document.getElementById("edit-job").addEventListener("click", function () {
    console.log('Oh nha hee');
    var name_job, skill_job_1, score_skill_job_1, skill_job_2, score_skill_job_2, skill_job_3, score_skill_job_3, obj_job_1, obj_job_2, obj_job_3;
    name_job = document.getElementById("nm_job").value;
    skill_job_1 = document.getElementById("each_skill1").value;
    score_skill_job_1 = document.getElementById("customRange11").value;
    //score_skill_job_1 = value1;
    skill_job_2 = document.getElementById("each_skill2").value;
    score_skill_job_2 = document.getElementById("customRange12").value;
    //score_skill_job_2 = value2;
    skill_job_3 = document.getElementById("each_skill3").value;
    score_skill_job_3 = document.getElementById("customRange13").value;
    //score_skill_job_3 = value3;
    obj_job_1 = document.getElementById("obj-job-01").value;
    obj_job_2 = document.getElementById("obj-job-02").value;
    obj_job_3 = document.getElementById("obj-job-03").value;
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
});

/*----remove job----*/
$('#del-job').click(function () {
    $("#no-2").remove();
});