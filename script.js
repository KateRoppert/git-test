const list = document.querySelector('ul');

list.addEventListener('click', ev => {
    if (event.target.tagName == "LI") {
        event.target.style.border = '3px solid rgb(48, 5, 73)';
    }
});