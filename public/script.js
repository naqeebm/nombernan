const canv = document.getElementById('canv');
const ctx = canv.getContext('2d');

const h = window.innerHeight;
const w = window.innerWidth;

canv.height = h;
canv.width = w;

ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, w, h);
