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












let typeText = document.querySelector(".type-text")
        // var textToBeTyped = "서근입니다."
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





        let slides = document.querySelectorAll(".advantages-motto-fade-slides .slide");
        let currentSlide = 0;
        let slideInterval = setInterval(nextSlide, 2000);
        
        function nextSlide(){
            slides[currentSlide].className =" slide";
            currentSlide =(currentSlide+1) % slides.length;
            slides[currentSlide].className = " slide showing";
        }


        var balls = document.getElementsByClassName("ball");
        document.onmousemove = function () {
            var x = event.clientX * 50 / window.innerWidth + "%";
            var y = event.clientY * 50 / window.innerHeight + "%";

            for (var i = 0; i < 2; i++) {
                balls[i].style.left = x;
                balls[i].style.top = y;

            }
        }



        const modalBtn = document.querySelector('.modal-btn');   
        // 모달창띄우기 버튼
        const modalOverlay = document.querySelector('.modal-overlay');
        // 브라우저 위에 띄워질때 모달창을 포함한 브라우저의 모든 공간 
        const modalClose = document.querySelector('.close');
        // 엑스버튼

        modalBtn.addEventListener('click',modalOn);
        modalClose.addEventListener('click',modalOff);
        modalOff();
        // 여기에 modalOff(); 를 써 준 이유는 처음 브라우저가 열렸을 때 모달오프를 해놓지 않으면 m 을 눌렀을 때 모달창이 열리지 않는다 그래서 아예 닫는다고 실행시켜놓는거임
        modalOverlay.addEventListener('click',e => {
            console.log(e.target);
            // target = 클릭된 부분 
            const target = e.target;
            if(target.classList.contains('modal-overlay')){
                // 클릭된 부분에 modal-overlay 클래스가 있으면 모달창을 끔
                modalOff();
            }
        });

        console.log(modalOverlay.style.display === 'flex');
        window.addEventListener('keyup',e=>{
            console.log(e.key === 'Escape');
            if(modalOverlay.style.display === 'flex' && e.key === 'Escape')
                modalOff();
                // modalOverlay 의 스타일이 flex 일때 esc 키가 눌리면 모달창을 끔

            if(modalOverlay.style.display === 'none' && (e.key === 'm' || e.key === 'M')){
                modalOn();
                // modalOverlay의 스타일이 none 이며 m 또는 M 키가 눌렸을 때 모달창을 켠다
            }
            })

        console.log(modalOverlay.classList.contains('modal-overlay'));
        
        function modalOn(){
            modalOverlay.style.display = 'flex';
            // modalOverlay 에 display:flex 대입
        }

        function modalOff(){
            modalOverlay.style.display = 'none';
            // modalOverlay 에 display: none 대입
        }

