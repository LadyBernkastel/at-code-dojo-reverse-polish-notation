// The only rule for this file is that you export a function that
// takes in a space separated string input and returns a number

/**
 * @param {string} input
 * @returns {number}
 */
export function rpn(input) {
    var split = input.split(" ");
    var stack = [];

    for(var i = 0; i < split.length ; i++) {
        var currentChar = split[i];

        if(isNaN(currentChar)) {
            stack.push(evaluateStack(currentChar, stack));
        } else {
            stack.push(currentChar);
        }
    }

    return stack.pop();
}

function evaluateStack(operator, stack) {
    var two = stack.pop();
    var one = stack.pop();
    return eval(one + operator + two);
}