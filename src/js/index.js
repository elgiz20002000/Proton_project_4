import {btns} from './btns.js'
import { myBtn } from './button.js';
import { top_nav } from './top_nav.js';


top_nav()
myBtn()
$(window).load(function() {    
    $('.sp-wrap').smoothproducts();
  });

  $('.slider').slick({
    arrows:false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  btns()


const colors = document.querySelectorAll('.colors .color')
const sizes = document.querySelectorAll('.sizes .size')
const minus = document.querySelector('.counts .minus')
const plus = document.querySelector('.counts .plus')
const count = document.querySelector('.counts .count')

colors.forEach(item => {
  item.addEventListener('click' , () => {
    colors.forEach(item => item.classList.remove('selected'))
    item.classList.add('selected')
  })
})

sizes.forEach(item => {
  item.addEventListener('click' , () => {
    sizes.forEach(item => item.classList.remove('selected'))
    item.classList.add('selected')
  })
})

plus.addEventListener('click' , () => {
  count.textContent = +count.textContent + 1
})

minus.addEventListener('click' , () => {
  if(+count.textContent - 1 != 0) {
    count.textContent = +count.textContent - 1
  }
})

