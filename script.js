'use strict';
const img = document.querySelector('.img');
const btn = document.querySelector('.btn');
const title = document.querySelector('.title');
btn.addEventListener('click', function () {
  img.classList.add('flip');
  setTimeout(() => {
    const result = Math.random() < 0.5 ? 'head' : 'tail';

    img.src = result === 'head' ? 'resources/heads.svg' : 'resources/tails.svg';
    img.classList.remove('flip');
    title.textContent = result === 'head' ? 'Head' : 'Tail';
  }, 1000);
});

img.addEventListener('click', function () {
  img.classList.add('flip');

  setTimeout(() => {
    const result = Math.random() < 0.5 ? 'head' : 'tail';

    img.src = result === 'head' ? 'resources/heads.svg' : 'resources/tails.svg';
    img.classList.remove('flip');
    title.textContent = result === 'head' ? 'Head' : 'Tail';
  }, 1000);
});
