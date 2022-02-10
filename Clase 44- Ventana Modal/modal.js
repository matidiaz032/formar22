let button = document.querySelector('button')
let modal = document.querySelector('.bg-modal')
let btnClose = document.querySelector('span')

button.addEventListener('click', function(){
    modal.style.display = "flex"
})

btnClose.addEventListener('click', function () {
    modal.style.display = "none"
})