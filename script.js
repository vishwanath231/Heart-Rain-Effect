const rainDiv = document.querySelector('.rain');
const startEffect = document.querySelector('.start');
const stopEffect = document.querySelector('.stop');

stopEffect.classList.add('active');

startEffect.addEventListener('click', () => {
    rainDiv.classList.remove('active');
    stopEffect.classList.remove('active');
    startEffect.classList.add('active');
    setInterval(createHeart, 300);
})

function createHeart(){

    const heart = document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 +"s";

    rainDiv.appendChild(heart);

    setTimeout(() => {
        heart.remove();   
    }, 5000);

}

stopEffect.addEventListener('click', () => {
    startEffect.classList.remove('active');
    stopEffect.classList.add('active')
    rainDiv.classList.add('active');
})




