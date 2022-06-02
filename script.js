

let box = document.getElementById('box');
boxRect = box.getBoundingClientRect();
let ball = document.getElementById('ball')
ball.setAttribute('class', 'theBall');
let rect = ball.getBoundingClientRect();
ball.style.position = 'relative';
ball.style.transition = '3s';
console.log(ball);


setInterval(function magic(){
    let righty = boxRect.right - 57;

    if ( rect.x === 9) {
        rect.x = 850;
        ball.style.left = righty+'px'
        ball.style.transform = 'rotate(1000deg)'

    }
    else if (rect.x === 850){
        console.log('jhdsjhkdhjbkdqs');
        rect.x = 9; 
        ball.style.left = boxRect.left+'px'
        ball.style.transform = 'rotate(0deg)'
    }
}, 3000);


// changing spiritual animal
let animal = document.querySelector('.column');
animal.innerHTML = "";
function edit() {
    let h3 = document.createElement('h3');
    h3.innerHTML = ('Spiritual animal')
    let pOne = document.createElement('p');
    pOne.innerHTML = ('lion');
    let pTwo = document.createElement('p');
    pTwo.innerHTML = ('bcuse lion is cool AF like Mo');
    let img = document.createElement('img')
    img.src = ('https://upload.chatsdumonde.com/img_global/25-le-chat/les-autres-felins/le-lion-morphologie-alimentation-mode-de-vie/_light-1290_14024-un-magnifique-lion-blanc-adulte-allonge-dans-l-herbe.jpg')
    img.setAttribute('width', '150')
    animal.append(h3, pOne,pTwo, img);
}
console.log(animal);
edit()






