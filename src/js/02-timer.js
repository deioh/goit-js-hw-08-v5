const inputDate = document.getElementById('datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const fp = flatpickr('#datetime-picker', {}); // flatpickr
buttonDisabled(true);

// Set up options for the flatpickr date picker
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  /**
   * Callback function for when the date picker is closed.
   * It checks if the selected date is in the future.
   * If not, it displays an alert and prevents the button from being enabled.
   **/

  onClose: function (selectedDates) {
    // Log the first selected date
    console.log('selectedDates[0]:', selectedDates[0]);

    // Get the input date value
    const dateValue = selectedDates[0];

    // Log the input date value
    console.log('inputDateValue:', dateValue);

    // Check if the input date is in the future
    if (!isFutureDate(dateValue)) {
      // Log that the input date is not in the future
      console.log('Input date is not in the future');
      // Display an alert to the user
      alert('Please choose a date in the future');
      // Prevent the button from being enabled
      return;
    }

    // Log that the input date is in the future
    console.log('Input date is in the future');
    // Enable the button
    buttonDisabled(false);
  },
};

// Initialize the flatpickr date picker
flatpickr('#datetime-picker', options);

buttonStart.addEventListener('click', () => {
  // Convert the input value to a Date object
  //const mstest = new Date(inputDate.value);

  const futureDateMs = new Date(inputDate.value).getTime();
  const currentDateMs = Date.now();
  let ticker = futureDateMs - currentDateMs;

  setInterval(() => {
    ticker -= 1000;
    console.log('tickerId:', convertMs(ticker));
  }, 1000);
});

// functions

function intervalId(ms) {
  setInterval(() => {
    convertMs(ms);
  }, 1000);
}

function isFutureDate(date) {
  console.log('Checking if the given date is in the future');
  console.log('Current date:', new Date());
  console.log('Given date:', new Date(date));

  const currentDate = new Date();
  const givenDate = new Date(date);

  // Compare the given date with the current date
  const isFuture = givenDate >= currentDate;

  console.log('Result:', isFuture ? 'Future date' : 'Past date');

  return isFuture;
}

function buttonDisabled(opt) {
  if (opt) {
    buttonStart.setAttribute('disabled', true);
  } else {
    buttonStart.removeAttribute('disabled');
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
