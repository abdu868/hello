var title = document.getElementById("title");
title.onclick = function () {
  console.log("*********************");
  alert(this.innerHTML);
}
console.log(title);