import {btns} from './btns.js'
import { top_nav } from './top_nav.js';
import { myBtn } from './button.js';

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
  
  myBtn()
  btns()



const counter = document.querySelectorAll('.counter')
const item_total_price = document.querySelectorAll('tbody tr .total_price span' )
const currentPrice = document.querySelectorAll('tbody .price span')
const total_price = document.querySelector('.extra_info .total_price span')
const sale = document.querySelector('.extra_info .sale span')
const deliever = document.querySelector('.extra_info .deliever span')
const total_with_sales = document.querySelector('.extra_info .total_with_sales span')


top_nav()

document.querySelectorAll('tbody tr').forEach(item => {
    item.addEventListener('click' , (e) => {
        const target = e.target
        if(target.getAttribute('alt') && target.getAttribute('alt') == 'delete' ) {
            item.remove()
            total_price_f()
        }
    })
})





const total_price_f = () => {
    total_price.textContent = '0'
    total_with_sales.textContent = '0'
    document.querySelectorAll('tbody tr .total_price span' ).forEach((total_item , index) => {
        total_price.textContent = +total_price.textContent + +total_item.textContent
    })
    total_with_sales.textContent = +total_price.textContent +  +deliever.textContent - sale.textContent
}



total_price_f()

counter.forEach((item , index) => {
    item.addEventListener('click' , (e) => {      
        let target = e.target
        const count = item.querySelector('.count')
            if(target.classList.contains('plus')) {
                count.textContent = +count.textContent +  1
                item_total_price[index].textContent=(currentPrice[index].textContent * count.textContent).toFixed(2)

               total_price_f()
                
            }
            if(target.classList.contains('minus')) {
                 total_price.textContent = '0'
                if(+count.textContent - 1 !== 0) {
                    count.textContent = +count.textContent -  1

                    item_total_price[index].textContent=(currentPrice[index].textContent * count.textContent).toFixed(2)

                   total_price_f()
                   
                }
            }
    })
})
