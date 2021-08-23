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
var value1, value2, value3;

document.getElementById("customRange11").oninput = function () {
    value1 = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #f0a143 0%, #f0a143 ' + value1 + '%, #c4c4c4 ' + value1 + '%, #c4c4c4 100%)';
    console.log(`skill1: ` + value1);
};

document.getElementById("customRange12").oninput = function () {
    value2 = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #0fe17c 0%, #0fe17c ' + value2 + '%, #c4c4c4 ' + value2 + '%, #c4c4c4 100%)';
    console.log(`skill2: ` + value2);
};

document.getElementById("customRange13").oninput = function () {
    value3 = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #c98a11 0%, #c98a11 ' + value3 + '%, #c4c4c4 ' + value3 + '%, #c4c4c4 100%)';
    console.log(`skill3: ` + value3);
};
