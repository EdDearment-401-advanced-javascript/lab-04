'use strict';
let people = ['simon', 'garfunckle', 'oats']; 
let pushedPeople =[];
 people.forEach( el => { 
 el.split(',');
 pushedPeople.push(el);
 console.log(pushedPeople);
});