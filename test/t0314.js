const btn = document.querySelectory('#myButton')

function addLang(e) {
    console.log('addLang called ${e}')
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
