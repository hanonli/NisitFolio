
$(document).ready(function(){
  console.log('script for registab3 loaded')
});

let startYear3 = 1970;
let endYear3 = new Date().getFullYear();
for (i = endYear3; i > startYear3; i--) {
  $('#year_higher').append($('<option />').val(i).html(i));
  $('#year_secondary').append($('<option />').val(i).html(i));
  $('#year_startjob').append($('<option />').val(i).html(i));
  $('#year_endjob').append($('<option />').val(i).html(i));
}

/*$('handleHigherSubmit').on('click',function() {
  $("#registab3Modal1").modal("hide");

});

$('handleSecondaryubmit').on('click',function() {
  $("#registab3Modal2").modal("hide");
});
*/
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
                          <div class="row">\
                              <div class="col-3 font-titlet3">{degree_aca}</div>\
                              <div class="col-4 font-titlet3">{field_aca}</div>\
                              <div class="col-5 font-titlet3">{faculty_aca}</div>\
                          </div>\
                          <div class="row">\
                              <div class="col-3 font-titlet3">{year_aca}</div>\
                              <div class="col-4 font-titlet3">เกรด {grade_aca}</div>\
                              <div class="col-5 font-titlet3">{name_aca}</div>\
                          </div>';

      var grid_aca2 = `
                          <div class="layer_icon1" id={no-list-aca}>\
                             <button type="button" class="btn button1" id="edit-aca"><img src="assets/images/blackedit.png" width="27" height="27"></img></button>\
                             <button type="button" class="btn button2" id="del-aca"><img src="assets/images/bin.png" width="30" height="30"></img></button>\
                          </div>\
                      </div>`;
      grid_aca2 = grid_aca2.replace("{no-list-aca}", ele["id"]);
      grid_aca1 = grid_aca1.replace("{no_aca}", ele["aca_pos"]);
      grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
      grid_aca1 = grid_aca1.replace("{degree_aca}", ele["aca_degree"]);
      //grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
      grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
      //grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
      if(ele["aca_grade"]=="0.00"){
        grid_aca1 = grid_aca1.replace("{grade_aca}", '-');
      }
      else{
        grid_aca1 = grid_aca1.replace("{grade_aca}", ele["aca_grade"]);
      }
      if(ele["aca_field"]=="none"){
        grid_aca1 = grid_aca1.replace("{field_aca}", '-');
      }
      else{
        grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
      }
      if(ele["aca_year"]=="0"){
        grid_aca1 = grid_aca1.replace("{year_aca}", '-');
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
var for_editaca;
$(document).on("click", "#edit-aca", function () {
  $("#aca_name").removeClass("is-invalid");
  $("#aca_degree").removeClass("is-invalid");
  $("#aca_faculty").removeClass("is-invalid");
  id_list_aca_edit = $(this).parents().attr('id');
  console.log(`edit:`, id_list_aca_edit);
  choose_function3 = 1;
  $('#registab3Modal1').modal('toggle');
  $('#submit-aca').text('ยืนยัน');
  console.log(`choose: ${choose_function3}`);
  for_editaca = list_of_aca.find(function (post, index_del) {
      if (post.id == id_list_aca_edit){
        //console.log("Wow!!");
        return true;
      }
  });
  console.log(`for_editaca:`, for_editaca);
  $("#aca_name").val(for_editaca["aca_name"]);
  $("#aca_faculty").val(for_editaca["aca_faculty"]);
  if(for_editaca["aca_field"]=='none'){
    $("#aca_field").val('');
  }
  else{
    $("#aca_field").val(for_editaca["aca_field"]);
  }
  if(for_editaca["aca_grade"]=='0.00'){
    $("#aca_grade").val('');
  }
  else{
    $("#aca_grade").val(for_editaca["aca_grade"]);
  }
  document.getElementById("aca_degree").selectedIndex = for_editaca["aca_degree_select"];
  document.getElementById("year_secondary").selectedIndex = for_editaca["aca_year_select"];
});


$(document).on("click", "#del-aca", function () {
  id_list_aca_del = $(this).parents().attr('id');
  console.log("id_list_aca111:", id_list_aca_del);
  $('#Modal_remove_aca').modal('toggle');
});

$(document).on('click', "#sub_del_aca", function () {
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
});


$(document).on('hide.bs.modal', "#registab3Modal1", function () {
  $('#aca_degree').prop('selectedIndex', 0);
  $('#aca_name').val('');
  $('#aca_faculty').val('');
  $('#aca_field').val('');
  $('#aca_grade').val('');
  //$('#aca_name').attr("placeholder", "สถานศีกษา*").placeholder();
  //$('#aca_faculty').attr("placeholder", "คณะ").placeholder();
  //$('aca_field').attr("placeholder", "สาขาวิชา*").placeholder();
  //$('#aca_grade').attr("placeholder", "เกรดเฉลี่ยสะสม").placeholder();
  $('#year_secondary').prop('selectedIndex', 0);
});

$(document).on('click', "#can_aca_del", function () {
  $('#Modal_remove_aca').modal('hide');
});

$(document).on("change", "#aca_degree", function () {
  if (document.getElementById("aca_degree").selectedIndex != 0) {
      $("#aca_degree").removeClass("is-invalid");
  }
});

document.getElementById("submit-aca").addEventListener("click", function () {
  name_aca = document.getElementById("aca_name").value;
  degree_aca = document.getElementById("aca_degree").value;
  faculty_aca = document.getElementById("aca_faculty").value;
  field_aca = document.getElementById("aca_field").value;
  grade_aca = document.getElementById("aca_grade").value;
  year_aca = document.getElementById("year_secondary").value;
  $('#submit_aca').text = 'ยืนยัน';
  if (document.getElementById("aca_name").value == '') {
      //alert("submit aca wrong!");
      $("#aca_name").addClass("is-invalid");
  }
  if (document.getElementById("aca_degree").value == 'none') {
    //alert("submit aca wrong!");
    $("#aca_degree").addClass("is-invalid");
  }
  if (document.getElementById("aca_faculty").value == '') {
    //alert("submit aca wrong!");
    $("#aca_faculty").addClass("is-invalid");
  }
  else {
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
      show_all_aca()
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
      var grid_high1 = '<div class="t3-content2 row">\
                          <div class="col mg-left1per">\
                              <div class="row font-titlet3">{degree_high}</div>\
                              <div class="row font-titlet3">{year_high}</div>\
                          </div>\
                          <div class="col">\
                              <div class="row font-titlet3">{field_high}</div>\
                              <div class="row font-titlet3">เกรด {grade_high}</div>\
                          </div>\
                          <div class="col">\
                              <div class="row font-titlet3">{name_high}</div>\
                          </div>';

      var grid_high2 = `
                          <div class="layer_icon1" id={no-list-high}>\
                             <button type="button" class="btn button1" id="edit-high"><img src="assets/images/blackedit.png" width="27" height="27"></img></button>\
                             <button type="button" class="btn button2" id="del-high"><img src="assets/images/bin.png" width="30" height="30"></img></button>\
                          </div>\
                      </div>`;
      grid_high2 = grid_high2.replace("{no-list-high}", ele["id"]);
      grid_high1 = grid_high1.replace("{no_high}", ele["high_pos"]);
      grid_high1 = grid_high1.replace("{name_high}", ele["high_name"]);
      grid_high1 = grid_high1.replace("{degree_high}", ele["high_degree"]);
      if(ele["high_grade"]=="0.00"){
        grid_high1 = grid_high1.replace("{grade_high}", '-');
      }
      else{
        grid_high1 = grid_high1.replace("{grade_high}", ele["high_grade"]);
      }
      if(ele["high_field"]=="none"){
        grid_high1 = grid_high1.replace("{field_high}", '-');
      }
      else{
        grid_high1 = grid_high1.replace("{field_high}", ele["high_field"]);
      }
      if(ele["high_year"]=="0"){
        grid_high1 = grid_high1.replace("{year_high}", '-');
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
  $("#high_name").removeClass("is-invalid");
  $("#high_degree").removeClass("is-invalid");
  choose_function3_2 = 2;
  $('#registab3Modal2').modal('toggle');
  $('#high_degree').prop('selectedIndex', 0);
  $('#year_higher').prop('selectedIndex', 0);
  $('#high_name').val('');
  $('#high_field').val('');
  $('#high_grade').val('');
});

//func edit high
var for_edithigh;
$(document).on("click", "#edit-high", function () {
  $("#high_name").removeClass("is-invalid");
  $("#high_degree").removeClass("is-invalid");
  $("#high_faculty").removeClass("is-invalid");
  id_list_high_edit = $(this).parents().attr('id');
  console.log(`edit:`, id_list_high_edit);
  choose_function3_2 = 1;
  $('#registab3Modal2').modal('toggle');
  $('#submit-high').text('ยืนยัน');
  console.log(`choose: ${choose_function3_2}`);
  for_edithigh = list_of_high.find(function (post, index_del) {
      if (post.id == id_list_high_edit){
        //console.log("Wow!!");
        return true;
      }
  });
  console.log(`for_edithigh:`, for_edithigh);
  $("#high_name").val(for_edithigh["high_name"]);
  if(for_edithigh["high_field"]=='none'){
    $("#high_field").val('');
  }
  else{
    $("#high_field").val(for_edithigh["high_field"]);
  }
  if(for_edithigh["high_grade"]=='0.00'){
    $("#high_grade").val('');
  }
  else{
    $("#high_grade").val(for_edithigh["high_grade"]);
  }
  document.getElementById("high_degree").selectedIndex = for_edithigh["high_degree_select"];
  document.getElementById("year_higher").selectedIndex = for_edithigh["high_year_select"];
});


$(document).on("click", "#del-high", function () {
  id_list_high_del = $(this).parents().attr('id');
  console.log("id_list_high112:", id_list_high_del);
  $('#Modal_remove_high').modal('toggle');
});

$(document).on('click', "#sub_del_high", function () {
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
});


$(document).on('hide.bs.modal', "#registab3Modal2", function () {
  $('#high_degree').prop('selectedIndex', 0);
  $('#high_name').val('');
  $('#high_field').val('');
  $('#high_grade').val('');
  $('#year_higher').prop('selectedIndex', 0);
});

$(document).on('click', "#can_high_del", function () {
  $('#Modal_remove_high').modal('hide');
});

$(document).on("change", "#high_degree", function () {
  if (document.getElementById("high_degree").selectedIndex != 0) {
      $("#high_degree").removeClass("is-invalid");
  }
});

document.getElementById("submit-high").addEventListener("click", function () {
  name_high = document.getElementById("high_name").value;
  degree_high = document.getElementById("high_degree").value;
  field_high = document.getElementById("high_field").value;
  grade_high = document.getElementById("high_grade").value;
  year_high = document.getElementById("year_secondary").value;
  $('#submit_high').text = 'ยืนยัน';
  //console.log('high_name : '+ $("#high_name").val());
  if (document.getElementById("high_name").value == "") {
      //alert("submit high wrong!");
      $("#high_name").addClass("is-invalid");
  }
  else if (document.getElementById("high_degree").value == 'none') {
    //alert("submit high wrong!");
    $("#high_degree").addClass("is-invalid");
  }
  else {
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
              high_year: parseInt(year_high),
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
      show_all_high()
  }
});


