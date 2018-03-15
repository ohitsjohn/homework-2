
const btn = document.querySelectory('#myButton')

btn.addEventListener('click', () => {
    console.log('clicked')

    const el=document.createElement('li')
    el.innerHTML='c++'

    const languages = document.getElementById('languages')
    languages.appendChild(el)
    
})