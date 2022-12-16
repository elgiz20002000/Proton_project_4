import { top_nav } from './top_nav.js';
import { btns } from './btns.js';
import { myBtn } from './button.js';


  top_nav()
  btns()
  myBtn()
$('.slider').slick({
    arrows:true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });


  var itemsCount = 300;
  var itemsOnPage = 10;

  var pagination1 = new Pagination({
      container: document.getElementById("pagination-1")
  });
  pagination1.make(itemsCount, itemsOnPage);









