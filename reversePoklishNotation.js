/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    let numberStack = [];

    for (i=0 ; i<tokens.length ; i++){
        const token = tokens[i];

        if (!isNaN(token)){
            numberStack.push(Number(token));
        } else {
                      
            let num2 = numberStack.pop();
            let num1 = numberStack.pop();
            let result;

            switch(token){
                case '*':
                        result = num1 * num2;
                        break;
                case '+':
                        result = num1 + num2;
                        break;
                case '-':
                        result = num1 - num2;
                        break;
                case '/':
                        result = num1 / num2;
                        result = result > 0? Math.floor(result): Math.ceil(result);
                        break;
                    }
                numberStack.push(result)
            }
        }
        return numberStack.pop();
    }