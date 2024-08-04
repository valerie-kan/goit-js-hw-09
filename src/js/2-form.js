let formData = {
    email: '',
    message: '',
}

const form = document.querySelector('.feedback-form');

function fillFormFromLS() {
    const infoFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (infoFromLS === null) {
        return;
    }

    formData = infoFromLS;

    for (const key in infoFromLS) {
        form.elements[key].value = infoFromLS[key];
    }
}

fillFormFromLS();

function formFillInfo(event) {
    if (event.target.name === 'email') {
        formData.email = event.target.value;
    } else formData.message = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitForm(event) {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    } else console.log(formData);
    
    form.reset();
    localStorage.removeItem('feedback-form-state');
}

form.addEventListener('input', formFillInfo);
form.addEventListener('submit', submitForm);