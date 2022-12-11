// выезжающий блок cookie
let animateCookie = function() {
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        let animateCookie = (-30 + timePassed / 23.4199 );
        
        animateCookie = animateCookie.toFixed(0);
        cookie.style.bottom = animateCookie + '%' ;

        if (timePassed >= 700) clearInterval(timer);
      }, 1);
  };
animateCookie()
// блок cookie скрывается после нажатия ОК
btnCookie.onclick = function() {
    let start = Date.now();
    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      cookie.style.bottom = -timePassed / 24  + '%';
      if (timePassed >= 700) clearInterval(timer);
    }, 1);
  };


const windowWidth = window.outerWidth
console.log(windowWidth)
// Проверка если это мобильное устройство , то анимации не будет
if (windowWidth > 425){
  // анимация телефона и текста в блоке ourMission
  const ourMission = document.querySelector('#ourMission');
  flag = true
  let animate = window.addEventListener('scroll',function(){
  let scrollTop = window.scrollY;
  let scrollOffset =  ourMission.offsetTop ;
  let ourMissionCenter = ourMission.offsetHeight / 2.5;
  let scrollOffsetCenter = scrollOffset + ourMissionCenter
  scrollOffsetCenter = scrollOffsetCenter.toFixed(0)

    if((scrollTop > scrollOffsetCenter)  && flag){
        flag = false
        let start = Date.now();
        let timer = setInterval(function() {
          let timePassed = Date.now() - start;
          let animatePhoneRight = ( -42 + timePassed / 12.4 );
          animatePhoneRight = animatePhoneRight.toFixed(0);
          phoneAnimation.style.right =  -animatePhoneRight   + 'rem' ;
          let a = phoneAnimation.style.background = 'radial-gradient(rgba(202, 19, 164, 1) 0%, rgba(138, 13, 188, 1) 0%, rgba(83, 15, 220, 0) 64%, rgba(3, 3, 240, 0) 100%)';
          let animatePhoneRotate =  (90 - timePassed / 7.78);
          animatePhoneRotate = animatePhoneRotate.toFixed(0)
          phoneAnimation.style.transform = 'rotate' + '(' + animatePhoneRotate + 'deg)'
          let animateTextLeft = ( 0 + timePassed / 15 );
          animateTextLeft = animateTextLeft.toFixed(0)
          textAnimation.style.left = animateTextLeft + '%'
          let animateTextOpacity = (30 - timePassed / 23.4199 );
          animateTextOpacity = animateTextOpacity.toFixed(0)
          textAnimation.style.opacity = animateTextOpacity + '%'
          
          if (timePassed >= 700) clearInterval(timer);
        }, 1); 
    }
  })
} 




//alert состояние для формы
let  form = document.querySelector('#feedBack'),
     formInputs = document.querySelectorAll('.input'),
     nameInput = document.querySelector('.input-name'),
     venueNameInput = document.querySelector('.input-venue-name');



form.onsubmit = function(){
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
      formInputs.forEach(function(input){
    if (input.value === '') {
      input.classList.add('error')
    } 
    else {
      input.classList.remove('error')
    }
  })
  
  if(emptyInputs.length !== 0){
    console.log('ПУСТО')
    return false;
  }
}