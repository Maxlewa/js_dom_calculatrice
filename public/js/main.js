import {calculer} from './calculer.js'

// CALCULETTE 

let calculette = document.querySelector('#calculette')

// ECRAN

let ecran = document.querySelector('#ecran')

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