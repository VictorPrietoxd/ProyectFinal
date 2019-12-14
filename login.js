const chef = document.getElementById('chef');
const cajera = document.getElementById('cajera');
const login = document.getElementById('login')
const background = document.getElementById('background')

chef.addEventListener('click', () => {
    
    let fondo = document.getElementById('fondo')
    fondo.style.opacity = '0.8'
    login.style.visibility = 'visible'
    background.className = 'blocker'
})

cajera.addEventListener('click', () => {
    
    let fondo = document.getElementById('fondo')
    fondo.style.opacity = '0.8'
    login.style.visibility = 'visible'
    background.className = 'blocker'
    
})