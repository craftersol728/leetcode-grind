function substrings(str: string): string[] {
    const result: string[] = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.substring(i, j));
        }
    }
    return result;
}

const str: string = 'abcd';
const subStringsArr: string[] = substrings(str);
console.log(subStringsArr);
