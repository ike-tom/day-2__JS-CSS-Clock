const hoursHand = document.querySelector(".hour-hand")
const minutesHand = document.querySelector(".min-hand")
const secondsHand = document.querySelector(".second-hand")

function countTime() {
    const date = new Date
    hoursHand.style.transformOrigin = 'center right'
    hoursHand.style.transform = 'rotate(' + (date.getHours() + 3) * 30 + 'deg)'
    minutesHand.style.transformOrigin = 'center right'
    minutesHand.style.transform = 'rotate(' + (date.getMinutes() + 15) * 6 + 'deg)'
    secondsHand.style.transformOrigin = 'center right'
    secondsHand.style.transform = 'rotate(' + (date.getSeconds() + 15) * 6 + 'deg)'
}

window.setInterval(countTime, 1000)
