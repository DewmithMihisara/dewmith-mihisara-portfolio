const buttons = $('.btn');
const display = $('main_num');
let currentInput = '0';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerText;
        switch (buttonValue) {
            case 'C':
                currentInput = '0';
                break;
            case '=':
                try {
                    currentInput = eval(currentInput);
                } catch (error) {
                    currentInput = 'Error';
                }
                break;
            case '⇦':
                currentInput = currentInput.slice(0, -1);
                if (currentInput === '') {
                    currentInput = '0';
                }
                break;
            default:
                if (currentInput === '0' || currentInput === 'Error') {
                    currentInput = buttonValue;
                } else {
                    currentInput += buttonValue;
                }
        }
        display.innerText = currentInput;
    });
});