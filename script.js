const matched = document.getElementById('matched');
const notMatched = document.getElementById('not-matched');


function getPin(){
    const random = Math.random()*10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}


const generatePinBtn = document.getElementById('generate-pin-btn');
generatePinBtn.addEventListener('click', function(){
    getPin();
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
})


const digitContainer = document.getElementById('digits-container');
digitContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;
    const typedPin = document.getElementById('typed-pin');
    if (isNaN(digit)){
        if (digit == 'C'){
            typedPin.value = '';
        }
    }
    else{
        typedPin.value = typedPin.value + digit;
    }
})


function verifyPin(){
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin){
        matched.style.display = "block";
        notMatched.style.display = "none";
    }
    else {
        notMatched.style.display = "block";
        matched.style.display = "none";
    }
}


const verifyBtn = document.getElementById('verify-btn');
verifyBtn.addEventListener('click', function(event){
    verifyPin();
    event.stopPropagation();
})