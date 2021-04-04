//--------------бургер--------------
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
burger.onclick = function () {
   menu.classList.toggle("active");
   burger.classList.toggle("active");
   document.body.classList.toggle("lock");
};
//----------------------------------
//------------выпадашка-------------
let dropBtn = document.querySelector(".header__nav-dropdown, .header__dropdown-arrow");
let dropContent = document.querySelector(".header__nav-dropdown-on");
dropBtn.onclick = function () {
   dropContent.classList.toggle("show");
};
window.onclick = function (event) {
   if (!event.target.matches(".header__nav-dropdown, .header__dropdown-arrow")) {
      let dropContent = document.querySelectorAll(".header__nav-dropdown-on");
      let i;
      for (i = 0; i < dropContent.length; i++) {
         let openDrop = dropContent[i];
         if (openDrop.classList.contains("show")) {
            openDrop.classList.remove("show");
         }
      }
   }
};
//---------------------------------
//-----------слайдер---------------
let slides = document.querySelectorAll(".slide"),
prev = document.querySelector(".slide__prev-img");
next = document.querySelector(".slide__next-img");
dots = document.querySelectorAll(".slider__dot");
let index = 0;
let activeSlide = (n) => {
   for (slide of slides) {
      slide.classList.remove("active");
   }
   slides[n].classList.add("active");
};
let activeDot = (n) => {
   for (dot of dots) {
      dot.classList.remove("active");
   }
   dots[n].classList.add("active");
};
let prepareCurrentSlide = (ind) => {
   activeSlide(ind);
   activeDot(ind);
};
let nxtSlide = () => {
   if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
   } else {
      index++;
      prepareCurrentSlide(index);
   }
};
let prevSlide = () => {
   if (index == 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
   } else {
      index--;
      prepareCurrentSlide(index);
   }
};
dots.forEach((item, indexDot) => {
   item.addEventListener("click", () => {
      index = indexDot;
      prepareCurrentSlide(index);
      clearInterval(interval);
   });
});
next.addEventListener("click", nxtSlide);
prev.addEventListener("click", prevSlide);
const interval = setInterval(nxtSlide, 3000);
//--------------------------------------
//-------------корзина------------------
let cart = {};


function init() {
   $.getJSON("goods.json", goodsOut );
}

function goodsOut(data) {
   let out = '';
   for (let key in data) {
      if (key < 51 && (window.location.pathname == '/dom_halvy/index.php' || window.location.pathname == '/dom_halvy/')) {
         out += '<div class="catalog__item">';
         out += '<div class="catalog__img">';
         out += `<img class="catalog__img-item" src="${data[key].img}">`;
         out += '</div>';
         out += '<div class="catalog__description-wrap">';
         out += `<div class="catalog__name">${data[key]['name']}</div>`;
         out += `<div class="catalog__description">${data[key]['description']}</div>`;
         out += '</div>';
         out += '<div class="catalog__weight-wrap">';
         out += `<button data-id="${key}" class="catalog__weight active">${data[key]['weight'][1]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][2]} гр</button>`;
         out += `<button data-id="${key}" class="catalog__weight">${data[key]['weight'][3]} гр</button>`;
         out += '</div>';
         out += '<div class="catalog__price-btn-buy-wrap">';
         out += `<div class="catalog__price">${data[key]['cost'][1]} &#8381;</div>`;
         out += `<button data-id="${key}" class="catalog__btn-buy">купить</button>`;
         out += '</div>';
         out += '</div>';
      }
      if (key > 50 && key < 101 && window.location.pathname == '/dom_halvy/baklava.php') {
         out += '<div class="catalog__item">';
         out += '<div class="catalog__img">';
         out += `<img class="catalog__img-item" src="${data[key].img}">`;
         out += '</div>';
         out += '<div class="catalog__description-wrap">';
         out += `<div class="catalog__name">${data[key]['name']}</div>`;
         out += `<div class="catalog__description">${data[key]['description']}</div>`;
         out += `<div class="catalog__weight">вес: ${data[key]['weight']}</div>`;
         out += '</div>';
         out += '<div class="catalog__btn-wrap">';
         out += `<div class="catalog__price">${data[key]['cost']} &#8381;</div>`;
         out += `<button data-id="${key}" class="catalog__btn">купить</button>`;
         out += '</div>';
         out += '</div>';
      }
      if (key > 100 && key < 151 && window.location.pathname == '/dom_halvy/lukum.php') {
         out += '<div class="catalog__item">';
         out += '<div class="catalog__img">';
         out += `<img class="catalog__img-item" src="${data[key].img}">`;
         out += '</div>';
         out += `<div class="catalog__name">${data[key]['name']}</div>`;
         out += `<div class="catalog__description">${data[key]['description']}</div>`;
         out += `<div class="catalog__weight">${data[key]['weight']}`;
         out += `<div class="catalog__price">${data[key]['cost']} &#8381;</div>`;
         out += '</div>';
         out += '<div class="catalog__btn-wrap">';
         out += `<button data-id="${key}" class="catalog__btn">купить</button>`;
         out += '</div>';
         out += '</div>';
      }
      if (key > 150 && key < 201 && window.location.pathname == '/dom_halvy/chocolate.php') {
         out += '<div class="catalog__item">';
         out += '<div class="catalog__img">';
         out += `<img class="catalog__img-item" src="${data[key].img}">`;
         out += '</div>';
         out += `<div class="catalog__name">${data[key]['name']}</div>`;
         out += `<div class="catalog__description">${data[key]['description']}</div>`;
         out += `<div class="catalog__weight">${data[key]['weight']}`;
         out += `<div class="catalog__price">${data[key]['cost']} &#8381;</div>`;
         out += '</div>';
         out += '<div class="catalog__btn-wrap">';
         out += `<button data-id="${key}" class="catalog__btn">купить</button>`;
         out += '</div>';
         out += '</div>';
      }
   }
   $('.catalog').html(out);
   $('.catalog__btn-buy').on('click', addToCart);

   // function test() {
   //    let weight = document.querySelectorAll('.catalog__weight');
   //    for (let i = 0; i < weight.length; i++) {
   //       weight[i].addEventListener('click', function (e) {
   //        e.target.closest('.catalog__weight-wrap').querySelectorAll('button').style.background = 'red';
   //       });
   //    }
   // }
   // test();

   function test() {
      let weight = document.querySelectorAll(".catalog__weight");
    
      for (let i = 0; i < weight.length; i++) {
        weight[i].addEventListener("click", function (e) {
          const weightWrap = weight[i].closest(".catalog__weight-wrap");
          const buttonList = weightWrap.querySelectorAll("button");
    
          buttonList.forEach((button) => (button.classList.remove('active')));
          e.target.classList.add('active');
          let price = e.target.parentElement.nextElementSibling.firstElementChild;
         let id = $(this).attr('data-id');
         if (buttonList[0].classList.contains('active')){
            price.innerHTML = `${data[id]['cost'][1]} &#8381`;
         }
         if (buttonList[1].classList.contains('active')){
            price.innerHTML = `${data[id]['cost'][2]} &#8381`;
         }
         if (buttonList[2].classList.contains('active')){
            price.innerHTML = `${data[id]['cost'][3]} &#8381`;
         }
        });
      }
    }
    test();
 
}


function addToCart() {
   let id = $(this).attr('data-id');
   console.log(buttonList);
   if (cart[id] == undefined) {
      cart[id]  = 1; // если в корзине нет товара - делаем равным 1 
   }
   else {
      cart[id]++; // если такой товар есть - увеличиваю на 1
   }

   saveCart();
   amount(cart);
}

function saveCart() {
   // сохраняю корзину в LocalStorage
   localStorage.setItem('cart', JSON.stringify(cart)); // корзину в строку 
}

function amount(cart) {
   let sum = 0;
   for (let key of Object.values(cart)) {
      sum += key;
   }
   let out = '';
   if (sum != 0) {
      out += sum;
      $('.amount').html(out);
   }

}

function loadCart() {
   // проверя. есть ли в localStorage запись cart
   if (localStorage.getItem('cart')) {
      // если есть - расшифровываю и записываю в переменную cart
      cart = JSON.parse(localStorage.getItem('cart'));  
   }
}

$(document).ready(function () {
   init();
   loadCart();
   amount(cart);
});
