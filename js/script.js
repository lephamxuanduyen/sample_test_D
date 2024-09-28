const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const exitBtn = document.getElementById('exit-btn')

menuBtn.addEventListener('click', () => menu.classList.remove('hide'))
exitBtn.addEventListener('click', () => menu.classList.add('hide'))