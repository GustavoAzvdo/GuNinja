const ninja = document.querySelector('.ninja');
const jump = () => {
    ninja.classList.add('jump');
    setTimeout(() =>{
        ninja.classList.remove('jump');  
    },650)
}
document.addEventListener('keydown', jump);