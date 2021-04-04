let cart = {};

function loadCart() {
   // проверя. есть ли в localStorage запись cart
   if (localStorage.getItem('cart')) {
      // если есть - расшифровываю и записываю в переменную cart
      cart = JSON.parse(localStorage.getItem('cart'));
         showCart();
      }
   else {
      $('.cart').html('корзина пуста!');
   }

   function showCart() {
      // вывод корзины
      if (!isEmpty(cart)) {
         $('.cart').html('корзина пуста!');
      }
      else {
      $.getJSON('goods.json', function(data) {
         let goods = data;
         let out = '';
         for (let id in cart) {
            out += `<button data-id="${id}" class="del-goods">X</button>`;
            out += `<img class="cart-img" src="${goods[id].img}">`;
            out += ` ${goods[id].name  }`;
            out += `  <button data-id="${id}" class="minus-goods">-</button>  `;
            out += ` ${cart[id] }`;
            out += `  <button data-id="${id}" class="plus-goods">+</button>  `;
            out += cart[id]*goods[id].cost;
            out += '<br>';
         }
         $('.cart').html(out);
         $('.del-goods').on('click', delGoods);
         $('.plus-goods').on('click', plusGoods);
         $('.minus-goods').on('click', minusGoods);
      });
   }
   }

   function delGoods() {
      // удаляем товар из корзины
      let id = $(this).attr('data-id');
      delete cart[id];
      saveCart();
      showCart();
   }

   function plusGoods() {
      // добавляем товар в корзине
      let id = $(this).attr('data-id');
      cart[id]++;
      saveCart();
      showCart();
   }

   function minusGoods() {
      // уменьшает товар в корзине
      let id = $(this).attr('data-id');
      if (cart[id] == 1) {
         delete cart[id];
      }
      else {
         cart[id]--;
      }
      
      saveCart();
      showCart();
   }

   function saveCart() {
      // сохраняю корзину в LocalStorage
      localStorage.setItem('cart', JSON.stringify(cart)); // корзину в строку 
   }


}

function isEmpty(object) {
   // проверка корзины на пустоту
   for (let key in object)
   if (object.hasOwnProperty(key)) return true;
   return false;
}

function sendEmail() {
   let ename = $('#ename').val();
   let email = $('#email').val();
   let ephone = $('#ephone').val();
   if (ename != '' && email != '' && ephone != '') {
      if (isEmpty(cart)) {
         $.post(
            "core/mail.php",
            {
               "ename" : ename,
               "email" : email,
               "ephone" : ephone,
               "cart" : cart
            },
            function(data) {
               if (data == 1) {
                  alert('заказ отправлен');
               }
               else {
                  alert('повторите заказ');
               }
            }
         )
      }
      else {
         alert('корзина пуста');
      }
   }
   else {
      alert('заполните поля');
   }
}

$(document).ready(function() {
   loadCart();
   $('.send-email').on('click', sendEmail); // отправить письмо с заказом 
});