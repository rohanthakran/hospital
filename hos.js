function drop(){
    var x = document.getElementById("nav");
    if(x.className === "topnav"){
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    }
}

let slideImage = document.querySelectorAll('.slide'), 
            arrowLeft = document.querySelector('#arrow-left'),
             arrowRight = document.querySelector('#arrow-right'),
            current = 0;

            carousel();

            function carousel() {
            var i, slideIndex;
  
            for (i = 0; i < slideImage.length; i++) {
            slideImage[i].style.display = "none";
           }
              current++;
             if (current > slideImage.length) {current= 1}
             slideImage[current-1].style.display = "block";
             setTimeout(carousel, 3500); // Change image every 2 seconds
        }

            function reset(){
            for(let i =0; i<slideImage.length; i++){
               slideImage[i].style.display= 'none';
            }
          }

          function startSlide(){
            reset();
            slideImage[0].style.display = 'block';

          }

          function slideLeft(){
              reset();
              slideImage[current -1].style.display= 'block';
              current--;
          }

          function slideRight(){
              reset();
              slideImage[current+1].style.display = "block";
              current++;
          }

          //leftclick

          arrowLeft.addEventListener('click', function(){
              if(current ===0 ){
                  current = slideImage.length;

              }
              slideLeft();
          })

          arrowRight.addEventListener('click', function(){
              if(current === slideImage.length-1 ){
                  current = -1;

              }
              slideRight();
          })
          startSlide();
