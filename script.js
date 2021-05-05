window.onload = function () {
  var addBtn = document.getElementById("add");
  addBtn.onclick = handleAdd;
  var resetBtn = document.getElementById("reset");
  resetBtn.onclick = reset_table;
  //   var updbtn = document.getElementById("update");
  //   updbtn.onclick = update_row;
};

function handleAdd() {
  var table = document.getElementById("table");

  // Validations;
  var val = document.getElementById("name").value;
  if (!val.match(/^[a-zA-Z]+$/)) {
    alert("Only Alphabets Allowed");
    return false;
  }

  var ageval = $("#age").val();
  if (ageval <= 10 || ageval >= 50) {
    alert("Age not correct");
    return;
  }

  var selval = $("#city").val();
  if (selval == "") {
    alert("Select City");
    return;
  }

  //Insert DATA
  var data = table.insertRow(-1);
  var name = data.insertCell(0);
  var gender = data.insertCell(1);
  var age = data.insertCell(2);
  var city = data.insertCell(3);
  var action = data.insertCell(4);

  name.innerHTML = $("#name").val();
  gender.innerHTML = $("input[type='radio'][name='gender']:checked").val();
  age.innerHTML = $("#age").val();
  city.innerHTML = $("#city option:selected").val();

  var btnupd = document.createElement("input");
  btnupd.type = "button";
  btnupd.className = "btn btn-danger btnupdate";
  btnupd.value = "update";
  btnupd.onclick = update_row;
  data.appendChild(btnupd);
  action.appendChild(btnupd);

  var btndel = document.createElement("input");
  btndel.type = "button";
  btndel.className = "btn btn-dark btndelete";
  btndel.value = "Delete";
  btndel.onclick = delete_row;
  data.appendChild(btndel);
  action.appendChild(btndel);

  return false;
}

function delete_row() {
  document
    .getElementById("table")
    .deleteRow(this.parentNode.parentNode.rowIndex);
  console.log("row deleted");
}

function reset_table() {
  $('.form input[type="text"]').val("");
  $('.form input[type="number"]').val("");
  // $('.form input[type="radio"]').val("");
  $(".form select").val("");
  console.log("reset");
  return false;
  // $("#table td").remove();
}

function update_row() {
  console.log("update row");

  $("#updateMain").removeClass("disabled");
  $("#add").prop("disabled", true);

  //code for updating row
  // var rowId = event.target.parentNode.parentNode.id;
  //this gives id of tr whose button was clicked
  // var data = document.getElementById(rowId).querySelectorAll(".row-data");
  /*returns array of all elements with 
"row-data" class within the row with given id*/

  // var name = data[0].innerHTML;
  // var age = data[1].innerHTML;

  // alert("Name: " + name + "\nAge: " + age);

  $("#add").prop("disabled", false);
  return false;
}
