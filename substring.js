//given a string write an algorith that generates all the substrings of that string
//a ab abc abcd b bc bcd c cd d 

function substrings(str){ 
    //need fix
    var result = [];
    for (let i=0 ; i < str.length ; i++){
        for (let j=i+1 ; j <= str.length ; j++)
        //i need to add i and j 's character from the same string together. 
           result.push(str.substring(i,j));
           //how to create strings and standard library of javascript
    }
    return result;
}
str = 'abcd'
substrings(str)
console.log(substrings(str))