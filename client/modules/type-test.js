// typing test module

// type test variables
let typeTestWords = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet',
 'consectetur', 'adipiscing', 'elit', 'Fusce', 'elit', 'dui',
  'cursus', 'quis', 'feugiat', 'eu', 'gravida', 'vitae', 'nisi',
   'Donec', 'quis', 'molestie', 'lacus', 'In', 'et', 'metus'];
let typeTestField = document.getElementById('type-test').innerHTML;

// function that takes string array argument 
//and replaces designated field inner HTML 
//with strings that overflow, should scroll as
// user types. should also show an enter symbol
// after every 5 strings. First letter of every
// 6th string should be capital

// function that takes string array argument and returns
// array of each individual letter