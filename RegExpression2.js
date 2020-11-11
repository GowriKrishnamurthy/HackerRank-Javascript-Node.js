'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    /*g-global search, search on input 777.77 will give output 777,77 */   
    let re = /([0-9])+/g;        
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }
}

/*
Complete the function in the editor below by returning a RegExp object,re, that matches every integer in some string s.
Output Format

The function must return a RegExp object that matches every integer in some string s.

Sample Input 0
102, 1948948 and 1.3 and 4.5

Sample Output 0
102
1948948
1
3
4
5

Explanation
When we call match on string  and pass the correct RegExp as our argument, 
it returns the following array of results: [ '102', '1948948', '1', '3', '4', '5' ].

Sample Input 1
1 2 3

Sample Output 1
1
2
3
*/