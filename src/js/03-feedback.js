import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";

const refs ={
    form : document.querySelector(".feedback-form"),
    email : document.querySelector("input"),
    message : document.querySelector("textarea"),
}

refs.form.addEventListener("input", throttle(onTextareaInput, 500));
refs.form.addEventListener("submit", onFormSubmit);


populateTextarea();

function onTextareaInput() {
    const formData = {
        email: refs.email.value,
        message: refs.message.value,
    };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    evt.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY); 
}


function populateTextarea() {
    const savedForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if(savedForm){
      console.log(savedForm);
      refs.email.value = savedForm.email;
      refs.message.value =savedForm.message;
     }
    console.log(savedForm);
}

