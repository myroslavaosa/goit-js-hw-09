const formData = {
    email: "",
    message: "",
};

const myForm = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');

const savedData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

myForm.elements.email.value = savedData.email || "";
myForm.elements.message.value = savedData.message || "";

myForm.addEventListener('input', () => {
    formData.email = myForm.elements.email.value;
    formData.message = myForm.elements.message.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.elements.email.value === "" || e.target.elements.message.value === "") {
        alert('Fill please all fields');
        return;
    };
    console.log(e.target.elements.email.value, e.target.elements.message.value);
    myForm.reset();
    localStorage.clear();
});

myForm.addEventListener('focus', (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        if (e.target.value === "") {
            e.target.placeholder = 'Type area';
        }
    }
}, true); 

myForm.addEventListener('blur', (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        if (e.target.placeholder === "Type area") {
            e.target.placeholder = '';
        }
    }
}, true); 
