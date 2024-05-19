const inputDate = document.getElementById('datetime-picker');
const buttonStart = document.querySelector('button[data-start]');

// Set up options for the flatpickr date picker
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

// Initialize the flatpickr date picker
flatpickr('#datetime-picker', options);

// check future date

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

buttonStart.addEventListener('click', () => {
  const inputDateValue = inputDate.value;

  if (!isFutureDate(inputDateValue)) {
    alert('Please choose a date in the future');
    return;
  }

  alert('Date is in the future');
});
