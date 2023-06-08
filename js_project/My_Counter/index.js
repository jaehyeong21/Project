
  const counter = document.querySelector('container > div:nth-child(2)');
  const increaseBtn = document.querySelector('.button > button:nth-child(1)');
  const resetBtn = document.querySelector('.button > button:nth-child(2)');
  const decreaseBtn = document.querySelector('.button > button:nth-child(3)');

  let count = 0;

  increaseBtn.addEventListener('click', () => {
    count++;
    counter.innerText = count;
  });

  resetBtn.addEventListener('click', () => {
    count = 0;
    counter.innerText = count;
  });

  decreaseBtn.addEventListener('click', () => {
    count--;
    counter.innerText = count;
  });
