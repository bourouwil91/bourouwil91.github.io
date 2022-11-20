//queries selector to get access to html elements
const userInput = document.querySelector('input');
const message = document.querySelector('.message');
const message1 = document.querySelector('.history');
const submitBtn = document.querySelector('.submitBtn');
const resetBtn = document.querySelector('button');
const score1 = document.querySelector('#score');
const hist1 = document.querySelector('#hist');
const rest = document.querySelector('.reset');
// the function generate a number between 2 numbers
const generateBetweenTwoNumbers = (min = 1, max = 100) => {
    const ran = Math.trunc(Math.random() * (max -min +1))+ min;
    console.log(ran);
    return ran;
}
 let holdRandonNumber = generateBetweenTwoNumbers();

let store = [], sc=10 , his =0;
score1.textContent = sc;
hist1.textContent = his;
// click event listener on the submit button
submitBtn.addEventListener('click', function(){ 
            if(userInput.value <=1 || userInput.value >=100) {
                message.textContent = 'You can only enter number between 1 and 100!';
                message.style.color = 'black';
                message.style.fontSize = '18px';
            }

            else if (Number(userInput.value) === holdRandonNumber){
                his++;
                message.textContent = 'You Win Reset To Play Again';
                message.style.color = 'green';
                message.style.fontSize = '24px';
                hist1.textContent = his;
            }
            
            else if (Number(sc)===0){
                message.textContent = 'You Lost The Game Reset To Play Again';
                message.style.color = 'red';
                message.style.fontSize = '24px';
            }
            else{sc--;
                message.textContent = 'Try Again';
                message.style.color = 'black';
                message.style.fontSize = '24px';
                score1.textContent = sc;
                store.push(userInput.value);
                message1.textContent = store;
            }
    }            
);
// click event listener on the reset button need to be improve
rest.addEventListener('click', function(){ 
    score1.textContent = 10;
    message.textContent = 'Guess a Number';
    message.style.color = 'black';
    message.style.fontSize = '24px';
    message1.textContent = '';
    userInput.value ='';
    refreshPage('index.html');

});
// function that reload the Html file
function refreshPage(){
    window.location.reload();
} 