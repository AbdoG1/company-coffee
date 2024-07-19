
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import '@popperjs/core';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';




document.getElementById('date').appendChild(document.createTextNode(new Date().getFullYear()));

$(document).ready(function() { 
	$(".nav-link").click(function(event) { 
     	var $this = $(this);
     	$(".nav-link").removeClass("active");  
      	$this.removeClass('active');
      	 $($this).addClass("active"); 
 });
});

$(function () {
  $(".add-btn").click(function () {
      alert("تمت الاضافة الى عربة الشراء");
  });
});


(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();