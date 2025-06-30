const display = document.getElementById('calc-display');
const buttons = document.querySelectorAll('.calculator .buttons button');
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

let expression = '';

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const val = btn.textContent;

        if (val === 'C') {
            expression = '';
            display.value = '';
        }
        else if (val === '=') {
            try {
                expression = eval(expression);
                display.value = expression;
                expression = expression.toString();
            } catch (e) {
                display.value = "Invalid";
                expression = '';
            }
        }
        else {
            expression += val;
            display.value = expression;
        }
    });
});

// Handle keyboard events
document.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <=9 ||
        e.key==='+' ||
        e.key==='-' ||
        e.key==='*' ||
        e.key==='/' ||
        e.key==='.')
    {
        expression += e.key;
        display.value = expression;
    }
    else if (e.key==='Enter') {
        try {
            expression = eval(expression);
            display.value = expression;
            expression = expression.toString();
        } catch (e) {
            display.value = "Invalid";
            expression = '';
        }
    }
    else if (e.key==='Backspace') {
        expression = expression.slice(0, -1);
        display.value = expression;
    }
    else if (e.key==='Escape') {
        expression = '';
        display.value = '';
    }
});

// Handle dark and light theme
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
});
