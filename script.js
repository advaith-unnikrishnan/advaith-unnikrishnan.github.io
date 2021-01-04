function myFunction() {
    var x = document.querySelector(".nav-buttons")
    if (x.className === "links") {
      x.className += "responsive";
    } else {
      x.className = "nav-buttons";
    }
  }