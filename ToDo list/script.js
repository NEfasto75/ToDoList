//=====Create Items=====
function addLi() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("select").value;
    let testo = document.createTextNode(inputValue);
    li.appendChild(testo);
    if (inputValue === '') {
      alert("Insert a new task");
    } else {
      document.getElementById("listOfDuty").appendChild(li);
    }
    document.getElementById("select").value = "";
    let span = document.createElement("SPAN");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//=====Append Remove Item=====
 objectlist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < objectlist.length; i++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  objectlist[i].appendChild(span);
}
//=====Remove Items=====
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
