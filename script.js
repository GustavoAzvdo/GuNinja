const ninja = document.querySelector('.ninja');                     //variaveis constantes 
const shuriken= document.querySelector('.shuriken')
const caixa = document.querySelector('.caixa');
const score = document.querySelector('.score');
const musica = document.querySelector('.musica');
var cont = 0

var jogar = false;  
//Adicionando o evento 'jump' na tecla 'Space' do teclado
document.addEventListener("keydown", (espaco) =>{
    if((espaco.code === "Space")){
        jump();
    }    
     musica.muted = false    //Apertando o espaço a musica ira começar.
})


//Criando a variavel(const) 'jump' onde ele iniciará o comando e logo após ele vai remover para conseguir add denovo
const jump = () => {    
    ninja.classList.add('jump');
    setTimeout(() =>{
        ninja.classList.remove('jump');  
    },600) //Tempo de execução
}


const loop = setInterval(() => {
    
    const shurikenPosicao = shuriken.offsetLeft;
    const caixaPosicao = caixa.offsetLeft;
    const ninjaPosicao = +getComputedStyle(ninja).bottom.replace('px','');
     console.log(ninjaPosicao) 

    if(caixaPosicao <= 90 && caixaPosicao > 0 && ninjaPosicao < 70 ){
      
        shuriken.style.animation = 'none';
        shuriken.style.left = `${shurikenPosicao}px`;

        caixa.style.animation = 'none';
        caixa.style.left = `${caixaPosicao}px`;

        ninja.style.animation = 'none';
        ninja.style.bottom  = `${ninjaPosicao}px` 

        ninja.src = './fotos/morte.gif'
        ninja.style.width = "130px"
        ninja.style.marginLeft = "3px"
        
        
        
        clearInterval(loop)
        
       function gameover(){
            var alerta = alert(`GAMEOVER! A sua pontuação foi de ${cont}`)
            
                location.reload();
            
            
        }
       setTimeout(gameover,100)
       setInterval(loop)

       
     
    }
    else if(shurikenPosicao <= 85 && shurikenPosicao > 0 && (ninjaPosicao >= 65 && ninjaPosicao < 120)){

        
        shuriken.style.animation = 'none';
        shuriken.style.left = `${shurikenPosicao}px`;

        caixa.style.animation = 'none';
        caixa.style.left = `${caixaPosicao}px`;
        
        ninja.style.animation = 'none';
        ninja.style.bottom  = `${ninjaPosicao}px` 

        ninja.src = './fotos/morte.gif'
        ninja.style.width = "130px"
        ninja.style.marginLeft = "3px"
      
        
        
        clearInterval(loop)
        
        function gameover(){
            var alerta = alert(`GAMEOVER! A sua pontuação foi de ${cont}`) 
            
                location.reload();
            
           
        }
       setTimeout(gameover,100)
       setInterval(loop)

       
       
    }
    else{
        
        cont++; //pontuacao por tempo
        score.innerHTML = `SCORE: ${cont}`
    }

},10)

 
function sortear(){

    var nn = Math.floor(10 * Math.random() + 1);
        if(nn < 5)
        { 
            document.querySelector(".caixa").style.display = 'block';
            document.querySelector(".shuriken").style.display = 'none';
        }
        else if(nn == 5)
        {
            document.querySelector(".caixa").style.display = 'none';
            document.querySelector(".shuriken").style.display = 'block';
        }
        else
        {
            document.querySelector(".caixa").style.display = 'block';
            document.querySelector(".shuriken").style.display = 'block';
                          
        }
}
sortear();
setInterval(function(){sortear()},900); 





