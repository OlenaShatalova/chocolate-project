import Swiper from 'swiper';

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const cardElement = this.nextElementSibling;
    const item = this.parentElement;
    console.log(item);

    cardElement.classList.toggle('is-flipped');
    item.classList.toggle('flip-background');
    this.classList.toggle('reverse-arrow');

    setTimeout(() => {
      cardElement.classList.toggle('is-flipped');
      item.classList.toggle('flip-background');
      this.classList.toggle('reverse-arrow');
    }, 14000);
  });
});
