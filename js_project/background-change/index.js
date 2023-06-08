const backgroundSelect = document.querySelector('#background');

  backgroundSelect.addEventListener('change', (event) => {
    const selectedColor = event.target.value;
    const container = document.querySelector('container');

    switch (selectedColor) {
      case '1':
        container.style.backgroundColor = 'yellow';
        break;
      case '2':
        container.style.backgroundColor = 'pink';
        break;
      case '3':
        container.style.backgroundColor = 'red';
        break;
      case '4':
        container.style.backgroundColor = 'green';
        break;
      case '5':
        container.style.backgroundColor = 'blue';
        break;
    }
  });
