const start = document.querySelector(".start")
const allButton = document.querySelectorAll(".btn-secondary")
const winLose = document.querySelector("h6")


function newGame() {
    start.disabled = false
    console.log(start)
    winLose.textContent = ""
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove("result", "trueOption", "wrongOption")
    }
}

start.addEventListener("click", function () {
    const result = Math.floor(Math.random() * 10)
    let maxOption = 0
    for (let i = 0; i < allButton.length; i++) {

        allButton[i].disabled = false
        allButton[i].addEventListener("click", function () {
            allButton[i].classList.add("wrongOption")
            maxOption++
            if (maxOption > 4) {
                lose()
            }
        })
        if (i === result) {
            allButton[i].classList.add("result")
        }
    }

    const secret = document.querySelector(".result")
    secret.addEventListener("click", function () {
        winLose.textContent = "you win !"
        secret.classList.add("trueOption")
        for (let i = 0; i < allButton.length; i++) {
            allButton[i].disabled = true
            start.disabled = true
        }
    })
})


function lose() {
    winLose.textContent = "you lose !"
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].disabled = true
        start.disabled = true
    }
}