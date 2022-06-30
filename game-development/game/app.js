// Fill in the nested array below to create a grid of tiles that will be used as a map
let map = [
    [],
    [],
    []
]
let player = {
    x: 0,
    y: 0,
    direction: 0,
    step: 0
}

function init() {
    update();
}

function update() {

    // FAKE CODE START
    for(let x = 0; x < 20; x++) {
        for(let y = 0; y < 15; y++) {
            drawTile(0, 11, x, y);
        }
    }

    drawTile(2, 11, 5, 5);
    drawTile(2, 11, 6, 5);
    drawTile(2, 11, 5, 6);
    drawTile(2, 11, 17, 6);
    drawTile(2, 11, 17, 7);
    drawTile(2, 11, 17, 8);
    //FAKE CODE END

    drawCharacter(player.step, player.direction, player.x, player.y);
}

// drawCharacter(spriteIndexX, spriteIndexY, positionX, positionY)
// drawTile(tileIndexX, tileIndexY, positionX, positionY)
function keypress(event) {
    // Prevent the browser from doing what it normally would do with the keypress
    event.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Console log the event so we can see what's happening
    console.log(event);

    if(event.key.toLowerCase() === 'w') {
        // up
        player.direction = 1
    }
    if(event.key.toLowerCase() === 'a') {
        // left
        player.direction = 2;
    }
    if(event.key.toLowerCase() === 's') {
        // down
        player.direction = 0;
    }
    if(event.key.toLowerCase() === 'd') {
        // right
        player.direction = 3;
    }
    update();

}