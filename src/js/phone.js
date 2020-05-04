window.onload = function () {
  var phoneNumber = document.getElementById('phone');
  var btnSend = this.document.getElementById('btnSend');
  var operatorMobile = this.document.getElementById('operatorMobile');
  var mobileBlock = this.document.getElementById('mobileBlock');
  $(document).ready(function () {
    $(phoneNumber).mask("+7(999)999-99-99");
  });

  $(phoneNumber).keypress(function() {
    var operator = phoneNumber.value[3] + phoneNumber.value[4] + phoneNumber.value[5];
    // console.log(operator);
    if (operator === '910' || operator === '915' || operator === '916' || operator === '919' || operator === '917') {
      operatorMobile.textContent = "МТС";
      mobileBlock.classList.add('operatorMTC');
    } else if (operator === '925' || operator === '926' || operator === '929') {
      operatorMobile.textContent = "МЕГАФОН";
      mobileBlock.classList.add('operatorMEGAFON');
    } else if (
      operator === '903' ||
      operator === '905' ||
      operator === '906' ||
      operator === '909' ||
      operator === '961' ||
      operator === '962' ||
      operator === '963' ||
      operator === '964' ||
      operator === '965'
    ) {
      operatorMobile.textContent = "Билайн";
      mobileBlock.classList.add('operatorBILAIN');
    } else if (operator === '902' || operator === '977') {
      operatorMobile.textContent = "Теле2";
      mobileBlock.classList.add('operatorTELE2');
    }
    else {
      operatorMobile.textContent = "ОПЕРАТОР";
      mobileBlock.classList.remove('operatorMTC');
      mobileBlock.classList.remove('operatorMEGAFON');
      mobileBlock.classList.remove('operatorBILAIN');
      mobileBlock.classList.remove('operatorTELE2');
    }
  });

  // btnSend.onclick = function () {
  //   var operator = phoneNumber.value[3] + phoneNumber.value[4] + phoneNumber.value[5];
  //   console.log(operator);
  //   if (operator === '910' || operator === '915' || operator === '916' || operator === '919' || operator === '917') {
  //     console.log('MTC');
  //   } else if (operator === '925' || operator === '926' || operator === '929') {
  //     console.log('МЕГАФОН');
  //   } else if (
  //     operator === '903' ||
  //     operator === '905' ||
  //     operator === '906' ||
  //     operator === '909' ||
  //     operator === '961' ||
  //     operator === '962' ||
  //     operator === '963' ||
  //     operator === '964' ||
  //     operator === '965'
  //   ) {
  //     console.log('Билайн');
  //   } else if (operator === '902' || operator === '977') {
  //     console.log('Теле2');
  //   }
  // };
};
