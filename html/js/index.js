// menu
function menu() {
  if (document.querySelectorAll('.ka-menu')[0]) {
    var mActive = /ka-active/g;
    for (var i = 0; i < document.querySelectorAll('.ka-menu')[0].childNodes.length; i++) {

      if (document.querySelectorAll('.ka-menu')[0].childNodes[i]) {
        document.querySelectorAll('.ka-menu')[0].childNodes[i].addEventListener("click", function () {
          if (this.className.match(mActive)) {
            this.classList.remove('ka-active');
            this.parentElement.parentElement.classList.remove("ka-active");
            return;
          }
          this.classList.add("ka-active");
          this.parentElement.parentElement.classList.add("ka-active");

          if (this.querySelectorAll('.ka-popup')[0]) {

            // this.querySelectorAll('.ka-popup')[0].addEventListener("click", function(){
            //   console.log(this);

            // });
            document.body.addEventListener("click", function (e) {
              // console.log(e)
              // if(this.className === "ka-popup"){
              //   alert("this")
              // }
            });
          }
        });
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", menu);

// SCROLL =================================================
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// shiw menu when scroll
function openScrollMenu() {
  var bSlider = document.querySelectorAll(".ks-slider")[0].getBoundingClientRect().bottom;
  console.log("AAAA", bSlider);
  if (bSlider <= 0 ) {
    document.querySelectorAll("nav")[0].classList.add("ka-active");
  }else{
    document.querySelectorAll("nav")[0].classList.remove("ka-active");
  }

}



window.addEventListener("DOMContentLoaded", openScrollMenu);
window.addEventListener("scroll", openScrollMenu);