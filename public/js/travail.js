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

// CLIQUER

// calculette.addEventListener('click', (e) => {
//     if (e.target.matches('button')) {
//         console.log(e.target.textContent);
//     }
// })

// calculette.addEventListener('click', (e) => {
//     ecran.innerText = e.target.innerText
// })

calculette.addEventListener('click', (e) => {
    let key = e.target
    let keyContent = key.textContent
    let displayedNum = ecran.textContent
    if (key.matches('button')) {
        if (key.value === 'add' || key.value === 'subtract' || key.value === 'multiply' || key.value === 'divide') {
            console.log(key.value);
        } else if (key.value === 'calculate') {
            console.log(key.value);
        } else if (key.value === 'clear') {
            console.log(key.value);
        } else {
            if (displayedNum === '0') {
                ecranP.textContent = keyContent
            } else {
                ecranP.textContent = displayedNum + keyContent
            }
        }
    }
});



