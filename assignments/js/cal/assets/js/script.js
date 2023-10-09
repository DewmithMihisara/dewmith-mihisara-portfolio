const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('main_num');
let currentInput = '0';
let calValue='0';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerText;
        if (buttonValue==='C'){
            currentInput = '0';
            calValue="0";
        }else if (buttonValue==='='){
            try {
                let value=calValue+currentInput;
                currentInput = eval(value);
            } catch (error) {
                currentInput = 'Error';
            }
        }else if(buttonValue==='⇦'){
            currentInput = currentInput.slice(0, -1);
            if (currentInput === '') {
                currentInput = '0';
            }
        }else if(buttonValue==='+'|| buttonValue==='-' || buttonValue==='/' || buttonValue==='*'){
            if (currentInput === '0' || currentInput === 'Error') {
                currentInput = buttonValue;
            } else {
                currentInput += buttonValue;
                calValue+=currentInput;
                currentInput='0';
            }
        }else{
            if (currentInput === '0' || currentInput === 'Error') {
                currentInput = buttonValue;
            } else {
                currentInput += buttonValue;
            }
        }
        display.innerText = currentInput;
    });
});