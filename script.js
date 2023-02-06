// offcanvas functionality
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

// list group/collapse functionality
let listGroupItems = document.getElementsByClassName(`list-group-item`)
let attainCollapse = document.getElementById(`attain`)
let bestInClassCollapse = document.getElementById(`best-in-class`)
let edibleArrangementsCollapse = document.getElementById(`edible-arrangements`)

function activateListGroupItem (e) {
    e.preventDefault()
    for (let i=0; i < listGroupItems.length; i++) {
        let listItem = listGroupItems[i]
        listItem.classList.remove(`active`)
        listItem.setAttribute(`aria-current`,`false`)
    }
    e.target.classList.add(`active`)
    e.target.setAttribute(`aria-current`,`true`)
    if (e.target.id === `attain-collapse`) {
        attainCollapse.classList.add(`show`)
        bestInClassCollapse.classList.remove(`show`)
        edibleArrangementsCollapse.classList.remove(`show`)
    } else if (e.target.id === `best-in-class-collapse`) {
        attainCollapse.classList.remove(`show`)
        bestInClassCollapse.classList.add(`show`)
        edibleArrangementsCollapse.classList.remove(`show`)
    } else if (e.target.id === `edible-arrangements-collapse`) {
        attainCollapse.classList.remove(`show`)
        bestInClassCollapse.classList.remove(`show`)
        edibleArrangementsCollapse.classList.add(`show`)
    } else {
        console.log(`error`)
    }
}

for (let i = 0; i < listGroupItems.length; i++) {
    listGroupItems[i].addEventListener(`click`, activateListGroupItem)
}

