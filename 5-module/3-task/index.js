function initCarousel() {

  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel__inner');
  let carouselCount = carousel.children.length;
  let carouselOffset = carousel.offsetWidth;
  let translation = 0;

  arrowLeft.style.display = 'none';
  
  arrowRight.addEventListener('click', () => {
    
    translation += carouselOffset;
    carousel.style.transform = 'translateX(' + (-translation) + 'px)'

    if(translation === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }

    if(translation === carouselOffset*(carouselCount-1)) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  });

  arrowLeft.addEventListener('click', () => {

    translation -= carouselOffset;
    carousel.style.transform = 'translateX(' + (-translation) + 'px)'
    
    if(translation === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }

    if(translation === carouselOffset*(carouselCount-1)) {
      arrowRight.style.display = 'none'
    } else {
      arrowRight.style.display = '';
    }
  });
}