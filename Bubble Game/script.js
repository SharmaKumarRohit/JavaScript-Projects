const bpanel = document.querySelector(".panel__bottom");
const poverlay = document.querySelector(".panel__overlay");
const scoreVal = document.querySelector("#score");
let timer = 60;
let hit = 0;
let score = 0;

function increaseScore() {
    score += 10;
    scoreVal.innerText = score;
}

function makeNewHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector('#hit').innerText = hit;
}

function startTimer() {
    let id = setInterval(() => {
        if(timer >= 0) {
            document.querySelector("#timer").innerText = timer;
            timer--;
        }
        else {
            clearInterval(id);
            showGameOver();
        }
    }, 1000);
}

function makeBubble() {
  for (let i = 0; i < 140; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    const div = document.createElement('div');
    div.setAttribute('class', 'bubble center');
    div.innerText = randomNum;
    bpanel.append(div);
  }
}

function showGameOver() {
    poverlay.style.display = "flex";
    document.querySelector('#view__score').innerText = score;
}

bpanel.addEventListener('click', e => {
    if(e.target.classList.contains('bubble')) {
        const clickedHit = +(e.target.innerText);
        if(clickedHit === hit) {
            increaseScore();
            bpanel.innerHTML = "";
            makeBubble();
            makeNewHit();
        }
    }
})

poverlay.addEventListener('click', e => {
    if(e.target.classList.contains('play__again')) {
        poverlay.style.display = "none";
        bpanel.innerHTML = "";
        makeBubble();
        timer = 60;
        startTimer();
        makeNewHit();
        score = 0;
        scoreVal.innerText = score;
    }
})

makeBubble();
startTimer();
makeNewHit();
