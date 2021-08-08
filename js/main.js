
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  
  if(window.scrollY > 500)
  {
    //배지 숨기기
   //gsap.to(요소,지속시간,옵션) 애니메시션 처리
   gsap.to(badgeEl, .6, {
     opacity: 0,
     display: 'none'
   });
   gsap.to(toTopEl, .2, {
     x: 0
   });
  }
  else
  {
    //배지 보여짐.
    gsap.to(badgeEl,.6,{
      opacity:1,
      display:'block'
    });
    gsap.to(toTopEl,.2,{
      x: 100
    });
  }
},300));
//_.throttle: 임의로 설정한 일정 시간 간격(밀리세컨드)으로 콜백 함수의 실행을 보장합니다.
//_.throttle(function(){},시간)); 


toTopEl.addEventListener('click',function(){
  gsap.to(window,.7,{
    scrollTo:0//화면의 위치를 0PX 로 이동 0.7 초동안 gsap.to 인수 값 만큼(지속시간)
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl,1,{
    delay:(index+1) * .7, //지연
    opacity:1
  });
});

//SWIPER new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container',{  
  slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수 기본값은 1
  spaceBetween:10, //슬라이드 사이의 여백. 10px
  centeredSlides: true, //1번 슬라이드가 가운데 부터
  autoplay: {
    delay:5000
  },
  loop: true,
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container',{
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion)
  {
    promotionEl.classList.add('hide');
  }
  else{
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector,delay,size)
{
  gsap.to(selector,random(1.5,2.5),{
    y: size,
    repeat:-1,// 반복
    yoyo:true, //역재생
    ease: Power1.easeInOuteaseInOut,
    delay:random(0,delay)
  });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 감시할려는 범위 (클래스(div)를 기준으로 0 ~ 1)
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});
