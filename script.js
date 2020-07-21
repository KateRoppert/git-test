document.addEventListener('DOMContentLoaded', (event) => {
    const list = document.querySelector('#list');

    list.addEventListener('click', event => {
        if (event.target.tagName == "LI") {
                event.target.style.fontSize = '25px';
    }
});
});
