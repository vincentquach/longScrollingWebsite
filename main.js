var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;

counter.innerHTML = "counter text";

// when the user scrolls then do something
// window.onsroll is a boolean
window.onscroll = function () {
  fromTop = window.pageYOffset;
  console.log(fromTop);

// counter is the var counter. style is open the stylesheet. top is changing to top
  counter.style.top = 100 + fromTop + "px";

  if (fromTop > 1000) {
    counter.innerHTML = "more than 1000";
  } else {
    counter.innerHTML = "counter text";
  }
}
