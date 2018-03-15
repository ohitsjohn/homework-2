const btn = document.querySelectory('#myButton')

function addLang() {
    console.log('addLang called')
    const el=document.createElement('li')
    el.innerHTML='C++'

    const languages = document.getElementById('languages')
    languages.appendChild(el) 
}

btn.addEventListener('click', addLang
