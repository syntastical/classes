
function init() {
    for(let x = 0; x < 20; x++) {
        for(let y = 0; y < 15; y++) {
            drawTile(0, 11, x, y);
        }
    }
    drawCharacter(0,0, 0, 0);
}

function keypress(event) {
    // Prevent the browser from doing what it normally would do with the keypress
    event.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Console log the event so we can see what's happening
    console.log(event);

    for(let x = 0; x < 20; x++) {
        for(let y = 0; y < 15; y++) {
            drawTile(0, 11, x, y);
        }
    }

    if(event.key.toLowerCase() === 'w') {
        // up
        drawCharacter(0,1, 0, 0);
    }
    if(event.key.toLowerCase() === 'a') {
        // left
        drawCharacter(0,2, 0, 0);
    }
    if(event.key.toLowerCase() === 's') {
        // down
        drawCharacter(0,0, 0, 0);
    }
    if(event.key.toLowerCase() === 'd') {
        // right
        drawCharacter(0,3, 0, 0);
    }


}