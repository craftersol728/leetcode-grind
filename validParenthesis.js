var isValid = function(s) {

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let currentChar = s.charAt(i);

        if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
            stack.push(currentChar);
        } else if (currentChar === ')' || currentChar === '}' || currentChar === ']') {
            if (stack.length === 0) {
                return false;
            }
            let topElement = stack.pop();

            if ((currentChar === ')' && topElement !== '(') ||
                (currentChar === '}' && topElement !== '{') ||
                (currentChar === ']' && topElement !== '[')) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
