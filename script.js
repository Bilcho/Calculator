const buttons = document.querySelectorAll("button");
const input = document.getElementById("input");

let operator = "off";
let moving = "";

let numbers = [];
let temp;

/*




*/

for (let i = 0; i < buttons.length; i++) {
    
    if (buttons[i].value === "=") {
        buttons[i].addEventListener('click', () => {

            for (let i = 0; i < input.value.length; i++) {

                if (input.value[i] === "-" || input.value[i] === "+" || input.value[i] === "/" || input.value[i] === "*") {

                    numbers.push(moving);
                    numbers.push(input.value[i]);
                    moving = "";

                } else if (i === input.value.length - 1) {

                    moving += input.value[i];
                    numbers.push(moving);
                    moving = "";

                } else {
                    moving += input.value[i];
                }
                
            };

            for (let i = 0; i < numbers.length; i++) {

                if (numbers[i] === "*") {
                    temp = parseFloat(numbers[i - 1]) * parseFloat(numbers[i + 1]);
                    numbers.splice(i - 1, i + 1, temp);
                };

            };

            for (let i = 0; i < numbers.length; i++) {

                    if (numbers[i] === "/") {
                        temp = parseFloat(numbers[i - 1]) / parseFloat(numbers[i + 1]);
                        numbers.splice(i - 1, i + 1, temp);
                    };

                };

            for (let i = 0; i < numbers.length; i++) {

                if (numbers[i] === "+") {
                    temp = parseFloat(numbers[i - 1]) + parseFloat(numbers[i + 1]);
                    numbers.splice(i - 1, i + 1, temp);
                };

            };

            for (let i = 0; i < numbers.length; i++) {

                if (numbers[i] === "-") {
                        temp = parseFloat(numbers[i - 1]) - parseFloat(numbers[i + 1]);
                        numbers.splice(i - 1, i + 1, temp);
                    };

                };

            input.value = numbers[0];
            numbers = [];
                
        
            });
        } else {  
        buttons[i].addEventListener('click', () => {

            if (buttons[i].value === "-" || buttons[i].value === "+" || buttons[i].value === "/" || buttons[i].value === "*") {

                if (operator === "off") {
                    operator = "on";
                    input.value += buttons[i].value;
                };

            } else {
                operator = "off";
                input.value += buttons[i].value;
            }
        });
    }
};

//


