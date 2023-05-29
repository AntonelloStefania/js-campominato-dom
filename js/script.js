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
    bombArray=[]

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
let difficulty_value;

//evento scelta difficoltà
difficulty.addEventListener('change', function(){
    //recupero valore difficoltà
    difficulty_value= parseInt(difficulty.value);
   // console.log(difficulty_value)
    
})  

    //evento bottone che crea il grid
    const btn= document.getElementById('btn').addEventListener('click',function(){
        const grid= document.getElementById('grid');
        grid.innerHTML="";
        
        let emptyBombArray= fullArrayBomb(difficulty_value)
        console.log(emptyBombArray)
       
        //variabile che setta il gameOver
        let gameOver= false
        
        // numero di caselle non contenenti bombe
        let rightClick = 0

       let message = document.getElementById('result')

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
           
            square.addEventListener('click', function(){

                if(!gameOver){
                    
                    if(!bombArray.includes(parseInt(this.innerText))){
                        this.classList.toggle('clicked');
                        rightClick++;
                        if(rightClick === difficulty_value - 16){
                        message.classList.remove('none');
                        message.classList.add('block')
                        message.innerText= 'Complimenti, hai vinto!!';
                        gameOver= true;}
                    } else{
                        this.classList.toggle('bomb');
                        gameOver= true;
                    }
                }
            })
            
        }
        grid.classList.remove('none');
        grid.classList.add('appear');

    });
