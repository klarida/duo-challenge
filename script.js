

let box = document.getElementById('box');
boxRect = box.getBoundingClientRect();
let ball = document.getElementById('ball')
ball.setAttribute('class', 'theBall');
let rect = ball.getBoundingClientRect();
ball.style.position = 'relative';
ball.style.transition = '3s';
ball.style.margin = '1px';


setInterval(function magic(){
        let righty = boxRect.right - 57;

        if ( rect.x === 9) {
            rect.x = 850;
            ball.style.left = righty+'px'
            ball.style.transform = 'rotate(1000deg)'
        }
        else if (rect.x === 850){
            rect.x = 9; 
            ball.style.left = boxRect.left+'px'
            ball.style.transform = 'rotate(0deg)'
        }
}, 3000);



let cloneys = document.querySelectorAll('theBall');
var run = 0;
let CloneInterval = setInterval(function theMagicTwo(){
    run += 1;
    let clone = ball.cloneNode(true);
    box.append(clone);
    let rectClone = clone.getBoundingClientRect();
    let rightyClone = boxRect.right - 57;

    clone.style.position = 'relative';
    clone.style.transition = '3s';




    if ( rectClone.x === 18) {
        rectClone.x = 871.9939575195312;
        clone.style.left = rightyClone+'px'
        clone.style.transform = 'rotate(1000deg)'
    }
    else if (rectClone.x === 871.9939575195312){
        rectClone.x = 17; 
        clone.style.left = boxRect.left+'px'
        clone.style.transform = 'rotate(0deg)'
    }
    if(run == 5){
        clearInterval(CloneInterval);
    }
},6000);




// changing spiritual animal
let animal = document.querySelector('.column');
animal.innerHTML = "";
function edit() {
    let h3 = document.createElement('h3');
    h3.innerHTML = ('Spiritual animal')
    let pOne = document.createElement('p');
    pOne.innerHTML = ('lion');
    let pTwo = document.createElement('p');
    pTwo.innerHTML = ('because lion is cool AF');
    let img = document.createElement('img')
    img.src = ('https://upload.chatsdumonde.com/img_global/25-le-chat/les-autres-felins/le-lion-morphologie-alimentation-mode-de-vie/_light-1290_14024-un-magnifique-lion-blanc-adulte-allonge-dans-l-herbe.jpg')
    img.setAttribute('width', '150')
    animal.append(h3, pOne,pTwo, img);
}
edit()






