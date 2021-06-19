const pars = document.querySelectorAll('p');
const arrows = document.querySelectorAll('h3 img');

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        pars.forEach(par => {
            par.classList.toggle('active');
        })
    })
})
