const content = document.getElementsByClassName('content');
window.addEventListener('scroll', () => {
    const winH = window.innerHeight;

    for (let i = 0; i < content.length; i++) {
        const contentTop = content[i].getBoundingClientRect().top;

        if (contentTop - winH < 0) {
            content[i].classList.add('in');
        }
        if (contentTop - winH > 0) {
            content[i].classList.remove('in');
        }
    }
})









// 지워졌다 새로운거 써지는 글씨
let typeText = document.querySelector(".type-text")
var textToBeTypedArr = ["끊임없이 성장중인", "맡은 바에 최선을 다하는", "노력하며,성실하게 나아가는"]
var index = 0, isAdding = true, textToBeTypedIndex = 0
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



const modalBtn = document.getElementsByClassName('modal-btn');
const modalOverlay = document.getElementsByClassName('modal-overlay');
const modalClose = document.getElementsByClassName('close');

for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', () => {
        modalOverlay[i].style.display = 'flex';
    });
    for (let j = 0; j < modalClose.length; j++) {
        modalClose[j].addEventListener('click', () => {
            modalOverlay[i].style.display = 'none';
        })
    }
}


// 카운트업

const countBox = document.getElementsByClassName('count');

for (let i = 0; i < countBox.length; i++) {
    const count = countBox[i].dataset.number;
    console.log(`카운트 ${i}번째는 ${count}야`)
    let countUpChk = true;

    window.addEventListener('scroll', () => {
        if (countBox[i].getBoundingClientRect().top - window.innerHeight < 0) {
            if (countUpChk) {
                countUpChk = false;
                countUp(count, countBox[i]);
            }
        } else {
            countUpChk = true;
        }
    })
}


function countUp(count, countBoxSelector) {
    for (let j = 0; j <= count; j++) {
        setTimeout(() => {
            countBoxSelector.innerText = j;
        }, 40 * j);

    }
}




// 글리치효과

const lastGlitchEffect = document.getElementsByClassName('mongs-portfolio')[0];
glitch(lastGlitchEffect)




// snow
const page = document.querySelector('.snow-box');

setInterval(() => {
    createSnow();
}, 100);



const container = document.querySelector('.main-page');
const move = document.getElementsByClassName('move');
let center = [window.innerWidth / 2, window.innerHeight / 2];


window.addEventListener('resize', () => {
    let center = [window.innerWidth / 2, window.innerHeight / 2];
    console.log(center)
})


for (let i = 0; i < move.length; i++) {
    container.addEventListener('mousemove', (e) => {
        const vecter = Math.pow(-1, i);
        // 
        const pointerNow = [e.clientX - center[0], e.clientY - center[1]];
        const howMove = [pointerNow[0] / center[0] * 50 * vecter, pointerNow[1] / center[1] * 50 * vecter];
        move[i].style.transform = `translate(${howMove[0]}px,${howMove[1]}px)`;
    })

}







// snow
function createSnow() {
    const el = document.createElement('div');
    el.classList.add('snow');
    el.classList.add(`snow${Math.floor(Math.random() * 3) + 1}`);
    el.style.left = randomWidthPosition() + 'px';
    page.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, 15000);
}
function randomWidthPosition() {
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
function playAnim() {
    setTimeout(function () {
        typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
        if (isAdding) {
            if (index > textToBeTypedArr[textToBeTypedIndex].length) {
                isAdding = false
                typeText.classList.add("showAnim")
                setTimeout(function () {
                    typeText.classList.remove("showAnim")
                    playAnim()
                }, 2000)
                return
            } else {
                index++
            }
        } else {
            if (index === 0) {
                isAdding = true
                textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
            } else {
                index--
            }
        }
        playAnim()
    }, isAdding ? 120 : 60)
}


//   페이드인 슬라이드
function nextSlide() {
    slides[currentSlide].className = " slide";
    currentSlide = (currentSlide + 1) % slides.length;
    console.log(slides.length);
    console.log(currentSlide)
    slides[currentSlide].className = " slide showing";
}

// 개나리같은 사람이 되자
function typing() {
    let txt = flowerText[i++];
    text.innerHTML += txt;
    if (i > flowerText.length) {
        text.textContent = "";
        i = 0;
    }
}



// 눈알
document.onmousemove = function (e) {
    const originX = (eye.getBoundingClientRect().left + eye.getBoundingClientRect().right) / 2;
    const originY = (eye.getBoundingClientRect().top + eye.getBoundingClientRect().bottom) / 2;


    let x = (e.clientX - originX) / window.innerWidth * 50;
    let y = (e.clientY - originY) / window.innerHeight * 100;

    if (x > 10) x = 10;
    if (x < -10) x = -10;
    if (y > 25) y = 25;
    if (y < -25) y = -25;

    for (let i = 0; i < 2; i++) {
        balls[i].style.top = `${50 + y}%`
        balls[i].style.left = `${50 + x}%`

    }
}



// 글리치효과
function glitch(element) {
    let count = 0
    setInterval(() => {
        const skew = Math.random() * 20 - 10
        const top1 = Math.random() * 100
        const btm1 = Math.random() * 100
        const top2 = Math.random() * 100
        const btm2 = Math.random() * 100

        element.style.setProperty('--skew', `${skew}deg`)
        element.style.setProperty('--t1', `${top1}%`)
        element.style.setProperty('--b1', `${btm1}%`)
        element.style.setProperty('--t2', `${top2}%`)
        element.style.setProperty('--b2', `${btm2}%`)
        element.style.setProperty('--scale', '1')

        count++

        if (count % 15 === 0) {
            const bigSkew = Math.random() * 180 - 90
            element.style.setProperty('--skew', `${bigSkew}deg`)
        }
    }, 100)
}
