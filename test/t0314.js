const lb=document.querySelector('a')
lb.addEventListener('click', () => {
    console.log('the Link is clicked')
    e.stopPropagation()
    e.preventDefault()
    window.location='http://www.google.com'
})

const btn = document.querySelector('#myButton')

function addLang(e) {
    console.log('addLang called')
    const el=document.createElement('li')
    el.innerHTML='C++'

    const languages = document.getElementById('languages')
    languages.appendChild(el) 
    e.stopPropagation()
}

btn.addEventListener('click', addLang)


function mouseEventHandler(e) {
    const mouseInfo = 'click location:  X ${e.clienX}  Y ${e.clientY}'
    console.log(mouseInfo)
}

document.addEventListener('click', mouseEventHandler)






const addBtn = document.querySelector('#addBtn')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const output = document.getElementById('output')

addBtn.addEventListener('click', () => {
    const val1 = num1.value
    const val2 = num2.value
    const sum = parseInt(val1, 10) + parseInt(val2, 10)
    output.innerHTML = sum

})
