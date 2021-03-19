let order= [];
let clickedOrder= [];
let score =0;
// 0 - verde
// 1 vermelho
// 2 amarelo
// 3 azul

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');
//cria ordem aleatoria de cores
let shuffleOrder =()=>{
    let  colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];
   
   for(let i in order){
       let elementColor = createColorElement(order[i]);
       lightColor(elementColor,Number(i)+1);
   }
}
//acende a proxima cor
let lightColor= (element,number) =>{
    number = number *500;
    setTimeout(()=>{
        element.classList.add('selected');
    },number-250);
    setTimeout(()=>{
        element.classList.remove('selected');
    })
} 
//checa se os botões clicados são os mesmos da ordem ggerada no jogo
let checkOrder = ()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i]!= order[i]){
        gameOver();
          break;
        }
    }
    if(clickedOrder.length ==order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando proximo nivel`);
        nextLevel();
    }
    
}
//função para clique do usuario
let clique = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(( ) =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)
    
}

//criando a função que retorna a cor
let createColorElement = (color) =>{
    if(color ==0){
        return verde;
    }
    else if(color==1){
       return vermelho;
    }else if(color ==2){
        return amarelo;
    }
    else if(color ==3){
        return azul;
    }
    
}
//função para o proximo nivel de jogo
let nextLevel = () =>{
    score++;
    shuffleOrder();

}
//função para game over
let gameOver = ()=>{
    alert(`Pontuação: ${score}\nVocê perdeu o jogo\n clique em OK para jogar novamente`);
    order = [];
    clickedOrder =[];
    playGame();
}
//função de inicio do jogo
let playGame =()=>{
    alert(`Bem vindo ao Genesis! Inciando novo jogo!`);
    score = 0;
    nextLevel();

}
//eventos de clique
verde.onclick = () => clique(0);
vermelho.onclick = () => clique(1);
amarelo.onclick= () => clique(2);
azul.onclick = () => clique(3);


playGame();