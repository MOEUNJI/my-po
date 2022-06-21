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

