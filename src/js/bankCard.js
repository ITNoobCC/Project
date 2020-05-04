'use strict';
/*window.onload = function() {
  var mobile = document.getElementById('mobileCommunication');
  var bank = document.getElementById('bankCard');
  var sendMobile = document.getElementById('sendMobile');
  var sendBank = document.getElementById('sendBank');

  var mobileBlock = document.getElementById('mobile');
  var bankBlock = document.getElementById('bank');

  sendMobile.onclick = function() {
    if (mobile.value === '') {
      alert('Номер не может быть пустым!');
    } else if (mobile.value.length < 11) {
      alert('Номер должен иметь 11 цифр, не меньше!');
    } else if (mobile.value.length > 11) {
      alert('Номер должен содержать 11 цифр, не больше!');
    }
    if (mobile.value[0] !== '8') {
      alert('Первая цифра должна быть 8!');
    }
  };
  mobile.oninput = function() {
    var operator =
      mobile.value[0] + mobile.value[1] + mobile.value[2] + mobile.value[3];
    if (
      operator === '8910' ||
      operator === '8915' ||
      operator === '8916' ||
      operator === '8919' ||
      operator === '8917'
    ) {
      console.log('MTC');
      mobileBlock.classList.remove('megafon');
      mobileBlock.classList.remove('bilain');
      mobileBlock.classList.remove('tele2');
      mobileBlock.classList.add('mtc');
    } else if (
      operator === '8925' ||
      operator === '8926' ||
      operator === '929'
    ) {
      console.log('Мегафон');
      mobileBlock.classList.remove('mtc');
      mobileBlock.classList.remove('bilain');
      mobileBlock.classList.remove('tele2');
      mobileBlock.classList.add('megafon');
    } else if (
      operator === '8903' ||
      operator === '8905' ||
      operator === '8906' ||
      operator === '8909' ||
      operator === '8961' ||
      operator === '8962' ||
      operator === '8963' ||
      operator === '8964' ||
      operator === '8965'
    ) {
      console.log('Билайн');
      mobileBlock.classList.remove('megafon');
      mobileBlock.classList.remove('mtc');
      mobileBlock.classList.remove('tele2');
      mobileBlock.classList.add('bilain');
    } else if (operator === '8902' || operator === '8977') {
      console.log('Теле2');
      mobileBlock.classList.remove('megafon');
      mobileBlock.classList.remove('bilain');
      mobileBlock.classList.remove('mtc');
      mobileBlock.classList.add('tele2');
    } else {
      mobileBlock.classList.remove('megafon');
      mobileBlock.classList.remove('bilain');
      mobileBlock.classList.remove('mtc');
      mobileBlock.classList.remove('tele2');
    }
  };

  sendBank.onclick = function() {
    if (bank.value === '') {
      alert('Вы ничего не ввели!');
    } else if (bank.value.length < 16)
    {
      alert('Номер карты не должен быть меньше 16!');
    } else if (bank.value.length > 16)
    {
      alert('Номер карты больше 16 цифр!');
    }
  };

  bank.oninput = function()
  {
    if (bank.value[0] === '4')
    {
      console.log('Visa');
      bankBlock.classList.remove('master-card');
      bankBlock.classList.remove('american-express');
      bankBlock.classList.add('visa');
    }
    else if (bank.value[0] === '5')
    {
      console.log('MS');
      bankBlock.classList.remove('visa');
      bankBlock.classList.remove('american-express');
      bankBlock.classList.add('master-card');
    }
    else if (bank.value[0] === '3')
    {
      console.log('American Express');
      bankBlock.classList.remove('master-card');
      bankBlock.classList.remove('visa');
      bankBlock.classList.add('american-express');
    }
    else {
      bankBlock.classList.remove('master-card');
      bankBlock.classList.remove('american-express');
      bankBlock.classList.remove('visa');
    }
  };
};*/
window.onload = function () {
  var sendBank = document.getElementById('btnSend');
  var inputNumberCard = document.getElementById('input-numberCard');
  var inputName = document.getElementById('input-name');
  var inputCvc = document.getElementById('input-cvc');
  var phoneNumber = document.getElementById('phone');

  let errorNumberCard = document.createElement('div');
  let errorNameCard = document.createElement('div');
  let errorCvcCard = document.createElement('div');

  inputNumberCard.oninput = function () {
    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
    errorNumberCard.className = 'errorMessage';
    if (inputNumberCard.value === '') {
      errorNumberCard.innerHTML = '<h4>Номер карты не заполнен!</h4>';
    } else if (inputNumberCard.value.length < 16) {
      errorNumberCard.innerHTML = '<h4>Номер карты не должен быть меньше 16!</h4>';
    }
    else {
      errorNumberCard.innerHTML = '<h4 class="messgaeGood">Номер карты заполен верно!</h4>';
    }
  };

  function validationName() {
    var flagEnter = 0;
    var flagNumber = 0;
    errorNameCard.className = 'errorMessage';
    for (var i = 0; i < inputName.value.length; i++) {
      if (inputName.value[i] === ' ') {
        flagEnter++;
      }
      if (inputName.value[i] === '0' || inputName.value[i] === '1' || inputName.value[i] === '2' || inputName.value[i] === '3' || inputName.value[i] === '4' || inputName.value[i] === '5' || inputName.value[i] === '6' || inputName.value[i] === '7' || inputName.value[i] === '8' || inputName.value[i] === '9') {
        flagNumber++;
      }
    }
    if (flagEnter > 1 || flagEnter === 0) {
      errorNameCard.innerHTML = '<h4>Имя пользователя заполнено не верно!</h4>'
    }
    else {
      errorNameCard.innerHTML = '<h4 class="messgaeGood">Имя пользователя заполнено верно!</h4>'
    }
    if (flagNumber !== 0) {
      errorNameCard.innerHTML = '<h4>Имя не должно содержать цифры!</h4>'
    }
  };

  inputName.oninput = function () {
    this.value = this.value.toUpperCase();
    errorNameCard.className = 'errorMessage';
    if (inputName.value === '') {
      errorNameCard.innerHTML = '<h4>Имя пользователя не заполнено!</h4>'
    }
    else if (inputName.value.length < 6) {
      errorNameCard.innerHTML = '<h4>Имя пользователя слишком короткое!</h4>'
    }
  };

  inputCvc.oninput = function () {
    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
    errorCvcCard.className = 'errorMessage';
    if (inputCvc.value === '') {
      errorCvcCard.innerHTML = '<h4>CVC карты не заполнен!</h4>';
    } else if (inputCvc.value.length < 3) {
      errorCvcCard.innerHTML = '<h4>CVC должен состоять из 3 цифр!</h4>';
    }
    else {
      errorCvcCard.innerHTML = '<h4 class="messgaeGood">CVC заполнено верно!</h4>';
    }
  };

  sendBank.onclick = function () {
    inputName.value = inputName.value.replace(/\s+/g, ' ').trim();
    validationName();
    document.body.append(errorNumberCard);
    document.body.append(errorNameCard);
    document.body.append(errorCvcCard);
  };

  phoneNumber.oninput = function() {
    //phoneNumber.value[0] = '+';
    //phoneNumber.value[1] = '7';
    console.log(phoneNumber.value);
  };
};
