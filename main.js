console.log(document.getElementById("buyBtn"));
window.onload = function(){
  var myBtn = document.getElementById("buyBtn")
  var shoppingcart = document.getElementById("shoppingcart")
  var counter = 0;
  myBtn.onclick = function() {
    counter = counter + 1
    myBtn.style.backgroundColor = "rgba(255, 255, 255, 0)";
    myBtn.style.color = "white";
    myBtn.style.border = "white 2px solid";
    myBtn.innerHTML = "ADDED TO CART!";
    shoppingcart.innerHTML = counter;
    setTimeout(function () {
    myBtn.innerHTML = "BUY NOW"
    myBtn.style.backgroundColor = "white"
    myBtn.style.color = "#FF573B";
    }, 2000);
  }
  }
var mytopics = document.getElementById("topics")
var mycontainer = document.getElementById("container-3")
mycontainer.onclick = function() {


}
