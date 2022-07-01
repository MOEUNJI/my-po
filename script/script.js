const content = document.getElementsByClassName('content');
        // 공통 클래스인 content 불러옴
        window.addEventListener('scroll',()=>{
            // 윈도우에 스크롤 했을 때
            const winH = window.innerHeight;
            // winH = 브라우저 위쪽에 잡다한거 빼고 콘텐츠가 표시되는 부분의 height만 대입함

            for ( let i = 0 ; i < content.length ; i ++){   
                // i 가 content 의 갯수보다 작으면 i는 content의 갯수만큼 증가함
                const contentTop = content[i].getBoundingClientRect().top;
                // i 번째에 있는 요소의 top으로부터의 거리를 계산해서 contentTop에 대입함
                
                if(contentTop - winH < 0){
                    // i번째에 있는 요소의 화면 상단 부터 대상의 처음 위치 값 - 브라우저에서 콘텐츠가 표시되는 부분의 height 한게 0 보다 작으면
                    content[i].classList.add('in');
                    // content 의  i 번째에 있는 요소에 in 을 붙여준다
                }
                if(contentTop - winH > 0){
                    // i번째에 있는 요소의 화면 상단 부터 대상의 처음 위치 값-브라우저에서 콘텐츠가 표시되는 부분의 height 한게 0 보다 크면 
                    content[i].classList.remove('in');
                    // content 의 i 번째에 있는 요소에 in 을 제거해서 스크롤을 올렸다가 다시 내려도 다시 작동하게 함
                }
            }
        })
        




        



        // 지워졌다 새로운거 써지는 글씨
        let typeText = document.querySelector(".type-text")
        var textToBeTypedArr = ["끊임없이 성장중인", "맡은 바에 최선을 다하는", "노력하며,성실하게 나아가는"]
        // 이 부분에서 조정하면 됨
        var index = 0, isAdding = true, textToBeTypedIndex = 0
        // start animation
        playAnim()
        
        
        
        // 페이드인 슬라이드
        let slides = document.querySelectorAll(".advantages-motto-fade-slides .slide");
        let currentSlide = 0;
        let slideInterval = setInterval(nextSlide, 2000);
        

        // 개나리같은 사람이 되자
        const flowerText = "개나리같은 사람이 되자!";
        const text = document.querySelector(".flower-text");
        let i = 0;
        setInterval(typing, 300)
        


        
        // 눈알
        const eye = document.querySelector('.eyes');
        const balls = document.getElementsByClassName("ball");

        
        
        // 모달창
        const modalBtn = document.getElementsByClassName('modal-btn');   
        // 모달창띄우기 버튼
        const modalOverlay = document.getElementsByClassName('modal-overlay');
        // 브라우저 위에 띄워질때 모달창을 포함한 브라우저의 모든 공간 
        const modalClose = document.getElementsByClassName('close');
        // 엑스버튼

        for(let i = 0; i < modalBtn.length ; i++ ){
            modalBtn[i].addEventListener('click',() => {
                modalOverlay[i].style.display = 'flex';
            });
            for(let j = 0; j < modalClose.length ; j++){
                modalClose[j].addEventListener('click',()=>{
                    modalOverlay[i].style.display = 'none';
                })
            }
        }
        
        
        
        // 카운트업
        // console.log(countBox.dataset.indexNumber);

        // const protege = document.querySelector('.protege');
        // let countUpChk=true;
        
        // window.addEventListener('scroll', ()=>{
        //     if(protege.getBoundingClientRect().top-window.innerHeight < 0){
        //         if(countUpChk){
        //             countUpChk=false;
        //             countUp();
        //         }
        //     }else {
        //         countUpChk=true;
        //     }
        // })
        
        
        // function countUp(){
        //     const countBox = document.getElementsByClassName('count');
            
        //     for(let i = 0 ; i < countBox.length ; i ++ ){
        //         let count = countBox[i].dataset.number;
    
        //         for(let j=0;j<=count;j++){
        //             setTimeout(() => {
        //                 countBox[i].innerText=j;
        //             }, 40*j );
                    
        //         }
        //     }
    
        // }


        

        const countBox = document.getElementsByClassName('count');
        
        for(let i = 0 ; i < countBox.length ; i ++ ){
            const count = countBox[i].dataset.number;
            console.log(`카운트 ${i}번째는 ${count}야`)
            let countUpChk=true;
            
            window.addEventListener('scroll', ()=>{
                if(countBox[i].getBoundingClientRect().top-window.innerHeight < 0){
                    if(countUpChk){
                        countUpChk=false;
                        countUp(count, countBox[i]);
                    }
                }else {
                    countUpChk=true;
                }
            })
        }
        
        
        function countUp(count, countBoxSelector){    
                for(let j=0;j<=count;j++){
                    setTimeout(() => {
                        countBoxSelector.innerText=j;
                    }, 40*j );
                    
                }
            }
    
        
        

        // 글리치효과

        const  lastGlitchEffect = document.getElementsByClassName('mongs-portfolio')[0];
        glitch(lastGlitchEffect)
        
        
        
        
        // snow
        const page  = document.querySelector('.snow-box');
        
        setInterval(() => {
            createSnow();
        }, 100);
        
        

        
        
        // snow
        function createSnow(){
            const el = document.createElement('div');
            el.classList.add('snow');
            el.classList.add(`snow${Math.floor(Math.random()*3)+1}`);
            el.style.left = randomWidthPosition() + 'px';
            // el.style.marginTop = randomHeightPosition() + 'px';
            page.appendChild(el);
            
            setTimeout(() => {
                el.remove();
            }, 15000);
        }
        function randomWidthPosition(){
            return Math.floor(Math.random() * window.innerWidth)
            // 랜덤값의 크기는 웹브라우저의 넓이를 넘어가지 못하게 (웹브라우저 안에서 랜덤한 숫자가 나오도록 지정)
        }
        
        
        
        
// 글씨 아무거나 써져있다가 완성되는거
        function paragraph(element) {
            const array = element.innerText.split('')
            const special = ['~', '@', '!', '#', '$', '%', '^', '&', '*']
            const exception = [' ', '\n', '.', ',']
            const random = (min, max) => {
              return Math.floor(Math.random() * (max - min + 1) + min)
            }
          
            const numArray = []
            array.forEach(char => {
              const num = random(5, 40)
              numArray.push(num)
            })
          
            let completeCount
            let newText
            const timer = setInterval(() => {
              completeCount = 0
              newText = ''
              numArray.forEach((num, i) => {
                if (exception.includes(array[i]) || numArray[i] === 0) {
                  newText += array[i]
                  completeCount += 1
                } else {
                  newText += special[numArray[i] % special.length]
                  numArray[i] = --num
                }
              })
          
              element.innerText = newText
              if (completeCount === numArray.length) clearInterval(timer)
            }, 100)
          }
          
          const p = document.querySelector('.main-sub-text')
          paragraph(p)




          // 끊임없이 성장중인, 노력하며 성실하게 나아가는, 맡은 바에 최선을 다하는
          // 위에거랑
          function playAnim() {
              setTimeout(function () {
                  // set the text of typeText to a substring of the text to be typed using index.
                  typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
                  if (isAdding) {
                      // adding text
                      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
                          // no more text to add
                          isAdding = false
                          typeText.classList.add("showAnim")
                          //break: wait 2s before playing again
                          setTimeout(function () {
                              typeText.classList.remove("showAnim")
                              playAnim()
                          }, 2000)
                          return
                      } else {
                          // increment index by 1
                          index++
                      }
                  } else {
                      // removing text
                      if (index === 0) {
                          // no more text to remove
                          isAdding = true
                          //switch to next text in text array
                          textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
                      } else {
                          // decrement index by 1
                          index--
                      }
                  }
                  // call itself
                  playAnim()
              }, isAdding ? 120 : 60)
          }


        //   페이드인 슬라이드
          function nextSlide(){
            slides[currentSlide].className =" slide";
            currentSlide =(currentSlide+1) % slides.length;
            slides[currentSlide].className = " slide showing";
        }

        // 개나리같은 사람이 되자
        function typing(){
            let txt = flowerText[i++];
            text.innerHTML += txt;
            if (i > flowerText.length) {
                text.textContent = "";
                i = 0;
            }
        }



        // 눈알
        document.onmousemove = function (e) {
            const originX = (eye.getBoundingClientRect().left + eye.getBoundingClientRect().right)/2;
            const originY = (eye.getBoundingClientRect().top + eye.getBoundingClientRect().bottom)/2;


            console.log(`커서위치는 x:${e.clientX} y:${e.clientY}`)
            console.log(`눈 위치는 ${originX} ${originY}`)
            

            let x = (e.clientX - originX)/window.innerWidth*50;
            let y = (e.clientY - originY)/window.innerHeight*100;

            if(x>10)x=10;
            if(x<-10)x=-10;
            if(y>25)y=25;
            if(y<-25)y=-25;
            
            for (let i = 0; i < 2; i++) {
                balls[i].style.top = `${50+y}%`
                balls[i].style.left = `${50+x}%`

            }
        }



        // 글리치효과
        function glitch(element){
            let count = 0
            setInterval(()=>{
                // element
                const skew = Math.random() * 20 - 10
                //  element::before
                const top1 = Math.random() * 100
                const btm1 = Math.random() * 100
                //  element::after
                const top2 = Math.random() * 100
                const btm2 = Math.random() * 100

                element.style.setProperty('--skew', `${skew}deg`)
                element.style.setProperty('--t1', `${top1}%`)
                element.style.setProperty('--b1', `${btm1}%`)
                element.style.setProperty('--t2', `${top2}%`)
                element.style.setProperty('--b2', `${btm2}%`)
                element.style.setProperty('--scale','1')
                
                count++ 
                
                if(count % 15 === 0){
                    // 1.5초마다 실행
                    const bigSkew = Math.random() * 180 - 90
                    element.style.setProperty('--skew',`${bigSkew}deg`)
                }

                // if(count % 30 === 0){
                //     // 3초마다 실행
                //     const bigScale = 1 + Math.random() / 2
                //     element.style.setProperty('--scale',`${bigScale}deg`)
                // }
            }, 100)
        }
