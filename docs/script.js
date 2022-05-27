function viewChange() {
  if (document.getElementById("mode-list")) {
    var id = document.getElementById("mode-list").value;
    var elements = Array.from(
      document.getElementsByClassName("setting-content")
    );
    elements.forEach(function (element) {
      if(element.id == id + "-content") {
        element.style.display = "block";
      } else if(element.id != id + "-content") {
        element.style.display = "none";
      }
    });
  }
  window.onload = viewChange;
}

function setSmallTitle() {
  var elements = Array.from(document.getElementsByClassName("small-title"));
  elements.forEach(function(element) {
    console.log(String(Number(element.getAttribute('size')) * 10) + "px")
    element.style.fontSize = String(Number(element.getAttribute('size')) * 10) + "px";
  });
}

setSmallTitle();