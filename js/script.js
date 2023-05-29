//funzione per creare square
function squareGen(number){
    let square = document.createElement('div');
    square.classList.add('square')
    square.textContent = number
    return square
}

//scelta della difficoltà
const difficulty = document.getElementById('difficulty');
let difficulty_value;

//evento scelta difficoltà
difficulty.addEventListener('change', function(){
    //recupero valore difficoltà
    difficulty_value= parseInt(difficulty.value);
    console.log(difficulty_value)
    
})  

    //evento bottone che crea il grid
    const btn= document.getElementById('btn').addEventListener('click',function(){
        const grid= document.getElementById('grid');
        grid.innerHTML="";

        for(let i=1; i<= difficulty_value; i++){
            let square = squareGen(i);
            grid.append(square);
            //grid in base alla difficoltà
            if(difficulty_value === 100){
                square.classList.add('easy');
            } else if (difficulty_value ===81){
                square.classList.add('medium')
            } else{
                square.classList.add('hard')
            }
            square.addEventListener('click', function(){
                this.classList.toggle('clicked');
            })
            
        }
        grid.classList.remove('none');
        grid.classList.add('appear');

    });
