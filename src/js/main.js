'use strict';
window.onload = function() {
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
};
