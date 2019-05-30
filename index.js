'use strict';

const fs = require('fs');
const reader = require('readline');

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

//From lecture to deal with HTML tags

//let bufferMemory = Buffer.alloc(variables.length);

// class Converter {
//   constructor() {
//     this.buffer = Buffer.from('');
//     this.tags = {};
//   }
//   createTag (tags, buffer) {
//     if (!this.tags[tag] ) {
//       this.tags[tag] = {
//         open: Buffer.from(`<${tag}>`),
//         close: Buffer.from(`</${tag}>`),
//       };
//     };
//   }
//   this.buffer = Buffer.concat( [this.buffer, this.tags[tag].open, buffer, this.tags[tag].close])

//   convert(file) {
//     let linReader = readThis.createInterface({
//       input fs.createReadStream(file)
//     })
//   }
// }

// let stringingBuffer = (info) => {
//     let strng = '';
//     for (let chars of info){
//         strng += String.fromCharCode(chars);
//     }
//     return strng;
// }; End from lecture


let myFile = './files/pair-programming.txt';
let toFile = './files/index.html';
let begin = '<article>\n';
let end = '\n</article>';

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
