//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

function firstToLoad() {
  document.getElementsByClassName("dropDownTextArea")[0].style.display = "none";
  document.getElementsByClassName("dropDownTextArea")[1].style.display = "none";
  document.getElementsByClassName("dropDownTextArea")[2].style.display = "none";
}

var i = 0;

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");

var img = document.createElement("IMG");
var br = document.createElement("br");
var br1 = document.createElement("br");

/*****dropdown after clicking on img */
img.setAttribute("src", "down.png");
img.setAttribute("width", "25");
img.id = "img1";
img.onclick = function () {
  expandrownew(img);
};

var checkboxx = document.createElement("INPUT");
checkboxx.type = "checkbox";
checkboxx.className = "check";

function expandrownew(i) {
  var x = document.getElementById("dropdown");

  if (
    document.getElementsByClassName("dropDownTextArea")[i].style.display ==
    "none"
  ) {
    document.getElementsByClassName("dropDownTextArea")[i].style.display = "";
  } else
    document.getElementsByClassName("dropDownTextArea")[i].style.display =
      "none";
}
/***Expanding rows after adding student called from newStudent */
function expandnewrows(i) {
  var mtable = document.getElementById("myTable");
  var newrow = i.parentElement.parentElement; 
  var imgRowindex = newrow.rowIndex;
  var reqindex = imgRowindex + 1;
  var reqrow = mtable.rows[reqindex];

  if (reqrow.cells[0].style.display == "none") {
    reqrow.cells[0].style.display = "";
  } else {
    reqrow.cells[0].style.display = "none";
  }
}

function toggleDeleteEditColumns() {
  var table = document.getElementById("myTable");
  var rowCount = 0;

  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];
    if (row.style.display !== "none") {
      rowCount++;
    }
  }

  if (rowCount <= 4) {
    document.getElementById("delCol").style.display = "none";
    document.getElementById("editCol").style.display = "none";
  } else {
    document.getElementById("delCol").style.display = "table-cell";
    document.getElementById("editCol").style.display = "table-cell";
  }
}

function newStudentadd() {
  var table = document.getElementById("myTable");
  var newRow = table.insertRow(-1);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);

  alert(`Adding Student` + Math.floor(table.rows.length / 2) + ` Record!`);
  cell2.innerHTML = "Student " + Math.floor(table.rows.length / 2);
  cell3.innerHTML = "Teacher " + Math.floor(table.rows.length / 2);
  cell4.innerHTML = "Approved";
  cell5.innerHTML = "Fall";
  cell6.innerHTML = "TA";
  cell7.innerHTML = "12345";
  cell8.innerHTML = "100%";

  var checkboxx1 = document.createElement("INPUT");
  checkboxx1.type = "checkbox";
  checkboxx1.className = "check";
  var br = document.createElement("br");
  var br1 = document.createElement("br");
  checkboxx1.onclick = "checkBoxToggle(this)";
  var imgs = document.createElement("IMG");

  imgs.id = "img1";
  imgs.setAttribute("src", "down.png");
  imgs.setAttribute("width", "25px");

  cell1.appendChild(checkboxx1);
  cell1.appendChild(br);
  cell1.appendChild(br1);
  cell1.appendChild(imgs);

 
  var drpDwn_Ind = newRow.rowIndex; 
  var drpDwn_Row = table.insertRow(drpDwn_Ind + 1); 
  var cell = drpDwn_Row.insertCell(0); 
  cell.setAttribute("colspan", 8);
  drpDwn_Row.setAttribute("class", "dropDownTextArea");
  cell.innerHTML =
    "Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />";
  cell.style.display = "none";

  var row01 = checkboxx1.parentElement.parentElement;
  row01.id = i;
  checkboxx1.onclick = function () {
    checkBoxToggle(this);
  };
  i++;

  imgs.onclick = function () {
    expandnewrows(imgs);
  };

  var studentId = table.rows.length;

  if (studentId == 0) {
    document.getElementById("delCol").style.display = "none";
  }

  toggleDeleteEditColumns();
}

function deleteStudentrow(deleteBtn) {
  var table = document.getElementById("myTable");
  var row = deleteBtn.parentElement.parentElement;
  var studentName = row.cells[1].textContent;

  if (confirm(`Are you sure, you want to delete ${studentName} `) == true) {
    var submitButton = document.querySelector("#button");
    var table01 = document.getElementById("myTable");
    var cRow = deleteBtn.parentElement.parentElement;
    var chkboxes01 = document.querySelectorAll(".check");

    var cRowindex = cRow.rowIndex;
    var reqDropRow = table01.rows[cRowindex + 1];
    reqDropRow.style.display = "none";

    table01.deleteRow(cRow.rowIndex);

    if (chkboxes01.checked) {
      submitButton.style.backgroundColor = "orange";
      document.getElementById("button").disabled = false;
    } else {
      submitButton.style.backgroundColor = "";
      document.getElementById("button").disabled = true;
    }

    alert(`${studentName} deleted!!`);
  }

  toggleDeleteEditColumns();
}

function editStudentDetails(editBtn) {
  var row = editBtn.parentElement.parentElement;
  var studentName = row.cells[1].textContent;
  var advisorName = row.cells[2].textContent; 
  var awardsStatus = row.cells[3].textContent;
  var semester = row.cells[4].textContent;
  var type = row.cells[5].textContent; 
  var budget = row.cells[6].textContent;
  var percentage = row.cells[7].textContent;
  
  var modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
        <span class="close" onclick="closeEditModal()">&times;</span>
        <h2>Edit details of ${studentName}</h2>
        <p>Student Name: ${studentName}</p>
        <p>Advisor : ${advisorName}</p>
        <p>Advisor : ${awardsStatus}</p>
        <p>Semester: ${semester}</p>
        <p>Type : ${type}</p>
        <p>Budget : ${budget}</p>
        <p>Percentage : ${percentage}</p>

        <button onclick="updateStudent('${studentName}')">Update</button>
        <button onclick="ClosePopUp()">Close</button>
    </div>
  `;

  document.body.appendChild(modal);
  modal.style.display = "block";
  toggleDeleteEditColumns();
}

function updateStudent(studentName) {
  alert(`${studentName} data updated successfully`);

  
  ClosePopUp();
}

function ClosePopUp() {
  var modal = document.querySelector(".modal");
  if (modal) {
    modal.style.display = "none";
    modal.remove();
  }
}

function checkBoxToggle(c) {
  

  var checkbox02 = document.querySelectorAll(".check");
  var cRow01 = c.parentElement.parentElement;
  var submitBtn02 = document.getElementById("button");
  var checks = document.querySelectorAll(".check:checked");
  var r = document.getElementById(cRow01.id);
  
  [].forEach.call(checkbox02, function (eventlistener) {
    document.getElementById("button").disabled = false; // enable the button
    eventlistener.addEventListener("change", function () {
      var checkedd = document.querySelectorAll(".check:checked");
      if (checkedd.length) {
        submitBtn02.style.backgroundColor = "orange";
      } else {
        submitBtn02.style.backgroundColor = "grey";
        document.getElementById("button").disabled = true;
      }
    });
  });
  if (c.checked) {
    document.getElementById("editCol").style.display = "table-cell";
    document.getElementById("delCol").style.display = "table-cell";

    document.getElementById(cRow01.id).bgColor = "yellow";
    var cel8 = r.insertCell(8);
    cel8.innerHTML =
      "<input type='button' id='deletebutton' onclick=deleteStudentrow(this) value='Delete'>";
    var cel9 = r.insertCell(9);
    cel9.innerHTML =
      "<input type='button' id='editbutton' onclick=editStudentDetails(this) value='Edit'>";
  } else {
    document.getElementById("editCol").style.display = "none";
    document.getElementById("delCol").style.display = "none";
    console.log("Checkbox is not checked..");
    document.getElementById(cRow01.id).bgColor = "white";
    submitBtn02.style.background = "gray";

    r.deleteCell(9);
    r.deleteCell(8);
  }
}


