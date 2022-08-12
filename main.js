const scriptURL = 'https://script.google.com/macros/s/AKfycbxWf1IQQvpJNiJhfRQZYyv8VdIskZcCaLkqDqbSDIgMMi_fZT5NgoQAMTuGS96N7ZkB/exec';
const form = document.forms['submit-to-google-sheet'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //submit diklik
  //tampilkan loading, hilangkan kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      //tampilkan kirim, hilangkan loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      //tampilkan alert
      myAlert.classList.toggle('d-none');
      //reset form
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
