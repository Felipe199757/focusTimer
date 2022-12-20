export default function(){
  const forestAudio = new Audio('../audio/Floresta.wav')
const coffeeAudio = new Audio('../audio/Cafeteria.wav')
const rainAudio = new Audio('../audio/Chuva.wav')
const fireAudio = new Audio('../audio/Lareira.wav')

forestAudio.loop = true
coffeeAudio.loop = true
rainAudio.loop = true
fireAudio.loop = true

  return {
    forestAudio, 
    coffeeAudio,
    rainAudio,
    fireAudio
  }
}