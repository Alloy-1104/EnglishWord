function viewChange() {
  if (document.getElementById("mode-list")) {
    var id = document.getElementById("mode-list").value;
    var elements = Array.from(
      document.getElementsByClassName("setting_content")
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
