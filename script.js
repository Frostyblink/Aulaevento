var btnStart
var btnPause
var btnReset
var divTempo
var tempo = 0
var timerId

init()

function init(){
  btnStart = document.getElementById("start")
  btnStart.onclick = start
  
  btnPause = document.getElementById("pause")
  btnPause.onclick = pause
  btnPause.disabled = true
  
  btnReset = document.getElementById("reset")
  btnReset.onclick = reset
  btnReset.disabled = true

  divTempo = document.getElementById("tempo")
}

function update(){
  tempo = tempo + 0.1
  divTempo.innerHTML = tempo.toFixed(1) + "s"
}

function start(){
  timerId = setInterval(update, 100)
  btnStart.disabled = true
  btnPause.disabled = false
  btnReset.disabled = false
}
function pause(){
  clearInterval(timerId)
  btnStart.disabled = false
  btnPause.disabled = true
}
function reset(){
  clearInterval(timerId)
  btnStart.disabled = false
  btnPause.disabled = true
  btnReset.disabled = true
  tempo = 0
  divTempo.innerHTML = tempo.toFixed(1) + "s"
  
}