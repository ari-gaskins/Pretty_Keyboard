// key press capture module

// keypress module 

let isTypeTest = false;
let isEscKey = false;

let defaultMsg = 'Press any key to start';
let typeTestField = document.getElementById('type-test');
typeTestField.innerHTML = defaultMsg;

const checkTesting = (testField) => {
    if (testField.innerHTML !== defaultMsg) {
        return isTypeTest = true;
    }
    return isTypeTest = false;
};

const checkEscKey = (event) => {
    if (event.key !== 'Escape') {
        return isEscKey = false;
    }
    return isEscKey = true;
};

window.addEventListener('keypress', checkEscKey);

const resetTest = (event) => {
    if (isEscKey && !isTypeTest) {
       typeTestField.innerHTML = defaultMsg; 
    }
};

const showTestField = (event, array) => {
    
};