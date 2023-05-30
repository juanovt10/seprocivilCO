let menu = document.querySelector('.menu_button')
let navbar = document.querySelector('#navigation_bar')

menu.onclick = () => {
    navbar.classList.toggle('open')
}