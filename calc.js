// Fetch my variables as users trigger input values
let initialValue = "";
let secondValue = "";
let operatorType = "";

// Declaration of input data types 
const type = {
    numbers: ["0","1","2","3","4","5","6","7","8","9","."],
    operators: ["+", "-", "x", "%", "÷", "+/-"],
    equals: ["="],
    clear: ["c"],
}

// Add Function 
const add = (var1, var2) => {
    let ans = parseFloat(var1) + parseFloat(var2);
    return ans;
}

// Minus Function 
const minus = (var1, var2) => {
    let ans = parseFloat(var1) - parseFloat(var2);
    return ans;
}

// Multiply Function 
const multiply = (var1, var2) => {
    let ans = parseFloat(var1) * parseFloat(var2);
    return ans;
}

// Entry Point
const start = () => {
    
    // First call To Screen Function to display 0 as initial calculator value;
    toScreen(0);

    // OnClick Calculator Buttons.
    $(".main-calculator .buttons button").on("click", function () {
        // Get the value of the clicked button
        let value = $(this).attr("req");
        let toScreenValue = "0";
        
        // LOGIC: Check for the type of the button value if numbers.
        if (type.numbers.includes(value)) {
            
            // Logic for Initial Value 
            if(operatorType == ""){
                if(initialValue.length == 11)
                    return false;
                if(initialValue == "0")
                    initialValue = "";
                if(value == "." && initialValue.includes("."))
                    return false;
                if( value != "." || (value == "." && !initialValue.includes(".")) )
                    toScreenValue = initialValue += ""+value;
            
            // Logic for second Value 
            } else {
                if(secondValue.length == 11)
                    return false;
                if(secondValue == "0")
                    secondValue = "";
                if(value == "." && secondValue.includes("."))
                    return false;
                if( value != "." || (value == "." && !secondValue.includes(".")) )
                    toScreenValue = secondValue += ""+value;
            }

        // LOGIC: Check for the type of the button value if operators.
        } else if (type.operators.includes(value)) {

            if(initialValue == "")
                initialValue = "0";
            operatorType = ""+value;
            toScreenValue = initialValue;

        // LOGIC: Check for the type of the button value if equals.
        } else if (type.equals.includes(value)) {

            if(initialValue == "" || secondValue == "")
                return false;

            if(operatorType == "+"){
                let ans = add(initialValue, secondValue);
                toScreenValue = ans;
            }
            if(operatorType == "-"){
                let ans = minus(initialValue, secondValue);
                toScreenValue = ans;
            }
            if(operatorType == "x"){
                let ans = multiply(initialValue, secondValue);
                toScreenValue = ans;
            }
            initialValue = "";
            secondValue = "";
            operatorType = "";

        // LOGIC: Check for the type of the button value if clear.
        } else if (type.clear.includes(value)) {

            toScreenValue = "0";
            if(secondValue.length){
                secondValue = "";
                toScreenValue = initialValue;
            } else if(initialValue.length)
                initialValue = "";
            operatorType = "";

        }
        
        // After All Logic Send to Screen 
        toScreen(toScreenValue);
    })

}

// To Screen Function
// This function send output to the calculator screen
const toScreen = (x) => {
    $(".main-calculator .screen input").val(x);
}

// Entry Point
// -- This action is called after page loads and DOM is ready
// -- This is the first point of action on the app
// -- Other actions are triggered by On Click Event.
$(document).ready(start);