import Sound from "./sounds.js"
import { Timer } from "./timer.js"
let timer = Timer({ secondsDisplay, minutesDisplay})


const sound = Sound()

import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"


export default function events(){
  buttonPlay.addEventListener('click', function(){
    timer.countdown()
  })
  buttonStop.addEventListener('click', function(){
    timer.hold()
  })
    

buttonPlus.addEventListener('click', function(){
  minutesDisplay.textContent = String(Number(minutesDisplay.textContent)+5).padStart(2, "0")
})

buttonMinus.addEventListener('click', function(){
  minutesDisplay.textContent = String(Number(minutesDisplay.textContent)-5).padStart(2,"0")
})
buttonForest.addEventListener('click', function(){
  sound.forestAudio.play()
  sound.rainAudio.pause()
  sound.fireAudio.pause()
  sound.coffeeAudio.pause()
  buttonForest.classList.toggle("fill")
  buttonRain.classList.remove("fill")
  buttonCoffeeShop.classList.remove("fill")
  buttonFireplace.classList.remove("fill")
  if(buttonForest.classList.contains("fill")){
    sound.forestAudio.play()   
  }else{
    sound.forestAudio.pause()
  }
})
buttonRain.addEventListener('click', function(){
  buttonRain.classList.toggle("fill")
  sound.forestAudio.pause()
  sound.fireAudio.pause()
  sound.coffeeAudio.pause()
  buttonForest.classList.remove("fill")
  buttonCoffeeShop.classList.remove("fill")
  buttonFireplace.classList.remove("fill")
  if(buttonRain.classList.contains("fill")){
    sound.rainAudio.play()   
  }else{
    sound.rainAudio.pause()
  }
})
buttonCoffeeShop.addEventListener('click', function(){
  sound.coffeeAudio.play()
  sound.fireAudio.pause()
  sound.forestAudio.pause()
  sound.rainAudio.pause()
  buttonCoffeeShop.classList.toggle("fill")
  buttonForest.classList.remove("fill")
  buttonRain.classList.remove("fill")
  buttonFireplace.classList.remove("fill")
  if(buttonCoffeeShop.classList.contains("fill")){
    sound.coffeeAudio.play()   
  }else{
    sound.coffeeAudio.pause()
  }
})
buttonFireplace.addEventListener('click', function(){
  sound.fireAudio.play()
  sound.coffeeAudio.pause()
  sound.forestAudio.pause()
  sound.rainAudio.pause()
  buttonFireplace.classList.toggle("fill")
  buttonForest.classList.remove("fill")
  buttonRain.classList.remove("fill")
  buttonCoffeeShop.classList.remove("fill")
  if(buttonFireplace.classList.contains("fill")){
    sound.fireAudio.play()   
  }else{
    sound.fireAudio.pause()
  }
})

}


