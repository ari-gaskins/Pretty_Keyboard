// run test module

// type test variables
const typeTestWords = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet',
 'consectetur', 'adipiscing', 'elit', 'Fusce', 'elit', 'dui',
  'cursus', 'quis', 'feugiat', 'eu', 'gravida', 'vitae', 'nisi',
   'Donec', 'quis', 'molestie', 'lacus', 'In', 'et', 'metus'];

const typeTestField = document.getElementById('type-test');
let defaultMsg = 'Press enter to start';
typeTestField.innerHTML = defaultMsg;

const stringToCharacters = (words)=> {
   let typeTestCharacters = words.map(word => word.split());
   return typeTestCharacters;
};

const showTestField = (event, words) => {
    if (isTypeTest) {
        // Do nothing
    }
    for (let i; i <= words.length; i++) {
      typeTestField.html = words[i];
    }
};