document.body.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowDown':
            console.log('down');
            break;
        case 'ArrowUp':
            console.log('up');
            break;
        case 'ArrowLeft':
            console.log('left');
            break;
        case 'ArrowRight':
            console.log('right');
            break;
        default:
            console.log('ignore');
            break;
    }
});