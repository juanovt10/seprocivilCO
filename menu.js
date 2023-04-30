let menu = document.querySelector('#menu_button')
let navbar = document.querySelector('#navigation_bar')

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navbar.classList.toggle('open')
}