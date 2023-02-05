let hamburgerMenuBtn = document.getElementById(`hamburgerMenuBtn`)
let offcanvasContent = document.getElementsByClassName(`offcanvas`)
let offcanvasCloseBtn = document.getElementById(`offcanvas-close-btn`)

function openOffcanvas(e) {
    e.preventDefault()
    offcanvasContent[0].classList.add(`show`)
}

function closeOffcanvas (e) {
    e.preventDefault()
    offcanvasContent[0].classList.remove(`show`)
}

hamburgerMenuBtn.addEventListener(`click`, openOffcanvas)

offcanvasCloseBtn.addEventListener(`click`, closeOffcanvas)
