import {btns} from './btns.js';
import { myBtn } from './button.js';
import { top_nav } from './top_nav.js';


top_nav()
myBtn()
btns()


const controls = document.querySelectorAll('.control')
const inputs = document.querySelectorAll('.info')
const control_2 =  document.querySelector('.control_2')

controls.forEach((control , index) => {
    const items = control.querySelectorAll('.item')
    items.forEach((item) => {
        item.addEventListener('click' , () => {
            control.querySelectorAll('.item').forEach(item => item.classList.remove('active'))
            if(item.classList.contains('show')) {
                if(index == 0) {
                    item.classList.add('active')
                    inputs[index].style.display = 'block'
                    control_2.style.display = 'block'
                } else {
                    item.classList.add('active')
                    inputs[index].style.display = 'block'
                }
                
            } else {
                if(index == 0) {
                    item.classList.add('active')
                    inputs[index].style.display = 'none'
                    control_2.style.display = 'none'
                } else {
                    item.classList.add('active')
                    inputs[index].style.display = 'none'
                }
                
                
            }
        })
    })
  })