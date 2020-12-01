const listElements = document.querySelectorAll('li');
for (let item of listElements) {
    item.classList.toggle('highlight');
}