const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll('span');
for (let span of spans) {
    span.style.color = colors.shift();
}