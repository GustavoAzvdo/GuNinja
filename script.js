const ninja = document.querySelector('.ninja');
const shuriken= document.querySelector('.shuriken')
const caixa = document.querySelector('.caixa');
const score = document.querySelector('.score');
var cont = 0
var jogar = false

function jogue(){
    return(
        jogar = true
    )
       
}

document.addEventListener("keydown",(espaco) =>{
    if((espaco.code === "Space")){
        jump();
    }
})
const jump = () => {
    ninja.classList.add('jump');
    setTimeout(() =>{
        ninja.classList.remove('jump');  
    },600)
}

const loop = setInterval(() => {
    jogar = false
    const shurikenPosicao = shuriken.offsetLeft;
    const caixaPosicao = caixa.offsetLeft;
    const ninjaPosicao = +getComputedStyle(ninja).bottom.replace('px','');
     console.log(ninjaPosicao) 

    if(caixaPosicao <= 90 && caixaPosicao > 0 && ninjaPosicao < 70 ){
      
        jogar = true
        

        shuriken.style.animation = 'none';
        shuriken.style.left = `${shurikenPosicao}px`;

        caixa.style.animation = 'none';
        caixa.style.left = `${caixaPosicao}px`;

        ninja.style.animation = 'none';
        ninja.style.bottom  = `${ninjaPosicao}px` 

        ninja.src = './fotos/game-over-2.gif'
        
        
        clearInterval(loop)
        
       function gameover(){
        alert('gameover') 
        
       }
       setTimeout(gameover,100)
       setInterval(loop)
     
    }
    else if(shurikenPosicao <= 85 && shurikenPosicao > 0 && (ninjaPosicao >= 65)){

        shuriken.style.animation = 'none';
        shuriken.style.left = `${shurikenPosicao}px`;

        caixa.style.animation = 'none';
        caixa.style.left = `${caixaPosicao}px`;
        
        ninja.style.animation = 'none';
        ninja.style.bottom  = `${ninjaPosicao}px` 

        ninja.src = './fotos/game-over-2.gif'
        
        
        clearInterval(loop)
        
       function gameover(){
        alert('gameover') 
        jogar = false
       }
       setTimeout(gameover,100)
       setInterval(loop)
    }
    else{
        
        cont++; //pontuacao por tempo
        score.innerHTML = `SCORE: ${cont}`
    }

},10)

