'use strict';

const fs = require('fs');

let variables = ['\'use strict\';\nlet people = [\'simon\', \'garfunckle\', \'oats\']; \nlet pushedPeople =[];\n people.forEach( el => { \n el.split(\',\');\n pushedPeople.push(el);\n console.log(pushedPeople);\n});'];

let data = Buffer.from('');

let fileWrite = (source) => {
  fs.writeFile('./files/loop.js', source, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been created');
});
};

let fileCreation = (array) => {
    array.forEach( el => {
        data = Buffer.concat([data, Buffer.from(el)]);
    });
    fileWrite(data);
};
fileCreation(variables);

/* Part 2 

*/

//let bufferMemory = Buffer.alloc(variables.length);

let stringingBuffer = (info) => {
    let strng = '';
    for (let chars of info){
        strng += String.fromCharCode(chars);
    }
    return strng;
};

let myFile = './files/pair-programming.txt';
let toFile = './files/pair-programming.html';
let begin = '<section>\n';
let end = '\n</section>';

let theReader = () => {
  fs.readFile(myFile, (err, info) => {
    if (err) throw err;
    console.log(stringingBuffer(info));

    fs.writeFile(toFile, begin + stringingBuffer(info) + end , (err, data) => {
        if (err) throw err; 
          console.log('Woot woot');
          console.log(info);
    });
  });

  
};

// let theWriter = () => {
//     fs.writeFile(toFile,  , (err, data) => {
//         if (err) throw err;
//         console.log('Woot woot');
//         console.log(data);
//     });
// }
//theWriter();
theReader();