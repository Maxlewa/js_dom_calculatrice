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

export {calculer}