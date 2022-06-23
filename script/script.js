

// 메인페이지 글씨

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










// 지워졌다 새로운거 써지는 글씨

        let typeText = document.querySelector(".type-text")
        var textToBeTypedArr = ["끊임없이 성장중인", "맡은 바에 최선을 다하는", "노력하며,성실하게 나아가는"]
        // 이 부분에서 조정하면 됨
        var index = 0, isAdding = true, textToBeTypedIndex = 0

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
        // start animation
        playAnim()



        // 페이드인 슬라이드

        let slides = document.querySelectorAll(".advantages-motto-fade-slides .slide");
        let currentSlide = 0;
        let slideInterval = setInterval(nextSlide, 2000);
        
        function nextSlide(){
            slides[currentSlide].className =" slide";
            currentSlide =(currentSlide+1) % slides.length;
            slides[currentSlide].className = " slide showing";
        }
        


        
// 눈알
        var balls = document.getElementsByClassName("ball");
        document.onmousemove = function () {
            var x = event.clientX * 50 / window.innerWidth + "%";
            var y = event.clientY * 50 / window.innerHeight + "%";
            
            for (var i = 0; i < 2; i++) {
                balls[i].style.left = x;
                balls[i].style.top = y;

            }
        }




        
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

        let countBox = document.getElementsByClassName('count')[0];
        let count = countBox.dataset.number

        // for( i = 0; i < count.length. i++;){
            
            // }
        
        // let i = 0;
        for(let i = 0; i < 90 ; i++){
                setInterval(()=>{
                if(i <= count){
                    i++;
                    // console.log(i);
                    // console.log(count);
                }else{
                    
                }
                
            },500)
        }
            
        

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

                if(count % 30 === 0){
                    // 3초마다 실행
                    const bigScale = 1 + Math.random() / 2
                    element.style.setProperty('--scale',`${bigScale}deg`)
                }
            }, 100)
        }




        const  lastGlitchEffect = document.getElementsByClassName('mongs-portfolio')[0];
        glitch(lastGlitchEffect)
        
        

        
        // 눈 한알 한 알 
        function createSnow(){
            // let   = document.querySelector('.main-page');
            const el = document.createElement('div');
            el.classList.add('snow');
            el.style.marginLeft = randomPosition() + 'px';
            document.body.appendChild(el);
            //바디의 자식요소로 추가되어있음 사용할땐 섹션명 잡고 거기에 추가해줌
        }
        function randomPosition(){
            return Math.floor(Math.random() * window.innerWidth)
            // 랜덤값의 크기는 웹브라우저의 넓이를 넘어가지 못하게 (웹브라우저 안에서 랜덤한 숫자가 나오도록 지정)
        }
        
        for(let i = 0; i < 300; i++){
            createSnow();
        }