const header = document.querySelector('header');
const toggleHeader = document.getElementById('toggle_header');

toggleHeader.addEventListener("click", () => {
    if (header.classList.contains('red')) {
        header.classList.remove('red');
        header.classList.add('green');
    } else {
        header.classList.remove('green');
        header.classList.add('red');
    }
})

/**
 * We can also use this kind of logic
 * toggleHeader.addEventListener('click', () => {
 *  header.classList.toggle('red');
 *  header.classList.toggle('green');
});
 */