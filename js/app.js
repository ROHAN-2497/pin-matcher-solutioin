document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;  
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypeNumber = typedNumberField.value;
   if(number === 'C'){
    typedNumberField.value = '';
   }
   else if (number === '<'){
   const digits = previousTypeNumber.split("");
   digits.pop();
   const remainingDigits = digits.join("");
   typedNumberField.value = remainingDigits;}

   else{
    const newTypeNumber = previousTypeNumber + number ;
    typedNumberField.value = newTypeNumber;

   }
})
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    
    const pinSuccessMassege = document.getElementById('pin-success');
    const pinIncorrectMassege = document.getElementById("pin-incorrect");

    if(typedNumber === currentPin){
    pinSuccessMassege.style.display = 'block';
    pinIncorrectMassege.style.display = 'none';
    }
    else{
      pinIncorrectMassege.style.display = 'block'
      pinSuccessMassege.style.display = 'none'
    }
})

