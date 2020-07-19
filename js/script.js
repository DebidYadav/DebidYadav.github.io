(function (global) {

var dc = {};

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var cprightYear = function (selector) {
  var today = new Date();
  var year = today.getFullYear();
  
  var msg = "<div class='cpright text-center'> Copyright &copy; " + year + " Debid Yadav </div>";
  insertHtml (selector, msg);
};

//~~~~~~~~~~~~EVENT THAT WILL LOAD THE HOME PAGE ~~~~~~~~~~~~~~~~~~//
// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

cprightYear("#copyright");
});

global.$dc = dc;

})(window);