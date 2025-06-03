import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('[name="delay"]');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = parseInt(input.value); // ✅ Перетворюємо у число
  const radio = document.querySelector('input[name="state"]:checked');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radio?.value === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(message => {
      iziToast.success({
        title: '✅',
        message,
        position: 'topRight',
      });
    })
    .catch(message => {
      iziToast.error({
        title: '❌',
        message,
        position: 'topRight',
      });
    });

  form.reset();
});
