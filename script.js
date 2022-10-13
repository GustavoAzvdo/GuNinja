const ninja = document.querySelector('.ninja');                     //variaveis constantes dos objetos do codigo. 
const shuriken= document.querySelector('.shuriken')
const caixa = document.querySelector('.caixa');
const score = document.querySelector('.score');
const musica = document.querySelector('.musica');
var cont = 0 //SEU SCORE
 
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

//Esse 'loop' é feito para ele ver oque vai acontecer caso ocorra a colisão com o objeto ou a passagem do mesmo.
const loop = setInterval(() => {
    
    const shurikenPosicao = shuriken.offsetLeft; //Limite da imagem no canto esquerdo do game board.
    const caixaPosicao = caixa.offsetLeft;
    const ninjaPosicao = +getComputedStyle(ninja).bottom.replace('px',''); //Retiramos o 'px' para o melhor entendimento do código.
     
    //Sistema de colisão com a caixa 
    //Caso seja atingindo, a animação vai parar.
    if(caixaPosicao <= 90 && caixaPosicao > 0 && ninjaPosicao < 70 ){
      
        shuriken.style.animation = 'none';
        shuriken.style.left = `${shurikenPosicao}px`;

        caixa.style.animation = 'none';
        caixa.style.left = `${caixaPosicao}px`;

        ninja.style.animation = 'none';
        ninja.style.bottom  = `${ninjaPosicao}px` 

        ninja.src = './fotos/morte.gif' //Quando o personagem colide, aparecerá um gif de morte.
        ninja.style.width = "130px"
        ninja.style.marginLeft = "1px" //Distancia do gif com o objeto que ele colidiu.
        
        
        
        clearInterval(loop)
       // Função 'gameover' = Caso o personagem morra, mostrará uma mensagem falando do seu score 
       function gameover(){
            var alerta = alert(`GAMEOVER! A sua pontuação foi de ${cont}`)
            
                location.reload(); //Reinicia a paginá para o proximo jogo comecar automaticamente.
            
            
        }
       setTimeout(gameover,100) //A mensagem de score aparecera 100ms dps de morrer, ele tem esse tempo por causa do tempo de inicialização do gif de morte.
       setInterval(loop)

       
     
    }
    //Sistema de colisão com a shuriken.
    //Caso seja atingindo, a animação vai parar.
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
    //Caso você continue vivo, o seu score aumentará em cada segundo(10 em 10)
    else{
        
        cont++; //pontuacao por tempo
        score.innerHTML = `SCORE: ${cont}`
    }

},10)

//Ele vai sortear qual obstaculo irá vir, dependedo do valor da variavel 'nn'.
function sortear(){

    var nn = Math.floor(10 * Math.random() + 1);
        if(nn < 5) //Se 'nn' for menor que 5, ira vir a caixa 
        { 
            document.querySelector(".caixa").style.display = 'block';  
            document.querySelector(".shuriken").style.display = 'none';
        }
        else if(nn == 5)//Se 'nn' for igual a 6, ira vir a shuriken
        {
            document.querySelector(".caixa").style.display = 'none';
            document.querySelector(".shuriken").style.display = 'block';
        }
        else //Se 'nn' não for nenhuma das situações acima, os dois obstaculos virão.
        {
            document.querySelector(".caixa").style.display = 'block';
            document.querySelector(".shuriken").style.display = 'block';
                          
        }
}
sortear(); //Função sortear realizada a cada 900ms,ou seja, a cada 900ms irá vir um obstáculo aleatoriamente.
setInterval(function(){sortear()},900); 





