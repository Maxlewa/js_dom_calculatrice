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

// CLIQUER

calculette.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        console.log(e.target.textContent);
    }
    
})




