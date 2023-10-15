import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const feedbackForm = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';


///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Функції
///////////////////////////////////////////////////////////////////////////////////////////////////////////


// Функція для отримання
const getStoredData = () => {
    const storedData = localStorage.getItem(storageKey);
    return storedData ? JSON.parse(storedData) : {}
};

// Функція для зебережння
const saveData = throttle(() => {
    const dataToStore = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(storageKey,JSON.stringify(dataToStore));
}, 500 );

// Функція дл заповнення
const fullFill = () => {
    const storedData = getStoredData();
    emailInput.value = storedData.email || '';
    messageInput.value = storedData.message || '';
};

// Функція для очищення
const clear = () => {
    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem(storageKey);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Обробники
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Обробник введеня для збереження у стореджі
const handleInput = () => {
    saveData();
};

// Обробник сабміту у консоль
const handleSubmit = (event) => {
 event.preventDefault();
 console.log('Form submitted with data:', {
    email: emailInput.value,
    message: messageInput.value,
 });
 clear();
};



// Обробники введення інпутів 
emailInput.addEventListener('input',handleInput);
messageInput.addEventListener('input',handleInput);
feedbackForm.addEventListener('submit',handleSubmit);



// Автозаповнення
document.addEventListener('DOMContentLoaded', () => {
    fullFill();
});