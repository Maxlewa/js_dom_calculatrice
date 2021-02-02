// CHIFFRES

let neuf = document.querySelector('#neuf')
let huit = document.querySelector('#huit')
let sept = document.querySelector('#sept')
let six = document.querySelector('#six')
let cinq = document.querySelector('#cinq')
let quatre = document.querySelector('#quatre')
let trois = document.querySelector('#trois')
let deux = document.querySelector('#deux')
let un = document.querySelector('#un')
let zero = document.querySelector('#zero')

let chiffre = document.querySelector('.chiffre')

// OPERATIONS

let plus = document.querySelector('#plus')
let moins = document.querySelector('#moins')
let fois = document.querySelector('#fois')
let division = document.querySelector('#division')

// CLEAR

let clear = document.querySelector('#clear')

// CALCULETTE 

let calculette = document.querySelector('#calculette')

// ECRAN

let ecran = document.querySelector('#ecran')

let calculer = (n1, operator, n2) => {
    let result = ''
    if (operator === "add") {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === "subtract") {
        result  = parseFloat(n1) - parseFloat(n2)
    } else if (operator === "multiply") {
        result  = parseFloat(n1) * parseFloat(n2)
    } else if (operator === "divide") {
        result  = parseFloat(n1) % parseFloat(n2)
    }
    if (result == '69') {
        calculette.setAttribute('style', 'background-color: black;')
    } else if (result == '666') {
        calculette.setAttribute('style', 'background-color: red;')
    } else if (result == '420') {
        calculette.setAttribute('style', 'background-color: green;')
    }
    return result
}

calculette.addEventListener('click', (e) => {
    let key = e.target
    let keyContent = key.textContent
    let displayedNum = ecran.textContent
    if (key.matches('button')) {
        if (key.value === 'add' || key.value === 'subtract' || key.value === 'multiply' || key.value === 'divide') {
            calculette.dataset.previous = 'monoperateur'
            calculette.dataset.firstValue = displayedNum
            calculette.dataset.operator = key.value
        } else if (key.value === 'calculate') {
            let firstValue = calculette.dataset.firstValue
            let operator = calculette.dataset.operator
            let secondValue = displayedNum
            ecran.innerText = calculer (firstValue, operator, secondValue)
        } else if (key.value === 'clear') {
            ecran.innerText = 0
            calculette.removeAttribute('data-first-value')
            calculette.removeAttribute('data-operator')
        } else if (key.value === 'virgule') {
            ecran.textContent = displayedNum + '.'
        } else {
            if (displayedNum === '0' || calculette.dataset.previous === 'monoperateur') {
                ecran.textContent = keyContent
                calculette.removeAttribute('data-previous')
            } else {
                ecran.textContent = displayedNum + keyContent
            }
        }
    }
});



