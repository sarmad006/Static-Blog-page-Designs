//bootstrap jquery for contact form
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

    
    // jquery for blog section for showing category wise media
    
    $(document).ready(function(){
      var image1=document.getElementById('img1')
      var image2=document.getElementById('img2')
      var image3=document.getElementById('img3')
      var image4=document.getElementById('img4')
      var image5=document.getElementById('img5')
      var image6=document.getElementById('img6')
      $("a.design,a.Graphics").click(function(){
      
        image1.style.visibility='visible';
        image2.style.visibility='visible';
        image3.style.visibility='hidden';
        image4.style.visibility='hidden';
        image5.style.visibility='hidden';
        image6.style.visibility='hidden';
      });
      $("a.media").click(function(){
      
        image1.style.visibility='hidden';
        image2.style.visibility='visible';
        image3.style.visibility='visible';
        image4.style.visibility='hidden';
        image5.style.visibility='hidden';
        image6.style.visibility='hidden';
      });
      $("a.web").click(function(){
      
        image1.style.visibility='visible';
        image2.style.visibility='hidden';
        image3.style.visibility='visible';
        image4.style.visibility='hidden';
        image5.style.visibility='hidden';
        image6.style.visibility='hidden';
      });
      $("a.All").click(function(){
      
        image1.style.visibility='visible';
        image2.style.visibility='visible';
        image3.style.visibility='visible';
        image4.style.visibility='visible';
        image5.style.visibility='visible';
        image6.style.visibility='visible';
      });
    });
    //white background color for scrolling
    $(function () {
      $(document).scroll(function () {
        var $nav = $("nav.fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });
    //active linking jquery
   $(document).on('click',' ul li',function()
   {
     
     $(this).addClass('active');
     $(this).siblings('li').removeClass('active');
   })
   
    //back to top button scrolling
   window.onscroll = function() {scrollFunction()};
function scrollFunction(){
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
document.getElementById("btnscroll").style.display = "block";
} else {
document.getElementById("btnscroll").style.display = "none";
}
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }

  $(document).ready(function(){

  
  var video = document.getElementById("background");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 2000);
});
});
$(document).ready(function(){
$( ".category-divisor .fa-thumbs-up" ).click(function() {
  $(".fa-thumbs-up" ).toggleClass( "hide" );

});
});
$(document).ready(function(){

  AOS.init({
    duration:3000
  })
  });
  $(document).ready(function(){
    var scroll = new SmoothScroll('a[href*="#"]',{
      speed:1200
    });
  })