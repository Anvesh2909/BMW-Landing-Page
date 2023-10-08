let redbtn = document.querySelector('.red');
let bluebtn = document.querySelector('.blue');
let blackbtn = document.querySelector('.black');
let bike = document.querySelector('body')
redbtn.onclick = function(){
   bike.style.backgroundImage = "url(BMW1.png)"
}
bluebtn.onclick = function(){
    bike.style.backgroundImage = "url(BMW2.png)"
}
blackbtn.onclick = function(){
    bike.style.backgroundImage = "url(BMW3.png)"
}