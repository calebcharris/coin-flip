const loveButton = document.getElementById("love")
const answerArea = document.querySelector(".result-container")
const krin = "Krinson"
let loveMessage

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let resultIndex = 0
let resultPrevious = 0
let resultPrint
let resultPreviousPrint

const resultOverflow = () => {
    if (resultIndex == resultPrevious) {
        resultPreviousPrint = resultPrint
        console.log("previous print = " + resultPreviousPrint)
        console.log("previous id =" + resultPreviousPrint + resultPrevious)
    } else if (resultIndex > 6) {
        const result = document.getElementById(resultPreviousPrint + resultPrevious)
        result.remove()
        resultPrevious++
        console.log("previous id =" + resultPreviousPrint + resultPrevious)
    } else {
        console.log("previous id =" + resultPreviousPrint + resultPrevious)
    }
}

const createResults = () => {
    let love = getRandomInt(1, 2)
    console.log(love)
    if (love == 1) {
        resultPrint = 'result:'
        loveMessage = `${krin} does love you`
    } else {
        resultPrint = 'result:'
        loveMessage = `${krin} doesn't love you`
    }
    const resultElement = document.createElement('div')
    resultElement.setAttribute('id', resultPrint + resultIndex)
    resultElement.classList.add('results')
    resultElement.textContent = loveMessage
    answerArea.append(resultElement)
    resultOverflow()
    console.log("index = " + resultIndex)
    resultIndex++
    

}

loveButton.addEventListener("click", createResults)