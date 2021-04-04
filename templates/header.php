<!DOCTYPE html>
<html lang="ru">
   <head>
      <meta charset="UTF-8" />
      <meta
         name="viewport"
         content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
         />
      <title>ДомХалвы</title>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="css/reset.css" />
      <link rel="stylesheet" href="css/style.css" />
   </head>
   <body>
      <div class="page">
      <header class="header">
         <div class="container header__container">
            <ul class="header__menu">
               <li class="header__menu-link"><a href="index.php">халва</a></li>
               <li class="header__menu-link"><a href="baklava.php">пахлава</a></li>
               <li class="header__menu-link"><a href="lukum.php">лукум</a></li>
               <li class="header__menu-link">
                  <a href="chocolate.php">шоколад</a>
               </li>
               <li class="header__menu-link">чай</li>
               <li class="header__menu-link">кофе</li>
               <li class="header__menu-link">
                  <a href="contact.php">контакты</a>
               </li>
               <li class="header__menu-link">
                  <a href="delivery.php">доставка</a>
               </li>
               <li class="header__menu-link"><a href="recipes.php">рецепты</a></li>
            </ul>
            <ul class="header__top">
               <div class="header__burger">
                  <span></span>
               </div>
               <li class="header__top-item header__logo"><a href="index.php">дом халвы </a><img class="lamp-img" src="img/lamp/lamp.svg" alt=""></li>
               <li class="header__top-item"></li>
               <li class="header__top-item header__cart">
                  <div class="phone">8(999)777-77-77</div>
                  <a href="cart.php"><img class="header__cart-img"  src="img/cart.svg" alt=""><span class="amount"></span></a>
               </li>
            </ul>
            <nav class="header__nav">
               <div class="header__nav-dropdown-wrap">  
                  <button class="header__nav-dropdown"><img class="header__dropdown-arrow" src="img/arrowDown.svg" alt=""> меню</button>
                     <ul class="header__nav-dropdown-on">
                        <li class="header__nav-dropdown-link"><a href="index.php">халва</a></li>
                        <li class="header__nav-dropdown-link"><a href="baklava.php">пахлава</a></li>
                        <li class="header__nav-dropdown-link"><a href="lukum.php">лукум</a></li>
                        <li class="header__nav-dropdown-link"><a href="chocolate.php">шоколад</a></li>
                        <li class="header__nav-dropdown-link"><a href="#">чай</a></li>
                        <li class="header__nav-dropdown-link"><a href="#">кофе</a></li>
                     </ul>
               </div>
               <a href="contact.php" class="header__nav-btn">контакты</a>
               <a href="delivery.php" class="header__nav-btn">доставка</a>
               <a href="recipes.php" class="header__nav-btn">рецепты</a>
            </nav>
         </div>
      </header>