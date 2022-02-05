$(document).ready(function () {

  $( ".btn" ).click(function() {
    console.log("ive been clicked");
  });
  function openTab(evt, defaultOpen) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(defaultOpen).style.display = "block";
    evt.currentTarget.className += " active";
    /*
    let text = "LinkedIn";
    let result = text.link("https://www.linkedin.com/in/issabella-d-736848229/");
    document.getElementById("LinkedIn").innerHTML = result;
    
    let text2 = "Instagram";
    let result2 = text2.link("https://www.instagram.com/heinoushrew/");
    document.getElementById("Instagram").innerHTML = result2;
    */
  }
})