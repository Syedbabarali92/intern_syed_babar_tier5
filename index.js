var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var btn = document.createElement("BUTTON");
    span.className = "close";
    btn.className = "btn1";
    btn.innerHTML = "REMOVE";
    span.appendChild(btn);
    myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


function getInputValue() {
    var li = document.createElement("li");
    var inputVal = document.getElementById("myInput").value;
    var t = document.createTextNode(inputVal);
    li.append(t);
    if (inputVal === "") {
        alert("Please Enter the student name before you submit");
    }
    else {
        document.getElementById("students_name").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var btn = document.createElement("BUTTON");
    span.className = "close";
    btn.className = "btn1";
    btn.innerHTML = "REMOVE";
    span.appendChild(btn);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}