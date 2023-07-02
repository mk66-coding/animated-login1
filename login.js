const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
const signInForm = document.querySelector('.sign-in form');
const signUpForm = document.querySelector('.sign-up form');



signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});



signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Perform login logic here
});

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Perform sign up logic here
});