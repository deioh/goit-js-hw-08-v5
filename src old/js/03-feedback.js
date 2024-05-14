import throttle from 'lodash.throttle';

// Elements
const form = document.querySelector('.feedback-form');
const emailEL = form.querySelector('[name="email"]');
const messageEL = form.querySelector('[name="message"]');

// LocalStorage key
const key = 'feedback-form-state';

// Event handler for form inputs
form.addEventListener('input', throttle(onFormInput, 500));

/**
 * Saves form state to LocalStorage when user inputs data
 */
function onFormInput() {
  const email = emailEL.value;
  const message = messageEL.value;

  // Form state
  const feedbackFormState = {
    email,
    message,
  };

  // Stringify and save to LocalStorage
  localStorage.setItem(key, JSON.stringify(feedbackFormState));

  // Log to console
  console.log(localStorage.getItem(key));
}

/**
 * Restores form state from LocalStorage on page reload
 */
function onReload() {
  const feedbackFormState = JSON.parse(localStorage.getItem(key));

  // If form state exists, restore form elements
  if (feedbackFormState) {
    emailEL.value = feedbackFormState.email;
    messageEL.value = feedbackFormState.message;
  }
}

// Run on page load
onReload();
