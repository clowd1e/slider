const prev = document.querySelector('#btn-prev'),
      next = document.querySelector('#btn-next'),
      dots = document.querySelectorAll('.dot'),
      slides = document.querySelectorAll('.slide')
let index = 0

const prepareCurrentSlide = ind => {
    activeSlide(index)
    activeDot(index)
}
const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}
const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}
const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0
        prepareCurrentSlide(index)
    } else {
        index++
        prepareCurrentSlide(index)
    }
}
const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1
        prepareCurrentSlide(index)
    } else {
        index--
        prepareCurrentSlide(index)
    }
}
const timer = setInterval(() => {
    if(index == slides.length - 1){
        index = 0
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
  }, 2000);

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index)
    })
})