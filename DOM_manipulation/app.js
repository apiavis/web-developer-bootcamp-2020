const button = document.querySelector('button');

const changeColor = () => {
    let rValue = Math.floor(Math.random() * 255);
    let gValue = Math.floor(Math.random() * 255);
    let bValue = Math.floor(Math.random() * 255);
    let newColor = `rgb(${rValue},${gValue},${bValue})`;
    document.body.style.backgroundColor = newColor;
    return;
}

button.addEventListener('click', changeColor);