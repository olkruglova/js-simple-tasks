
var btn = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');

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

    var sum = document.querySelector('#result');
    sum.innerHTML = '<h3><b>Twój wynik</b>: ' + result +'</h3>';
}

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