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
  var ageval = document.getElementById("age").value;

  if (ageval >= 18 && ageval <= 65) {
    alert("age not correct");
    return;
  }

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
  btnupd.className = "btn btn-danger";
  btnupd.value = "update";
  btnupd.onclick = update_row;
  data.appendChild(btnupd);
  action.appendChild(btnupd);

  var btndel = document.createElement("input");
  btndel.type = "button";
  btndel.className = "btn btn-dark";
  btndel.value = "Delete";
  btndel.onclick = delete_row;
  data.appendChild(btndel);
  action.appendChild(btndel);
}

function delete_row() {
  document
    .getElementById("table")
    .deleteRow(this.parentNode.parentNode.rowIndex);
  console.log("row deleted");
}

function reset_table() {
  console.log("reset");
  $("#table td").remove();
}

function update_row() {
  console.log("update row");
  $("#update").removeClass("disabled");
  $("#add").addClass("disabled");
}
