const modal = document.querySelector('#popup'),
    btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    toggleModal(switchClass);
});


function switchClass(modal) {
    modal.classList.toggle('show')
    modal.classList.toggle('hide')
}

function toggleModal(switchClass) {
    switchClass(modal)
    setTimeout(() => {
        switchClass(modal)
    }, 3000);
}

