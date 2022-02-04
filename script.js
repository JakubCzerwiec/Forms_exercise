const form = document.getElementsByTagName('form')[0];

const email = document.querySelector('#email');
const errorEmail = document.querySelector('.errorEmail');

const country = document.querySelector('#country');
const errorCountry = document.querySelector('.errorCountry');

const zipCode = document.querySelector('#zipCode');
const errorZip = document.querySelector('.errorZip');

const pass = document.querySelector('#pass');
const errorPass = document.querySelector('.errorPass');

const passConf = document.querySelector('#passConf');
const errorPassConf = document.querySelector('.errorPassConf');


// email

email.addEventListener('input', (e) => {
    if (email.validity.valid) {
        errorEmail.textContent = '';
        errorEmail.className = 'errorEmail';
    } else {
        showEmailError()
    }
})

// country

country.addEventListener('input', (e) => {
    if (country.validity.valid) {
        errorCountry.textContent = '';
        errorCountry.className = 'errorCountry';
    } else {
        showCountryError()
    }
})

// Zip

zipCode.addEventListener('input', (e) => {
    if (zipCode.validity.valid) {
        errorZip.textContent = '';
        errorZip.className = 'errorZip';
    } else {
        showZipError()
    }
})

// Pass

pass.addEventListener('input', (e) => {
    if (pass.validity.valid) {
        errorPass.textContent = '';
        errorPass.className = 'errorPass';
    } else {
        showPassError()
    }
})

// Pass confirm

passConf.addEventListener('input', (e) => {
    if (passConf.validity.valid) {
        errorPassConf.textContent = '';
        errorPassConf.className = 'errorPassConf';
    } else {
        showPassConfError()
    }
})


form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
        showEmailError();
        e.preventDefault();
    } else if (!country.validity.valid) {
        showCountryError();
        e.preventDefault();
    } else if (!zipCode.validity.valid) {
        showZipError();
        e.preventDefault();
    } else if (!pass.validity.valid) {
        showPassError();
        e.preventDefault();
    } else if (!passConf.validity.valid) {
        showPassConfError();
        e.preventDefault();
    } else if (passConf.value !== pass.value) {
        errorPassConf.textContent = 'Passwords are not the same';
        errorPassConf.className = 'errorPassConf active';
        e.preventDefault();
    }
})


const showEmailError = () => {
    // emali
    if (email.validity.valueMissing) {
        errorEmail.textContent = 'You need to enter an email address.';
    } else if (email.validity.typeMismatch) {
        errorEmail.textContent = 'Value need to be proper email address.';
    } else if (email.validity.tooShort) {
        errorEmail.textContent = 'Address is to short.';
    }

    errorEmail.className = 'errorEmail active';
    }

    // Country
const showCountryError = () => {
        if (!country.validity.patternMismatch) {
        errorCountry.textContent = 'You need to choose one!';
    } 

    errorCountry.className = 'errorCountry active';
    }

    // Zip
const showZipError = () => {
        if (zipCode.validity.valueMissing) {
        errorZip.textContent = 'You need to enter a Zip Code.';
    } else if (zipCode.validity.patternMismatch) {
        errorZip.textContent = 'Value need to be proper Zip Code (XX-XXX).';
    } else if (zipCode.validity.tooShort) {
        errorZip.textContent = 'Value is to short';
    }

    errorZip.className = 'errorZip active';
    }

    // Pass
const showPassError = () => {
        if (pass.validity.valueMissing) {
        errorPass.textContent = 'You need to set up password';
    } else if (pass.validity.tooShort) {
        errorPass.textContent = 'Password is to short (min. 8 characters).';
    }

    errorPass.className = 'errorPass active';
    }

    // Pass confirm
const showPassConfError = () => {
        if (passConf.validity.valueMissing) {
        errorPassConf.textContent = 'You need to confirm password.';
    } 
    }




