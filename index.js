console.log("This is js file of Registration Form of RE");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementById('submit');
let validName = false;
let validEmail = false;
let validPhone = false;
// $('#success').hide();
// $('#failure').hide();

console.log(name, email, phone);

name.addEventListener('blur', () => {
    console.log("name is blured");
    let regex = /^[a-zA-Z]([a-z0-9A-Z\W]){8,10}$/
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Valid Input");
        name.classList.remove('is-invalid');
        validName = true;
    } else {
        console.log("Invalid Input");
        name.classList.add('is-invalid');
        validName = false;
    }
});

email.addEventListener('blur', () => {
    console.log("email is blured");
    let regex = /^([a-z0-9A-Z_\.-]+)@([a-z0-9A-Z_\.-]+)\.([a-zA-Z]){2,3}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Valid Input");
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        console.log("Invalid Input");
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

phone.addEventListener('blur', () => {
    console.log("phone is blured");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Valid Input");
        phone.classList.remove('is-invalid');
        validPhone = true;
    } else {
        console.log("Invalid Input");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});


submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("You are clicked on submit button");

    if (validName && validEmail && validPhone) {
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#success').show();
        $('#failure').hide();
    } else {
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#failure').show();
        $('#success').hide();

    }

})