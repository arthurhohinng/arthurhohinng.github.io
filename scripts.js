function hide(){
  document.querySelector("#main").style.display = "none";
  document.querySelector("#about").style.display = "none";
}

function openSidebar(){
  document.querySelector("#sidebar").classList.toggle('active');
  document.querySelector("#main").classList.toggle('active');
  document.querySelector("#about").classList.toggle('active');
}

function showHome(){
  hide();
  document.querySelector("#main").style.display = "block";
}

function showAbout(){
  hide();
  document.querySelector("#about").style.display = "block";
}

