// 
// 스크롤 페이드인
const content = document.getElementsByClassName('content');
// content 라는 클래스를 가진 요소를 content 안에 넣어줌
window.addEventListener('scroll', () => {
    // 윈도우에서 스크롤 하면 발생하는 현상
    const winH = window.innerHeight;
    // winH 에 브라우저의 Height 값을 넣어줌
    for (let i = 0; i < content.length; i++) {
        // 반복문 실행 i는 0이다 ; 0이 content의 개수보다 작으면; i는 content의 개수만큼 증가한다.
        const contentTop = content[i].getBoundingClientRect().top;
        // contentTop 에다가 content의 i번째 요소의 화면 상단 부터 요소의 시작 위치 값을 대입해줌

        if (contentTop - winH < 0) {
            // 만약 Top에서부터 요소까지의 거리에서 윈도우의 innerHeight 를 뺀 값이 0보다 작으면
            // 쉽게 말해 해당 요소가 스크롤 하여 보이기 시작하면
            content[i].classList.add('in');
            // content의 i번째 요소에 in이라는 클래스를 부여한다.
        }
        if (contentTop - winH > 0) {
            // 만약 Top에서 부터 요소까지의 거리에서 innerHeight를 뺀 것이 0보다 크면
            // 쉽게 말해 해당 요소가 밑에 있어 브라우저에서 보이지 않으면 ( 스크롤 하면 다시 보임 )
            content[i].classList.remove('in');
            // content 의 i 번째 요소에 in 이라는 클래스를 삭제한다.
        }
    }
})








// 
// 지워졌다 새로운거 써지는 글씨
let typeText = document.querySelector(".type-text")
var textToBeTypedArr = ["끊임없이 성장중인", "맡은 바에 최선을 다하는", "노력하며,성실하게 나아가는"]
var index = 0, isAdding = true, textToBeTypedIndex = 0
playAnim()



// 
// 페이드인 슬라이드
let slides = document.querySelectorAll(".advantages-motto-fade-slides .slide");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);



// 
// 개나리같은 사람이 되자
const flowerText = "개나리같은 사람이 되자!";
const text = document.querySelector(".flower-text");
let i = 0;
setInterval(typing, 300)




// 
// 눈알
const eye = document.querySelector('.eyes');
const balls = document.getElementsByClassName("ball");





// 
// VIEW 클릭시 모달
const modalBtn = document.getElementsByClassName('modal-btn');
// VIEW가 들어있는 button 을 modalBtn에 대입함
const modalOverlay = document.getElementsByClassName('modal-overlay');
// 모달창으로 띄울 div를 modal-overlay라는 클래스를 부여하고 modalOverlay에 대입해줌
const modalClose = document.getElementsByClassName('close');
// 모달창을 닫을 버튼을 div.close라고 지정 후 modalClose 에 대입함.

for (let i = 0; i < modalBtn.length; i++) {
    // i는 0이다; i가 modalBtn의 개수보다 적을 경우 i는 modalBtn의 개수만큼 증가한다.
    modalBtn[i].addEventListener('click', () => {
        // modalBtn의 i번째 버튼에다 클릭시 이벤트를 부여함
        modalOverlay[i].style.display = 'flex';
        // modalOverlay의 i번째의 스타일을 display:flex로 변경한다.
    });
    for (let j = 0; j < modalClose.length; j++) {
        // j는 0이다. j가 닫기 버튼의 개수보다 작으면 j는 닫기버튼의 개수만큼 증가한다.
        modalClose[j].addEventListener('click', () => {
            // j번째 닫기버튼을 클릭하면 이벤트 리스너가 붇는다.
            modalOverlay[i].style.display = 'none';
            // modalOverlay의 i 번째의 스타일을 none으로 변경하여 보이지 않도록 설정한다.
        })
    }
}





// 
// 카운트업
const countBox = document.getElementsByClassName('count');
// countBox 에 data-number 값을 가진 요소를 대입한다. 
// 데이터 넘버가 들어갈 박스
for (let i = 0; i < countBox.length; i++) {
    // i는 0이다. i가 data-number 값을 가진 요소의 개수보다 작으면 i는 그만큼 증가한다.
    const count = countBox[i].dataset.number;
    // count에 data-number 값을 가진 요소의 i번째의 dataset. data-number의 number를 대입한다.
    // 즉 데이터 넘버 값
    console.log(`카운트 ${i}번째는 ${count}야`)

    let countUpChk = true;
    //  true 라는 값을 대입함
    window.addEventListener('scroll', () => {
        // 윈도우에서 스크롤 하면
        if (countBox[i].getBoundingClientRect().top - window.innerHeight < 0) {
            // 만약 data-number 값을 가진 요소의 i번째의 브라우저 Top으로부터의 위치에서 브라우저의 Height값을 뺀 것이 0보다 작으면
            // 쉽게 말해 스크롤 해서 i라는 요소가 브라우저에서 보이기 시작하면
            if (countUpChk) {
                // true 였던 countChk에
                countUpChk = false;
                // false를 대입하고 
                countUp(count, countBox[i]);
                // countUp 이라는 함수를 실행시킴
                // 아규먼트(인자)로 count(data-number의 number값)와 countBox의 i번째 (데이터 넘버가 들어갈 박스) 요소를 받아옴
            }
        } else {
            countUpChk = true;
            // countUpChk 가 false라면 true를 대입함
        }
    })
}

function countUp(count, countBoxSelector) {
    // countUp에 count,countBoxSelector 라는 파라미터(매개변수)를 생성함
    for (let j = 0; j <= count; j++) {
        // j는 0이다. j가 count보다 작거나 같으면 j는 count만큼 증가한다.
        setTimeout(() => {
            // 한 번 특정한 시간에 작동하는 동작을 만들때 setTimeout을 사용함
            countBoxSelector.innerText = j;
            // countBoxSelector의 innerText에 j를 대입한다.
        }, 40 * j);
        // 0.04초 * j
    }
}



// 
// 글리치효과
const lastGlitchEffect = document.getElementsByClassName('mongs-portfolio')[0];
glitch(lastGlitchEffect)



// 
// snow
const page = document.querySelector('.snow-box');
// page라는 상수에 snow-box라는 클래스를 가진 요소를 대입함

setInterval(() => {
    // 반복적인 작업을 수행해야 하는 경우 setInterval을 사용함
    createSnow();
    // 0.1초에 한 번씩 createSnow가 실행됨
}, 100);


// snow
function createSnow() {
    // createSnow 라는 함수를 생성함
    const el = document.createElement('div');
    // el이라는 상수에 div 태그를 생성해줌
    el.classList.add('snow');
    // 생성된 div태그인 el에 snow라는 클래스를 부여해줌
    el.classList.add(`snow${Math.floor(Math.random() * 3) + 1}`);
    // snow라는 클래스가 붙은 el에 
    // Math.floor 는 소수값이 존재할 때 소수값을 버리는 역활을 하는 함수
    // Math.random 은 0부터 1까지 무한한 수를 생성함
    // Math.floor(Math.random() * 3) = 0이상 2이하의 랜덤한 정수 + 1
    // 즉 클래스가 "snow1" , "snow2" , "snow3" 3개의 클래스가 탄생함
    el.style.left = randomWidthPosition() + 'px';
    // "snow1" , "snow2" , "snow3" 3개의 클래스에 스타일 left에 브라우저만큼의 넓이를 픽셀로 부여해줌
    // 즉 브라우저만큼의 넓이를 픽셀로 지정하여 브라우저 전체 width 에서 snow123 이 활동할 수 있도록 지정함 
    page.appendChild(el);
    // snow-box의 자식요소로 el을 삽입함

    setTimeout(() => {
        el.remove();
        }, 15000);
    // el이 계속 쌓이면 안 되니까 지우는 setTimeout 함수를 활용하여 15초마다 지워줌

}
function randomWidthPosition() {
    // randomWidthPosition이라는 함수를 생성함
    return Math.floor(Math.random() * window.innerWidth)
    // 랜덤값의 크기는 웹브라우저의 넓이를 넘어가지 못하게 (웹브라우저 안에서 랜덤한 숫자가 나오도록 지정)
}





// 
// 해시태그
const container = document.querySelector('.main-page');
// container 안에 .main-page를 대입함 ( move들이 들어있는 박스)
const move = document.getElementsByClassName('move');
// move 안에 move라는 class를 가진 요소들을 대입함
let center = [window.innerWidth / 2, window.innerHeight / 2];
// center에 윈도우의 넓이 /2 (가로중앙) , 윈도우의 높이 /2 (세로중앙)
// 중앙값을 구해줌 ( 브라우저 사이즈에 따라 항상 변해야 해서 변수let 으로 선언함)

window.addEventListener('resize', () => {
    // 윈도우의 사이즈가 리사이즈 될 때 이벤트가 발생함
    let center = [window.innerWidth / 2, window.innerHeight / 2];
    // 브라우저의 사이즈가 바뀔때마다 중앙값을 다시 구함
    console.log(center)
})


for (let i = 0; i < move.length; i++) {
    // i는 0이다;move의 개수보다 0이 작으면 0은 move의 개수만큼 증가한다.
    container.addEventListener('mousemove', (e) => {
        // mmove들이 들어있는 container에 마우스를 움직일 때 이벤트를 부여함
        const vecter = Math.pow(-1, i);
        // vecter 라는 상수에 Math.제곱 (밑수,지수)
        const pointerNow = [e.clientX - center[0], e.clientY - center[1]];
        // pointerNow에 [현재 마우스의 X값 - window.innerWidth / 2, 현재 마우스의 Y 값 - window.innerHeight / 2]
        const howMove = [pointerNow[0] / center[0] * 50 * vecter, pointerNow[1] / center[1] * 50 * vecter];
        // howMove 에 현재 마우스의 X값 빼기 윈도우의 가로 중앙값 한 값을 윈도우의 가로 중앙값으로 나눈 후 50을 곱해서 
        move[i].style.transform = `translate(${howMove[0]}px,${howMove[1]}px)`;
        // move의 i번째의 스타일을 
    })

}





// 
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





// 
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




// 
//   페이드인 슬라이드
function nextSlide() {
    // nextSlide 라는 함수를 생성함
    slides[currentSlide].className = " slide";
    // slide(.advantages-motto-fade-slides .slide)[0].classNamme = "slide";
    // .어드벤티-모토-페이드인-슬라이드 라는 클래스를 가진 요소와 그 자식들인 slides라는 클래스를 가진 요소를 slides에 대입함
    // slides에 대입된 요소들의 0번째 요소의 클래스 네임에 slide를 삽입함.
    // 즉 간단하게 이 코드를 쓰는 이유는 .advantages-motto-fade-slides의 첫번째 자식이 slide라는 클래스를 포함하고 있어서 사진이 3번 돌아가고 나서도 다시 첫번째 사진으로 돌아오게 하기 위함
    currentSlide = (currentSlide + 1) % slides.length;
    // currentSlide(0) 에다가 1 % slides의 개수(3) 을 대입함 즉 0.333333333을 대입함 
    console.log(slides.length);
    console.log(currentSlide)
    slides[currentSlide].className = " slide showing";
    // slides[0.33333]의 클래스 네임에 slide와 showing 을 추가함
}



// 
// 개나리같은 사람이 되자
function typing() {
    let txt = flowerText[i++];
    text.innerHTML += txt;
    if (i > flowerText.length) {
        text.textContent = "";
        i = 0;
    }
}



// 
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




// 
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
