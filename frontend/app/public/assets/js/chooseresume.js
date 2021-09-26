/*Fetch for all*/
$(function(){
    
}
/*Tab1*/
  let startYear3 = 1970;
  let endYear3 = new Date().getFullYear();
  for (i = endYear3; i > startYear3; i--) {
    $('#year_higher').append($('<option />').val(i).html(i));
    $('#year_secondary').append($('<option />').val(i).html(i));
    $('#year_startwork').append($('<option />').val(i).html(i));
    $('#year_endwork').append($('<option />').val(i).html(i));
  }
  
  var list_of_aca = [];
  
  function get_aca_id(list_of_aca, x) {
    //var x = 1;
    list_of_aca.forEach(ele => {
        ele["aca_pos"] = x;
        console.log("x:", x);
        x++;
    });
    return list_of_aca;
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
  
  var choose_function3 = -1; //default
  
  function show_all_aca() {
  
    list_of_aca.forEach(ele => {
        var grid_aca1 = '<div class="t3-content1 row">\
                            <div class="col-3">\
                                <div class="font-titlet3_1 font-boldt3">{degree_aca}</div>\
                                <div class="font-titlet3_1 font-khotboldt3">{year_aca}</div>\
                            </div>\
                            <div class="col-9">\
                                <div class="font-titlet3_1">{field_aca}</div>\
                                <div class="font-titlet3_1">{faculty_aca}</div>\
                                <div class="font-titlet3_1">{name_aca}</div>\
                                <div class="font-titlet3_1">เกรด {grade_aca}</div>\
                            </div>';
  
        var grid_aca2 = `
                            <div class="layer_icon1" id={no-list-aca}>\
                               <button type="button" class="btn button1 centerverify" id="check-aca"><img src="assets/images/check_black.png" width="27" height="27"></img></button>\
                            </div>\
                        </div>`;
        grid_aca2 = grid_aca2.replace("{no-list-aca}", ele["id"]);
        grid_aca1 = grid_aca1.replace("{no_aca}", ele["aca_pos"]);
        //grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
        grid_aca1 = grid_aca1.replace("{degree_aca}", ele["aca_degree"]);
        //grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
        //grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
        //grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
        // if (ele["aca_name"].length > 38) {
        //   grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"].slice(0, 38) + "...");
        // }
        // else {
        //   grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
        // }
        grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
        // if (ele["aca_faculty"].length > 38) {
        //   grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"].slice(0, 38) + "...");
        // }
        // else {
        //   grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
        // }
        grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
        if(ele["aca_grade"]=="0.00"){
          grid_aca1 = grid_aca1.replace("{grade_aca}", '-');
        }
        else{
          grid_aca1 = grid_aca1.replace("{grade_aca}", ele["aca_grade"]);
        }
        if(ele["aca_field"]=="none"){
          grid_aca1 = grid_aca1.replace("{field_aca}", '-');
        }
        /*else if(ele["aca_field"].length > 38){
          grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"].slice(0, 38) + "...");
        }*/
        else{
          grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
        }
        if(ele["aca_year"]=="0"){
          grid_aca1 = grid_aca1.replace("{year_aca}", '-');
        }
        else if(ele["aca_year"]=="9999"){
          grid_aca1 = grid_aca1.replace("{year_aca}", 'กำลังศึกษา');
        }
        else{
          grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
        }
        $(".list-of-aca").append(grid_aca1 + grid_aca2);
        console.log(`list_of_aca:`, list_of_aca);
    });
  }
  $(document).ready(function () {
    show_all_aca();
  });
  
  //func add new aca form
  $(document).on("click", "#add_aca", function () {
    $("#aca_name").removeClass("is-invalid");
    $("#aca_degree").removeClass("is-invalid");
    $("#aca_faculty").removeClass("is-invalid");
    choose_function3 = 2;
    $('#registab3Modal1').modal('toggle');
    $('#aca_degree').prop('selectedIndex', 0);
    $('#year_secondary').prop('selectedIndex', 0);
    $('#aca_name').val('');
    $('#aca_faculty').val('');
    $('#aca_field').val('');
    $('#aca_grade').val('');
    //$('#aca_name').attr("placeholder", "สถานศีกษา*").placeholder();
    //$('#aca_faculty').attr("placeholder", "คณะ").placeholder();
    //$('aca_field').attr("placeholder", "สาขาวิชา*").placeholder();
    //$('#aca_grade').attr("placeholder", "X.XX").placeholder();
  });
  
  //func edit aca
  
  $(document).on("click", "#del-aca", function () {
    id_list_aca_del = $(this).parents().attr('id');
    console.log("id_list_aca111:", id_list_aca_del);
    $('#Modal_remove_aca').modal('toggle');
  });
  
  $(document).on('click', "#check_aca", function () {
    var removeIndexA = list_of_aca.findIndex(function (post, index_del) {
        if (post.id == id_list_aca_del)
            return true;
    });
    console.log("id_list_aca:", id_list_aca_del);
    list_of_aca.splice(removeIndexA, 1);
    console.log(`delete aca id:`, removeIndexA);
    $('#Modal_remove_aca').modal('hide');
    $(".list-of-aca").empty();
    console.log(list_of_aca);
    get_aca_id(list_of_aca, 1);
    show_all_aca()
    if (list_of_aca.length != 3) {
      $('#aca_danger').text('ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน');
      $('#aca_danger').removeClass('red_markEp1');
      $('.icon-plus-circleA').show();
  }
  });
  
  document.getElementById("submit-aca").addEventListener("click", function () {
    $("#aca_name").removeClass("is-invalid");
    $("#aca_degree").removeClass("is-invalid");
    $("#aca_faculty").removeClass("is-invalid");
    name_aca = document.getElementById("aca_name").value;
    degree_aca = document.getElementById("aca_degree").value;
    faculty_aca = document.getElementById("aca_faculty").value;
    field_aca = document.getElementById("aca_field").value;
    grade_aca = document.getElementById("aca_grade").value;
    year_aca = document.getElementById("year_secondary").value;
    $('#submit_aca').text = 'ยืนยัน';
    var checkcase1 = true;
    if (document.getElementById("aca_name").value == '') {
        //alert("submit aca wrong!");
        $("#aca_name").addClass("is-invalid");
        checkcase1 = false;
    }
    if (document.getElementById("aca_degree").value == '') {
      //alert("submit aca wrong!");
      $("#aca_degree").addClass("is-invalid");
      checkcase1 = false;
    }
    if (document.getElementById("aca_faculty").value == '') {
      //alert("submit aca wrong!");
      $("#aca_faculty").addClass("is-invalid");
      checkcase1 = false;
    }
    if(checkcase1) {
        if (field_aca == '') {
            field_aca = 'none';
        }
        if (grade_aca == '') {
            grade_aca = 0;
        }
        if (year_aca == '') {
            year_aca = 0;
        }
        if (choose_function3 == 1) { //edit aca after add
            console.log("edit!!!!!!");
            for_editaca["aca_name"] = name_aca;
            for_editaca["aca_degree_select"] = $("#aca_degree").prop('selectedIndex');
            for_editaca["aca_year_select"] = $("#year_secondary").prop('selectedIndex');
            for_editaca["aca_faculty"] = faculty_aca;
            for_editaca["aca_degree"] = degree_aca;
            for_editaca["aca_grade"] = parseFloat(grade_aca).toFixed(2);
            for_editaca["aca_field"] = field_aca;
            for_editaca["year_secondary"] = parseInt(year_aca);
        }
        else if (choose_function3 == 2) { //add aca in list
            list_of_aca.push({
                id: create_UUID(),
                aca_pos: 0,
                aca_name: name_aca,
                aca_faculty: faculty_aca,
                aca_degree: degree_aca,
                aca_degree_select: $("#aca_degree").prop('selectedIndex'),
                aca_year: parseInt(year_aca),
                aca_year_select: $("#year_secondary").prop('selectedIndex'),
                aca_grade: parseFloat(grade_aca).toFixed(2),
                aca_field: field_aca,
                aca_year: parseInt(year_aca),
            });
            get_aca_id(list_of_aca, 1);
            console.log(list_of_aca);
        }
        $('#aca_degree').prop('selectedIndex', 0);
        $("#year_secondary").prop('selectedIndex', 0);
        $('#aca_name').val('');
        $('#aca_faculty').val('');
        $('#aca_field').val('');
        $('#aca_grade').val('');
        //$('#aca_name').attr("placeholder", "สถานศีกษา*").placeholder();
        //$('#aca_faculty').attr("placeholder", "คณะ").placeholder();
        //$('aca_field').attr("placeholder", "สาขาวิชา*").placeholder();
        //$('#aca_grade').attr("placeholder", "เกรดเฉลี่ยสะสม").placeholder();
        //$("#pos-del-obj-button1").hide();
        $('#registab3Modal1').modal('hide');
        $(".list-of-aca").empty();
        list_of_aca.sort(function (x, y) {
          return  y.aca_year - x.aca_year;
        });
        show_all_aca()
        if (list_of_aca.length == 3) {
          $('#aca_danger').text('*ท่านเพิ่มประวัติการศึกษาครบจำนวนแล้ว');
          $('#aca_danger').addClass('red_markEp1');
          $('.icon-plus-circleA').hide();
      }
    }
  });
  
  
  
  //For Higher
  
  var list_of_high = [];
  
  function get_high_id(list_of_high, x) {
    //var x = 1;
    list_of_high.forEach(ele => {
        ele["high_pos"] = x;
        console.log("x:", x);
        x++;
    });
    return list_of_high;
  }
  
  var choose_function3_2 = -1; //default
  
  function show_all_high() {
  
    list_of_high.forEach(ele => {
        var grid_high1 = '<div class="t3-content1 row">\
                            <div class="col-4">\
                                <div class="font-titlet3_2 font-boldt3">{degree_high}</div>\
                                <div class="font-titlet3_2 font-khotboldt3">{year_high}</div>\
                            </div>\
                            <div class="col-8">\
                                <div class="font-titlet3_2">{field_high}</div>\
                                <div class="font-titlet3_2">{name_high}</div>\
                                <div class="font-titlet3_2">เกรด {grade_high}</div>\
                            </div>';
  
        var grid_high2 = `
                            <div class="layer_icon1" id={no-list-high}>\
                               <button type="button" class="btn button1" id="check-high"><img src="assets/images/check_black.png" width="27" height="27"></img></button>\
                            </div>\
                        </div>`;
        grid_high2 = grid_high2.replace("{no-list-high}", ele["id"]);
        grid_high1 = grid_high1.replace("{no_high}", ele["high_pos"]);
        grid_high1 = grid_high1.replace("{degree_high}", ele["high_degree"]);  
        grid_high1 = grid_high1.replace("{name_high}", ele["high_name"]);
        if(ele["high_grade"]=="0.00"){
          grid_high1 = grid_high1.replace("{grade_high}", '-');
        }
        else{
          grid_high1 = grid_high1.replace("{grade_high}", ele["high_grade"]);
        }
        if(ele["high_field"]=="none"){
          grid_high1 = grid_high1.replace("{field_high}", '-');
        }
        grid_high1 = grid_high1.replace("{field_high}", ele["high_field"]);
        if(ele["high_year"]=="0"){
          grid_high1 = grid_high1.replace("{year_high}", '-');
        }
        else if(ele["high_year"]=="9999"){
          grid_aca1 = grid_aca1.replace("{year_high}", 'กำลังศึกษา');
        }
        else{
          grid_high1 = grid_high1.replace("{year_high}", ele["high_year"]);
        }
        $(".list-of-high").append(grid_high1 + grid_high2);
        console.log(`list_of_high:`, list_of_high);
    });
  }
  $(document).ready(function () {
    show_all_high();
  });
  
  //func add new high form
  $(document).on("click", "#add_high", function () {
    $("#high_degree").removeClass("is-invalid");
    $("#high_name").removeClass("is-invalid");
    choose_function3_2 = 2;
    $('#registab3Modal2').modal('toggle');
    $('#high_degree').prop('selectedIndex', 0);
    $('#year_higher').prop('selectedIndex', 0);
    $('#high_name').val('');
    $('#high_field').val('');
    $('#high_grade').val('');
  });
  
  $(document).on('click', "#check_high", function () {
    var removeIndexA = list_of_high.findIndex(function (post, index_del) {
        if (post.id == id_list_high_del)
            return true;
    });
    console.log("id_list_high:", id_list_high_del);
    list_of_high.splice(removeIndexA, 1);
    console.log(`delete high id:`, removeIndexA);
    $('#Modal_remove_high').modal('hide');
    $(".list-of-high").empty();
    console.log(list_of_high);
    get_high_id(list_of_high, 1);
    show_all_high()
    if (list_of_high.length != 3) {
      $('#high_danger').text('ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน');
      $('#high_danger').removeClass('red_markEp1');
      $('.icon-plus-circleH').show();
  }
  });
  
  document.getElementById("submit-high").addEventListener("click", function () {
    name_high = document.getElementById("high_name").value;
    degree_high = document.getElementById("high_degree").value;
    field_high = document.getElementById("high_field").value;
    grade_high = document.getElementById("high_grade").value;
    year_high = document.getElementById("year_higher").value;
    $('#submit_high').text = 'ยืนยัน';
    var checkformT3 = true;
    //console.log('high_name : '+ $("#high_name").val());
    if (document.getElementById("high_name").value == "") {
        //alert("submit high wrong!");
        $("#high_name").addClass("is-invalid");
        checkformT3 = false;
    }
    if (document.getElementById("high_degree").value == '') {
      //alert("submit high wrong!");
      $("#high_degree").addClass("is-invalid");
      checkformT3 = false;
    }
    if(checkformT3) {
        if (field_high == '') {
            field_high = 'none';
        }
        if (grade_high == '') {
            grade_high = 0;
        }
        if (year_high == '') {
            year_high = 0;
        }
        if (choose_function3_2 == 1) { //edit high after add
            console.log("edit!!!!!!");
            for_edithigh["high_name"] = name_high;
            for_edithigh["high_degree_select"] = $("#high_degree").prop('selectedIndex');
            for_edithigh["high_year_select"] = $("#year_higher").prop('selectedIndex');
            for_edithigh["high_degree"] = degree_high;
            for_edithigh["high_grade"] = parseFloat(grade_high).toFixed(2);
            for_edithigh["high_field"] = field_high;
            for_edithigh["year_higher"] = parseInt(year_high);
        }
        else if (choose_function3_2 == 2) { //add high in list
            list_of_high.push({
                id: create_UUID(),
                high_pos: 0,
                high_name: name_high,
                high_faculty: 'none',
                high_degree: degree_high,
                high_degree_select: $("#high_degree").prop('selectedIndex'),
                high_year_select: $("#year_higher").prop('selectedIndex'),
                high_grade: parseFloat(grade_high).toFixed(2),
                high_field: field_high,
                high_year: parseInt(year_high),
            });
            get_high_id(list_of_high, 1);
            console.log(list_of_high);
        }
        $('#high_degree').prop('selectedIndex', 0);
        $("#year_higher").prop('selectedIndex', 0);
        $('#high_name').val('');
        $('#high_field').val('');
        $('#high_grade').val('');
        $('#registab3Modal2').modal('hide');
        $(".list-of-high").empty();
        list_of_high.sort(function (x, y) {
          return  y.high_year - x.high_year;
        });
        //console.table(list_of_high);
        show_all_high()
        if (list_of_high.length == 3) {
          $('#high_danger').text('*ท่านเพิ่มประวัติการศึกษาครบจำนวนแล้ว');
          $('#high_danger').addClass('red_markEp1');
          $('.icon-plus-circleH').hide();
      }
    }
  });
  
  
  