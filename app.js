let areaImg = document.querySelector(".header");
let campoText = document.querySelector('#campo');
let campoValue = document.querySelector('.valorDigitado');
let catching = "";
let naruto = document.querySelector('.naruto');
let itachi = document.querySelector('.itachi');
let sakura = document.querySelector('.sakura');
let sasuke = document.querySelector('.sasuke');
let kakashi = document.querySelector('.kakashi');

naruto.addEventListener('click', function(){
    removeImg()
    areaImg.classList.add('naruto')
});


itachi.addEventListener('click', function(){
    removeImg()
    areaImg.classList.add('itachi')
});

sakura.addEventListener('click', function(){
    removeImg()
    areaImg.classList.add('sakura')
});

sasuke.addEventListener('click', function(){
    removeImg()
    areaImg.classList.add('sasuke')
});

kakashi.addEventListener('click', function(){
    removeImg()
    areaImg.classList.add('kakashi')
});

let removeImg = () => {
    areaImg.classList.remove('naruto')
    areaImg.classList.remove('itachi')
    areaImg.classList.remove('sakura')
    areaImg.classList.remove('sasuke')
    areaImg.classList.remove('kakashi')
}

function getValue() {
    catching = campoText.value;
    campoValue.innerHTML = catching
};