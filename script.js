

let box = document.getElementById('box');
boxRect = box.getBoundingClientRect();
let ball = document.getElementById('ball')
let rect = ball.getBoundingClientRect();
ball.style.position = 'relative';
ball.style.transition = '3s';
console.log(boxRect);
console.log(rect);
setInterval(function magic(){
    if ( rect.x === 9) {
        rect.x = 850;
        let righty = boxRect.right - 57;
        ball.style.left = righty+'px'
        ball.style.transform = 'rotate(1000deg)'
    }
    else if (rect.x === 850){
        rect.x = 9; 
        ball.style.left = boxRect.left+'px'
        ball.style.transform = 'rotate(0deg)'
    }
}, 3000);






