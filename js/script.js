//funzione per creare square
function squareGen(number){
    let square = document.createElement('div');
    square.classList.add('square')
    square.textContent = number
    return square
}

//funzione numero random

function randomNumber(min,max){
    return Math.floor(Math.random()* (max - min +1) + min);
};

//funzione per riempire l'array bombe
    let rNumber= null;
    let bombArray;
    function fullArrayBomb(max){
    bombArray =[]
    
     while (bombArray.length <16){
         rNumber = randomNumber(1,max);
        
         if(!bombArray.includes(rNumber)){
            bombArray.push(rNumber)
         }
     }
     return bombArray;
}

//scelta della difficoltà
const difficulty = document.getElementById('difficulty');
let difficulty_value= 100;

//evento scelta difficoltà
difficulty.addEventListener('change', function(){
   
//recupero valore difficoltà
difficulty_value= parseInt(difficulty.value);
})  

    //evento bottone che crea il grid
const btn= document.getElementById('btn').addEventListener('click',function(){
    const grid= document.getElementById('grid');
    grid.innerHTML="";
    
    //messaggio fine partita
    let message = document.getElementById('result');
    message.classList.add('none')
    
    //array bombe vuoto
    let bombArray= fullArrayBomb(difficulty_value)
    console.log(bombArray)
    
    //variabile che setta il gameOver
    let gameOver= false
    
    // numero di caselle non contenenti bombe
    let rightClick = 0


    for(let i=1; i<= difficulty_value; i++){
        let square = squareGen(i);
        grid.append(square);
        //grid in base alla difficoltà
        if(difficulty_value === 100 ){
            square.classList.add('easy');
        } else if (difficulty_value ===81){
            square.classList.add('medium')
        } else{
            square.classList.add('hard')
        }

        //evento click cella
        let clickedSquares= [];
        
        square.addEventListener('click', function(){

            if(!gameOver && !clickedSquares.includes(this)){
                
                if(!bombArray.includes(parseInt(this.innerText))){
                    this.classList.toggle('clicked');
                    rightClick++;
                    clickedSquares.push(this)
                    if(rightClick === difficulty_value - 16){
                    message.classList.remove('none');
                    message.classList.add('block');
                    message.innerText= 'Complimenti, hai vinto!!';
                    gameOver= true;}
                } else{
                    this.classList.toggle('bomb');
                    message.classList.remove('none');
                    message.classList.add('block');
                    message.innerText= `Mi dispiace, hai perso, il tuo punteggio è ${rightClick}`;
                    gameOver= true;
                    

                    //ciclo for per far scoprire tutte le bombe alla sconfitta
                    let bombsCells= document.getElementById('grid').children
                    for(let i=0; i< bombsCells.length; i++){
                        let  number = parseInt(bombsCells[i].innerText);
                        console.log(number)

                        if(bombArray.includes(number)){
                            bombsCells[i].classList.add('bomb')
                        }
                    }
                    
                }
            }
        })
    }
    grid.classList.remove('none');
    grid.classList.add('appear');

});
