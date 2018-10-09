
var btn = document.querySelector('.btn1');

/*
task1: Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут
*/
btn.onclick = function() {
    var number1 = document.querySelector('.input1').value;
    var number2 = document.querySelector('.input2').value;
    var number3 = document.querySelector('.input3').value;
    var results = document.querySelector('.result');
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    number3 = parseInt(number3);
    var result = number1 + number2 + number3;
    results.value = result;
    //...и запишите их сумму в абзац с id="result"
    var sum = document.querySelector('#result');
    sum.innerHTML = '<h3><b>Twój wynik</b>: ' + result +'</h3>';
}

/*
task2: Дан инпут. В него вводится число. По нажатии на кнопку найдите сумму цифр этого числа.
*/
var btn2 = document.querySelector('.btn2');

btn2.onclick = function() {
    var num = document.querySelector('.input4').value;
    var summ = 0;
    var res = num.split('');
    console.log(res);
    for (var i=0; i<res.length; i++) {
        res[i] = parseInt(res[i]);
        summ += res[i];
    }
    var sum = document.querySelector('#result2');
    sum.innerHTML = '<h3><b>Twój wynik</b>: ' + summ +'</h3>';
}

/*
task3: Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел
*/
var form = document.querySelector(".input5");
form.addEventListener("blur", function() {
    var nums = form.value;
    nums = nums.split(',');
    console.log(nums)
    var res = 0;
    for(var i=0; i<nums.length; i++){
        nums[i] = parseInt(nums[i]);
        res += nums[i]/nums.length;
        console.log(res)
    }
    var wyn = document.querySelector('#result3');
    wyn.innerHTML = '<h3><b>Twój wynik</b>: ' + res +'</h3>';
}, true);