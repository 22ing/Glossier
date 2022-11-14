$(document).ready(function () { //문서준비이벤트 시작



    // 스크롤 내리면 gotop 버튼이 나타남
    $('.gotop').hide();
    $(window).scroll(function(){
        if ($(this).scrollTop() > 700 ) {    // 스크롤 했을 때 300px이상
        // if ($(this).scrollTop() > 300 && $(this).scrollTop() > 1000) {    // 스크롤 했을 때 300px이상, 1000px이하일때
            $('.gotop').fadeIn();             // 조건 만족시 실행
            // $('body').css({'background':'#ff0'});   //배경색 바뀜
            $('#header').addClass('fix');
        } else {
            $('.gotop').fadeOut();    // 조건 불만족시 실행
            // $('body').css({'background':'#0f0'});   //배경색 바뀜
            $('#header').removeClass('fix');


        }
    });

    //위로가기 버튼 눌렀을 때 자연스럽게 이동
    $('.gotop').click(function(){
        $('html').animate({
            scrollTop :0
        },1000);    //속도조절 가능
    });





  AOS.init();

//depth2
  $('.depth2').hide();
  $('.gnb > li').mouseenter(function () {
    $(this).children('.depth2').stop().fadeIn();
  });
  $('.gnb > li').mouseleave(function () {
    $(this).children('.depth2').stop().fadeOut();
  });



   //모바일 메뉴
   $('.mdepth2').hide();
   $('.mgnb > li').click(function(){
     $(this).children('.mdepth2').slideDown(); //여기까지하면 메뉴들이 다 열리도록
     $(this).siblings().children('.mdepth2').slideUp();  //하나씩만 열리게하려면 이 값이 필요함
   });
 
   //모바일메뉴 닫기
   $('.ham').click(function(){
     $('.mgnb_wrap').animate({
       'left' : '0'
     });
   });
   $('.mgnb_close').click(function(){
     $('.mgnb_wrap').animate({
       'left' : '100%'
     });
   });
 



//search
    $('.search').hide();
    $('.btn_search').click(function(){
      $('.search').fadeIn();
    });
    $('.search_close').click(function(){
      $('.search').fadeOut();
    });




//main_banner Slide
const mv = new Swiper('.mv', {

    autoplay: {
      delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,  //슬라이드 전환시간
    loop: true, //슬라이드 반복

    navigation: {
        nextEl: '.swiper-button-next',  // 다음 버튼
        prevEl: '.swiper-button-prev',  // 이전 버튼
      },
  });  // 슬라이드 종료




  //brand slide
  const bn = new Swiper('.bn', {
    // 옵션
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    slidesPerView : '1',  // 한 슬라이드에 보여줄 갯수
    spaceBetween : 20,  // 슬라이드 사이 여백
    loop : true,  // 슬라이드 반복 여부     

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },

});





// SUB PAGE


  //sub_banner Slide
  const sv = new Swiper('.sv', {

    autoplay: {
      delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,  //슬라이드 전환시간
    loop: true, //슬라이드 반복
  
  });  // 슬라이드 종료
  
  
 // Pick slide
 const gp = new Swiper('.gp', {
  slidesPerView: '1',  
  spaceBetween: 20,  // 슬라이드 사이 여백
  centeredSlides: true,  // 첫번째 슬라이드 가운데 배치 (좌우는 잘림)
  loop: true,  // 슬라이드 반복 여부

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },

  autoplay: {
    delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  speed: 1000,
  // 스크롤바 여부
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },


  
});





}); //문서준비이벤트 종료