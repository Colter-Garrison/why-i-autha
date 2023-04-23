import { signupUser, redirectIfLoggedIn, signInUser } from './fetch-utils.js';

const signUpForm = document.getElementById('sign-up');

const signInForm = document.getElementById('sign-in');

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signupUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/other-page');
    }
});