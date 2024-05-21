let tensEl = document.getElementById('tens')
let secondsEl = document.getElementById('seconds')
let minEl = document.getElementById('min')
let buttonDiv = document.getElementById('btn-div')
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')
let minute = 0
let seconds = 0
let tens = 0
let timer = false;
const lapButton=document.getElementsByClassName("lap")[0]
const resetButton=document.getElementsByClassName("reset")[0]
const clearButton=document.getElementsByClassName("lap-clear-button")[0]
const laps=document.getElementsByClassName("laps")[0]
const bg=document.getElementsByClassName("outer-circle")[0]

let lapItem=0
function buttonOp(){
        createStopBtn()
}
function createStopBtn(){
    startBtn.remove()
    let stop = document.createElement('button')
    stop.textContent = "STOP"
    buttonDiv.prepend(stop)
    stop.onclick = function(){
        stopTimer()
        stop.remove()
        createStartBtn()
    }
}
function createStartBtn(){
    let start  = document.createElement('button')
    start.textContent = "START"
    buttonDiv.prepend(start)
    start.onclick = function(){
        start.remove()
        createStopBtn()
        startTimer()
    }
}
function startTimer(){
    timer = true;
    stopWatch()
}
function stopTimer(){
    timer = false;
    clearInterval(interval);
}
function resetTimer(){
    timer = false
    clearInterval(interval)
    stopTimer()
    tens = 0
    minute = 0
    seconds = 0
    tensEl.textContent = "0" + tens
    minEl.textContent = "0" + minute
    secondsEl.textContent = "0" + seconds
}
function stopWatch(){
    if(timer === true){
        tens++
        if(tens <= 9){
            tensEl.textContent = "0" +  tens
        }
        if(tens >= 10){
            tensEl.textContent = tens
        }
        if(tens === 99){
            tens = 0
            seconds++
            if(seconds <= 9){
                secondsEl.textContent = "0" + seconds
            }
            if(seconds >= 10 ){
                secondsEl.textContent = seconds
            }
            if(seconds === 59){
                seconds = 0
                minute++
                if(minute <= 9){
                    minEl.textContent = "0" + minute
                }
                if(minute >= 10){
                    minEl.textContent = minute
                }
            }
        }
        interval = setTimeout(startTimer, 10)
    }
}



const lap=()=>{
    const li=document.createElement("li")
    const number=document.createElement("span")
    const timestamp=document.createElement("span")

    li.setAttribute("class","lap-item")
    number.setAttribute("class","number")
    timestamp.setAttribute("class","time-stamp")

    number.innerHTML=`#${++lapItem}`
    timestamp.innerHTML=`${minute} : ${seconds} . ${tens}`
    li.append(number,timestamp)
    laps.append(li)

    clearButton.classList.remove("hidden")
}

const clearAll = ()=>{
    laps.innerHTML=''
    clearButton.classList.add("hidden")
    laps.append(clearButton)
    lapItem=0
}


playButton.addEventListener("click",play)
lapButton.addEventListener("click",lap)
resetButton.addEventListener("click", reset)
clearButton.addEventListener("click", clearAll)