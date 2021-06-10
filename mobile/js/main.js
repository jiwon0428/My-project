/* INDEX ------------------------------------------- */
//main banner slide
if($('.main_slide_container').length > 0){

    const ms = new Swiper('.main_slide_container', {
        direction: 'horizontal',
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },

        autoplay: {
          delay: 2000,
        },

    });
}

//main best slide
if($('.main_best_slide_container').length > 0){

  const mbs = new Swiper('.main_best_slide_container', {
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 15,

    scrollbar : {
      el : '.swiper-scrollbar',
      draggable: true,
    },
    
  });
}


/* product -----------------------------------------------------------  */
//best prodcut slide
if($('.best_slide_container').length > 0){

  const bsw = new Swiper('.best_slide_container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
  });
}

/* product more button */
var productList = $('.product_list li'),
    productBtn = $('.pm_btn');

productList.hide().slice(0, 6).show();

productBtn.on('click', function(e){
  e.preventDefault();
  $('.product_list li:hidden').slice(0, 6).fadeIn();
  
  if($('.product_list li:hidden').length == 0){
    productBtn.fadeOut('slow');
  }

  targetSCT = $(document).height() - $(window).height() - $('footer').outerHeight();

  $('html, main').animate({
    scrollTop: targetSCT
  },1500);
});

/* product Detalis */
if($('.product_slide_container').length > 0){

  const bsw = new Swiper('.product_slide_container', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
  });
}

//product category

var category = $('.category li');

/*
category.click(function(){
  if(category.hasClass('active')){
    $(this).toggleClass('active');
  }
  
});
*/


/* aside_toggel_btn ----------------------------------------------- */
var at_btn = $('.aside_toggel_btn');
var atc_btn = $('.aside_toggel_close')
var aside = $('aside');

at_btn.click(function(){
  aside.css({right:0},300);
})
atc_btn.click(function(){
  aside.css({right:'-100%'},300);
})


/* CART -----------------------------------------------------------  */
//cart add btn
var cart_btn = $('.cartadd_btn');

cart_btn.click(function(){
  window.location.href = 'cart.html'
});

//delete cart item
var circle_close = $('.circle_close');

circle_close.click(function(){
  $(this).parent().hide();
});

//login form
var input = $('.input-group input');

input.click(function(){
  $(this).attr('placeholder','');
  $(this).prev().addClass('active');
})

//back btn
var back = $('.back');

back.click(function(){
  window.history.back();
});



/* POPUP -------------------------------------------- */
var myPopup = $('.popup'),
    checkbox = $('#popup'),
    popupClose = $('.close');

//쿠키 생성
function setCookie(name, value, day){
  var date = new Date(); //현재 날짜 지정.
  date.setDate(date.getDate() + day);

  var mycookie = '';
  mycookie += name + '=' + value+';';
  mycookie +='Expires=' + date.toUTCString();

  document.cookie = mycookie; //쿠키 설정, 생성
}
//setCookie('ABC.com','Main',3);


//쿠키 삭제
function delCookie(name){
    var date = new Date();

    date.setDate(date.getDate() - 1);

    var setCookie = '';

    setCookie += name+'=Main;';
    setCookie +='Expires=' + date.toUTCString();

    document.cookie = setCookie; //쿠키 설정, 생성           
}

//쿠키 확인
function checkCookie(name){
    var cookies = document.cookie.split(';');
    console.log(cookies);
    var visited = false; // 방문 거짓

    for(var i in cookies){
        if(cookies[i].indexOf(name) > -1){
            visited = true;
            console.log(visited);
        }                
    }
    console.log(visited);

    if(visited){
        //재방문
        myPopup.hide();
    }else{
        //신규방문
        myPopup.show();
    }
    
  }
checkCookie('ABC.com');

popupClose.click(function(){

    if(checkbox.prop('checked')){
        //팝업을 다시 안보겠다. 팝업 닫고, 쿠키 생성.
        setCookie('ABC.com','Main',1);
        myPopup.hide();
    } else{
        //팝업을 계속 본다. 팝업 닫고, 쿠키 제거.
        myPopup.hide();
        delCookie('ABC.com');
    }

});        