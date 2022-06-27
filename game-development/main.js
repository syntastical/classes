const scale = 3;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

let hero = new Image();
hero.src = 'hero.png';
// hero.onload = function() {
//     init();
// };

let tiles = new Image();
tiles.src = 'castle.png';
tiles.onload = function() {
    init();
};

let canvas = document.getElementById('scene');
let ctx = canvas.getContext('2d');

function drawCharacter(spriteIndexX, spriteIndexY, x, y) {
    ctx.drawImage(hero, width * spriteIndexX, height * spriteIndexY, width, height, x, y, scaledWidth, scaledHeight);
}

function drawTile(tileIndexX, tileIndexY, x, y) {
    ctx.drawImage(tiles, tileIndexX * 32, tileIndexY * 32, 32, 32, x * 32, y * 32, 32, 32);
}

window.addEventListener("keypress", keypress);