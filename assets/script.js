// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Gabriel Salinas" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = gb + cc + sugar

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
//--const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
//gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
//--console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
//})
let gbTotal = document.querySelector("#qty-gb")
let ccTotal = document.querySelector("#qty-cc")
let sugarTotal = document.querySelector("#qty-sugar")
let overallTotal = document.querySelector("#qty-total")

let gbPlusBtn = document.querySelector("#add-gb")
let gbMinusBtn = document.querySelector("#minus-gb")
let ccPlusBtn = document.querySelector("#add-cc")
let ccMinusBtn = document.querySelector("#minus-cc")
let sugarPlusBtn = document.querySelector("#add-sugar")
let sugarMinusBtn = document.querySelector("#minus-sugar")

function updateGb(displayGbTotal){
    let gbTotal = document.querySelector("#qty-gb")
    gbTotal.textContent = gb
}
function updateCc(displayCcTotal){
    let ccTotal = document.querySelector("#qty-cc")
    ccTotal.textContent = cc
}
function updateSugar(displaySugarTotal){
    let sugarTotal = document.querySelector("#qty-sugar")
    sugarTotal.textContent = sugar
}
function updateQuantity(displayQuantityTotal){
    let overallTotal = document.querySelector("#qty-total")
    overallTotal.textContent = total
}

gbPlusBtn.addEventListener('click', function(){
    ++gb
    ++total
    updateQuantity(total) 
    updateGb(gb) 
})
ccPlusBtn.addEventListener('click', function(){
    ++cc
    ++total
    updateQuantity(total) 
    updateCc(cc) 
})
sugarPlusBtn.addEventListener('click', function(){
    ++sugar
    ++total
    updateQuantity(total) 
    updateSugar(sugar) 
})

gbMinusBtn.addEventListener('click', function(){
    if(gb > 0){
    --gb
    --total}
    updateQuantity(total)
    updateGb(gb) 
})
ccMinusBtn.addEventListener('click', function(){
    if(cc > 0){
    --cc
    --total}
    updateQuantity(total)
    updateCc(cc) 
})
sugarMinusBtn.addEventListener('click', function(){
    if(sugar > 0){
    --sugar
    --total}
    updateQuantity(total)
    updateSugar(sugar) 
})


// TODO: Hook up event listeners for the rest of the buttons