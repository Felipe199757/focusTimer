export function Timer( {
  secondsDisplay,
  minutesDisplay}
  
){

  let timerTimeOut

  function countdown(){
  timerTimeOut = setTimeout(function(){
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    if(minutes <= 0){
    minutesDisplay.textContent = "00"
    secondsDisplay.textContent = "00"  
      return
    }
    secondsDisplay.textContent = "00"
      if(seconds <= 0){
        seconds = 60
        minutesDisplay.textContent = String(minutes - 1).padStart(2,"0")
      }
        secondsDisplay.textContent = String(seconds - 1).padStart(2,"0")
  countdown()
      },1000)
  
    }

  function hold(){
    clearTimeout(timerTimeOut)
  }
    return { countdown, hold }
}