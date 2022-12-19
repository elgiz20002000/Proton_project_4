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
const size_checkbox = document.querySelectorAll('.sizes input')
const color_checkbox = document.querySelectorAll('.colors input')
const sizes = document.querySelectorAll('.sizes .size')
const minus = document.querySelector('.counts .minus')
const plus = document.querySelector('.counts .plus')
const count = document.querySelector('.counts .count')



size_checkbox.forEach((input_item , index_checkbox) => {
  input_item.addEventListener('click' , () => {
    size_checkbox.forEach((item , index) => {
      if(index !=index_checkbox) {
        item.checked = false
      }
    })
    sizes.forEach((item) => {
      item.classList.remove('selected')
  })
    sizes[index_checkbox].classList.add('selected')
  })
})

color_checkbox.forEach((input_item , index_checkbox) => {
  input_item.addEventListener('click' , () => {

    colors.forEach(item => item.classList.remove('selected'))
    colors[index_checkbox].classList.add('selected')
    color_checkbox.forEach((item , index) => {
      if(index !=index_checkbox) {
        item.checked = false
      }
    })
    colors.forEach((item) => {
      item.classList.remove('selected')
  })
    colors[index_checkbox].classList.add('selected')
  })
})

plus.addEventListener('click' , () => {
  count.value = +count.value + 1
})

minus.addEventListener('click' , () => {
  if(+count.textContent - 1 != 0) {
    count.value = +count.value - 1
  }
})