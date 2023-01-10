// keypress module 

let isTypeTest = false;
let isEscKey = false;



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

const resetTest = (testField, msg) => {
    if (!isEscKey && isTypeTest) {
       // Do nothing 
    }
    testField.innerHTML = msg;
};

resetTest(typeTestField, defaultMsg);

