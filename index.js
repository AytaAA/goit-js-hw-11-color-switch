const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"]

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const bodyRef = document.body
const buttonStart = document.querySelector('[data-action="start"]')
const buttonStop = document.querySelector('[data-action="stop"]')

let setInt = null

buttonStart.addEventListener("click", () => {
    setInt = setInterval(() => {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000)
    buttonStart.disabled = true
})

buttonStop.addEventListener("click", () => {
    clearInterval(setInt)
    buttonStart.disabled = false
})
