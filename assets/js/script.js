console.log('Hello there, you curious person you. Welcome to my site!');

var navHtml = "<ul class=\"main-nav\">\
  <li class=\"nav-logo\"><a href=\"#\"><img src=\"assets/images/brand/LHNameTitle.png\" alt=\"Linde Huang Logo\"></a></li>\
  <li class=\"nav-link push-right\"><a href=\"#\">Work</a></li>\
  <li class=\"nav-link\"><a href=\"#\">Writing</a></li>\
  <li class=\"nav-link\"><a href=\"#\">About</a></li>\
</ul>";

console.log(navHtml);

document.getElementById("nav-placeholder").innerHTML = navHtml;
