console.log("Hello Witkop Guest Farm!");
/////////////////////////    Accommodation Carousel Logic    ///////////////////////////////
// select dom elements
const leftArrowAccomm = document.querySelector('.carouselAccommLeftArrow');
const rightArrowAccomm = document.querySelector('.carouselAccommRightArrow');
const indexAccomm = document.querySelectorAll('.carouselAccommIndex');
const imageAccomm = document.querySelectorAll('.carouselAccommImage');
// initialise counter for index
let carouselIndexNumber = 0;
// create eventlistener for right arrow btn
rightArrowAccomm.addEventListener('click', function(){
  carouselIndexNumber++;
  if(carouselIndexNumber !== indexAccomm.length) {
    // change color of index
    indexAccomm[carouselIndexNumber].style.backgroundColor = '#8a6a42ff';
    indexAccomm[carouselIndexNumber - 1].style.backgroundColor = 'transparent';
    // hide prev image
    imageAccomm[carouselIndexNumber-1].style.opacity = '0';
    setTimeout(function() {
      imageAccomm[carouselIndexNumber-1].classList.toggle('carouselAccomm__displayNone');
    }, 1200)
    // show next image
    setTimeout(function() {
      imageAccomm[carouselIndexNumber].style.opacity = '0'
      imageAccomm[carouselIndexNumber].classList.toggle('carouselAccomm__displayNone');
      setTimeout(function() {
        imageAccomm[carouselIndexNumber].style.opacity = '1'
      }, 50)
    },1200);
  } else {
    // change color of index
    carouselIndexNumber = 0;
    indexAccomm[carouselIndexNumber].style.backgroundColor = '#8a6a42ff';
    indexAccomm[indexAccomm.length -1].style.backgroundColor = 'transparent';
    // hide prev image
    imageAccomm[indexAccomm.length -1].style.opacity = '0';
    setTimeout(function() {
      imageAccomm[indexAccomm.length -1].classList.toggle('carouselAccomm__displayNone');
    }, 1200)
    // show next image
    setTimeout(function() {
      imageAccomm[carouselIndexNumber].style.opacity = '0'
      imageAccomm[carouselIndexNumber].classList.toggle('carouselAccomm__displayNone');
      setTimeout(function() {
        imageAccomm[carouselIndexNumber].style.opacity = '1'
      }, 50)
    },1200);
  }
});
// create eventlistener for left arrow btn
leftArrowAccomm.addEventListener('click', function(){
  carouselIndexNumber--;
  if(carouselIndexNumber !== -1) {
    // change color of index
    indexAccomm[carouselIndexNumber].style.backgroundColor = '#8a6a42ff';
    indexAccomm[carouselIndexNumber + 1].style.backgroundColor = 'transparent';
    // hide prev image
    imageAccomm[carouselIndexNumber + 1].style.opacity = '0';
    setTimeout(function() {
      imageAccomm[carouselIndexNumber + 1].classList.toggle('carouselAccomm__displayNone');
    }, 1200)
    // show next image
    setTimeout(function() {
      imageAccomm[carouselIndexNumber].style.opacity = '0'
      imageAccomm[carouselIndexNumber].classList.toggle('carouselAccomm__displayNone');
      setTimeout(function() {
        imageAccomm[carouselIndexNumber].style.opacity = '1'
      }, 50)
    },1200);
  } else {
    // change color of index
    carouselIndexNumber = indexAccomm.length - 1;
    indexAccomm[carouselIndexNumber].style.backgroundColor = '#8a6a42ff';
    indexAccomm[0].style.backgroundColor = 'transparent';
    // hide prev image
    imageAccomm[0].style.opacity = '0';
    setTimeout(function() {
      imageAccomm[0].classList.toggle('carouselAccomm__displayNone');
    }, 1200)
    // show next image
    setTimeout(function() {
      imageAccomm[carouselIndexNumber].style.opacity = '0'
      imageAccomm[carouselIndexNumber].classList.toggle('carouselAccomm__displayNone');
      setTimeout(function() {
        imageAccomm[carouselIndexNumber].style.opacity = '1'
      }, 50)
    },1200);
  }
});
