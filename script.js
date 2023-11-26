let display = document.getElementById('display');

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {

  button.addEventListener('click', () => {

    if(button.classList.contains('operator')){
      display.value += button.id; 
    } else if(button.id == 'clear') {
      display.value = '';
    } else if(button.id == 'equals') {
      display.value = eval(display.value);
    } else {
      display.value += button.id;
    }

  });

});
