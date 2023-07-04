for(let i=0; i <= 100; i++){
    if(i%3== 0 && i%5==0 ){
        document.getElementById('squaresContainer').innerHTML += `
        <div class="square">
            <p class="text-center text-black fs-5 vertical-align-square color-fizzbuzz">FizzBuzz</p>
        </div>
    `;}
    else if(i%5 == 0){
        document.getElementById('squaresContainer').innerHTML += `
        <div class="square">
            <p class="text-center text-black fs-5  vertical-align-square color-buzz ">Buzz</p>
        </div>
    `;}
    else if(i%3 ==0){
        document.getElementById('squaresContainer').innerHTML += `
        <div class="square">
            <p class="text-center text-black fs-5  vertical-align-square color-fizz ">Fizz</p>
        </div>
    `;}
    else{
        document.getElementById('squaresContainer').innerHTML += `
        <div class="square">
            <p class="text-center text-black fs-5  vertical-align-square color">${i}</p>
        </div>
    `;
    }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    



}