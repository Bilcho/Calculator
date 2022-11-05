const buttons = document.querySelectorAll("button");
const input = document.getElementById("input");

let operator = "off";
let moving = "";

let numbers = [];
let temp;
let pointStatus = "off";
let checker = "not checked";
//

function onlyLettersAndNumbers(str) {
    return /^[0-9]*$/.test(str);
  }

//

for (let i = 0; i < buttons.length; i++) {
    
    if (buttons[i].value === "=") {
        buttons[i].addEventListener('click', () => {

            let inputStatus = "okay";

            // This for loop is to check through every index of value, if anything is NaN except arithmetic operations!

            for (let i = 0; i < input.value.length; i++) {

                if (input.value[i] === "-" || input.value[i] === "+" || input.value[i] === "/" || input.value[i] === "*" || input.value[i] === ".") {

                    console.log("Ovo je " + input.value[i]);

                } else {

                    let y = onlyLettersAndNumbers(input.value[i]);
                    console.log(y);

                    if (y == false) {
                        inputStatus = "not okay";
                        input.value = "Error. No Letters!"
                        setTimeout(() => {
                            input.value = "";
                        }, 1000)
                        break;
                    }

                }
            }

            // This loop is for dividing numbers and arithmetic operations into an array

            if (inputStatus === "okay") {

                for (let i = 0; i < input.value.length; i++) {

                    if (input.value[i] === "-" || input.value[i] === "+" || input.value[i] === "/" || input.value[i] === "*") {

                        let assurance = "ready";

                        if (checker === "not checked") {

                            checker = "checked";
                            if (input.value[0] === "+" || input.value[0] === "-") {
                                assurance = "not ready"
                                moving += input.value[i];
                            }

                        } 
                        
                        if (checker === "checked" && assurance === "ready") {

                            numbers.push(moving);
                            numbers.push(input.value[i]);
                            moving = "";

                        }

                    } else if (i === input.value.length - 1) {

                        moving += input.value[i];
                        numbers.push(moving);
                        moving = "";
                        console.log(numbers);

                    } else {
                        moving += input.value[i];
                    }
                    
                };

                // These loops down do the same thing just different arithmetic operation, reason behind dividing it's because of order of operations (rule: PEMDAS)


                // First One: Multiplication

                for (let i = 0; i < numbers.length; i++) {

                    if (numbers[i] === "*") {
                        temp = parseFloat(numbers[i - 1]) * parseFloat(numbers[i + 1]);
                        numbers.splice(i - 1, 3, temp.toString());
                        console.log(numbers);
                        i = 0;
                    };

                };

                // Second One: Division

                for (let i = 0; i < numbers.length; i++) {

                        if (numbers[i] === "/") {
                            temp = parseFloat(numbers[i - 1]) / parseFloat(numbers[i + 1]);
                            numbers.splice(i - 1, 3, temp.toString());
                            console.log(numbers);
                            i = 0;
                        };

                    };

                // Third One: Addition

                for (let i = 0; i < numbers.length; i++) {

                    if (numbers[i] === "+") {
                        temp = parseFloat(numbers[i - 1]) + parseFloat(numbers[i + 1]);
                        numbers.splice(i - 1, 3, temp.toString());
                        console.log(numbers);
                        i = 0;
                    };

                };

                // Last One: Subtraction

                for (let i = 0; i < numbers.length; i++) {

                    if (numbers[i] === "-") {
                            temp = parseFloat(numbers[i - 1]) - parseFloat(numbers[i + 1]);
                            numbers.splice(i - 1, 3, temp.toString());
                            console.log(numbers);
                            i = 0;
                        };

                    };
                
                checker = "not checked";
                console.log(numbers);
                input.value = numbers[0];
                numbers = [];
                
            }
        
            });
        } 
        else if (buttons[i].value === ".") {
            
            buttons[i].addEventListener('click', () => {

                let j = input.value.length - 1;
                if (input.value[j] === "+" || input.value[j] === "-" || input.value[j] === "*" || input.value[j] === "/" || input.value.length === 0) {
                    console.log("Can't do the operation!")
                } else {
                    input.value += buttons[i].value;
                    operator = "on"; // Reason: this will stop from adding any math operation if decimal has 
                }

            })

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



