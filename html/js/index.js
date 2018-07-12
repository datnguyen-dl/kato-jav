// menu
function menu() {
  if (document.querySelectorAll('.ka-menu')[0]) {
    var mActive = /ka-active/g;
    for (var i = 0; i < document.querySelectorAll('.ka-menu')[0].childNodes.length; i++) {

      if (document.querySelectorAll('.ka-menu')[0].childNodes[i]) {
        document.querySelectorAll('.ka-menu')[0].childNodes[i].addEventListener("click", function () {
          if(this.className.match(mActive)){
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